import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

interface SubmissionRecord {
  id: string;
  type: 'eligibility' | 'counseling' | 'language-inquiry' | 'contact';
  createdAt: string;
  payload: Record<string, unknown>;
}

function ensureStore(): SubmissionRecord[] {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
    return [];
  }
  try {
    const raw = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(raw) as SubmissionRecord[];
  } catch {
    return [];
  }
}

function saveSubmission(type: SubmissionRecord['type'], prefix: string, payload: Record<string, unknown>): SubmissionRecord {
  const existing = ensureStore();
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const record: SubmissionRecord = {
    id: `${prefix}-2026-${randomDigits}`,
    type,
    createdAt: new Date().toISOString(),
    payload,
  };
  existing.unshift(record);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing.slice(0, 500), null, 2), 'utf-8');
  return record;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s\-()]{6,20}$/;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // SEO robots.txt
  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain').send(
      [
        'User-agent: *',
        'Allow: /',
        'Sitemap: /sitemap.xml',
      ].join('\n')
    );
  });

  // SEO sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    const routes = [
      '/',
      '/destinations/united-kingdom',
      '/destinations/australia',
      '/destinations/germany',
      '/destinations/dubai-uae',
      '/destinations/france',
      '/destinations/south-korea',
      '/services/admissions-university-selection',
      '/services/visa-guidance-preparation',
      '/services/forex-blocked-account-assistance',
      '/services/apostille-legal-attestation',
      '/services/language-coaching-hub',
      '/services/pre-departure-accommodation',
      '/scholarships',
      '/resources',
      '/about',
      '/contact',
      '/faq',
      '/privacy-policy',
      '/terms',
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
    res.type('application/xml').send(xml);
  });

  // API: Health & Config status
  app.get('/api/health', (_req, res) => {
    const submissions = ensureStore();
    res.json({
      status: 'ok',
      service: 'Gradsail Global Advisory Backend',
      totalSubmissionsStored: submissions.length,
    });
  });

  // API: Free Eligibility Assessment Lead Capture
  app.post('/api/eligibility', (req, res) => {
    const {
      fullName,
      phone,
      whatsapp,
      email,
      preferredCountry,
      currentQualification,
      intendedDegreeLevel,
      preferredIntake,
      intendedCourse,
      approximateBudget,
      englishTestStatus,
      additionalQuestions,
      privacyConsent,
    } = req.body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide your full name.' });
    }
    if (!phone || typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({ error: 'Please provide a valid phone number.' });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!preferredCountry || !currentQualification || !intendedDegreeLevel || !preferredIntake || !intendedCourse) {
      return res.status(400).json({ error: 'Please complete all required study plan fields.' });
    }
    if (!privacyConsent) {
      return res.status(400).json({ error: 'Please accept the privacy policy consent to proceed.' });
    }

    const record = saveSubmission('eligibility', 'GS-ELIG', {
      fullName: fullName.trim(),
      phone: phone.trim(),
      whatsapp: whatsapp ? String(whatsapp).trim() : '',
      email: email.trim(),
      preferredCountry,
      currentQualification,
      intendedDegreeLevel,
      preferredIntake,
      intendedCourse: String(intendedCourse).trim(),
      approximateBudget: approximateBudget || 'Not specified',
      englishTestStatus: englishTestStatus || 'Not specified',
      additionalQuestions: additionalQuestions ? String(additionalQuestions).trim() : '',
      privacyConsent: Boolean(privacyConsent),
    });

    return res.status(201).json({
      success: true,
      referenceId: record.id,
      submittedAt: record.createdAt,
      summary: {
        studentName: fullName.trim(),
        preferredCountry,
        intendedDegreeLevel,
        preferredIntake,
        intendedCourse: String(intendedCourse).trim(),
      },
    });
  });

  // API: Counseling Booking (Modal, Destination Page, or Service Page)
  app.post('/api/counseling', (req, res) => {
    const { fullName, phone, email, targetCountry, preferredService, studyIntake, notes, privacyConsent, sourcePage } =
      req.body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    if (!phone || typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({ error: 'Please enter a valid phone or WhatsApp number.' });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!targetCountry) {
      return res.status(400).json({ error: 'Please select a target study destination.' });
    }
    if (!privacyConsent) {
      return res.status(400).json({ error: 'Please agree to the privacy policy before submitting.' });
    }

    const record = saveSubmission('counseling', 'GS-COUNSEL', {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      targetCountry,
      preferredService: preferredService || 'General Study Abroad Counseling',
      studyIntake: studyIntake || 'Flexible / Next Available',
      notes: notes ? String(notes).trim() : '',
      sourcePage: sourcePage || 'Site-Wide Counseling Form',
      privacyConsent: Boolean(privacyConsent),
    });

    return res.status(201).json({
      success: true,
      referenceId: record.id,
      submittedAt: record.createdAt,
      summary: {
        fullName: fullName.trim(),
        targetCountry,
        preferredService: preferredService || 'General Study Abroad Counseling',
      },
    });
  });

  // API: Language Coaching Hub Inquiry
  app.post('/api/language-inquiry', (req, res) => {
    const { fullName, email, phone, programTrack, currentProficiency, targetCountry, preferredMode, privacyConsent } =
      req.body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!phone || typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }
    if (!programTrack) {
      return res.status(400).json({ error: 'Please select a language or test prep module.' });
    }
    if (!privacyConsent) {
      return res.status(400).json({ error: 'Please confirm privacy consent.' });
    }

    const record = saveSubmission('language-inquiry', 'GS-LANG', {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      programTrack,
      currentProficiency: currentProficiency || 'Beginner / Unassessed',
      targetCountry: targetCountry || 'Germany / Europe / English-speaking',
      preferredMode: preferredMode || 'Flexible',
      privacyConsent: Boolean(privacyConsent),
    });

    return res.status(201).json({
      success: true,
      referenceId: record.id,
      submittedAt: record.createdAt,
      programTrack,
    });
  });

  // API: Contact Inquiry
  app.post('/api/contact', (req, res) => {
    const { fullName, email, phone, inquiryTopic, targetCountry, message, privacyConsent } = req.body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!phone || typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Please include a brief message (at least 10 characters).' });
    }
    if (!privacyConsent) {
      return res.status(400).json({ error: 'Please accept the privacy policy consent.' });
    }

    const record = saveSubmission('contact', 'GS-INQ', {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      inquiryTopic: inquiryTopic || 'General Inquiry',
      targetCountry: targetCountry || 'Undecided',
      message: message.trim(),
      privacyConsent: Boolean(privacyConsent),
    });

    return res.status(201).json({
      success: true,
      referenceId: record.id,
      submittedAt: record.createdAt,
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Gradsail Global server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
