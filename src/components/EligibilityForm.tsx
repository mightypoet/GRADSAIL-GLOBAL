import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

export const EligibilityForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [preferredCountry, setPreferredCountry] = useState('');
  const [currentQualification, setCurrentQualification] = useState('');
  const [intendedDegreeLevel, setIntendedDegreeLevel] = useState('');
  const [preferredIntake, setPreferredIntake] = useState('');
  const [intendedCourse, setIntendedCourse] = useState('');
  const [approximateBudget, setApproximateBudget] = useState('');
  const [englishTestStatus, setEnglishTestStatus] = useState('');
  const [additionalQuestions, setAdditionalQuestions] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{
    referenceId: string;
    submittedAt: string;
    summary: {
      studentName: string;
      preferredCountry: string;
      intendedDegreeLevel: string;
      preferredIntake: string;
      intendedCourse: string;
    };
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone.trim())) {
      setError('Please enter a valid phone number (e.g., +91 98765 43210).');
      return;
    }
    if (whatsapp.trim() && !/^[+\d][\d\s\-()]{6,20}$/.test(whatsapp.trim())) {
      setError('Please enter a valid WhatsApp number or leave the optional field blank.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!preferredCountry) {
      setError('Please select your preferred study country.');
      return;
    }
    if (!currentQualification) {
      setError('Please select your current qualification.');
      return;
    }
    if (!intendedDegreeLevel) {
      setError('Please select your intended degree level.');
      return;
    }
    if (!preferredIntake) {
      setError('Please select your preferred intake.');
      return;
    }
    if (intendedCourse.trim().length < 2) {
      setError('Please specify your intended course or subject area.');
      return;
    }
    if (!privacyConsent) {
      setError('Please accept the privacy consent before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          whatsapp: whatsapp.trim(),
          email: email.trim(),
          preferredCountry,
          currentQualification,
          intendedDegreeLevel,
          preferredIntake,
          intendedCourse: intendedCourse.trim(),
          approximateBudget,
          englishTestStatus,
          additionalQuestions: additionalQuestions.trim(),
          privacyConsent,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Submission failed. Please check your inputs.');
      }
      setConfirmation(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit your assessment right now.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmation(null);
    setFullName('');
    setPhone('');
    setWhatsapp('');
    setEmail('');
    setPreferredCountry('');
    setCurrentQualification('');
    setIntendedDegreeLevel('');
    setPreferredIntake('');
    setIntendedCourse('');
    setApproximateBudget('');
    setEnglishTestStatus('');
    setAdditionalQuestions('');
    setPrivacyConsent(false);
    setError(null);
  };

  if (confirmation) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
        <div className="flex items-start gap-4 p-5 rounded-xl bg-emerald-50 border border-emerald-200">
          <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide">
              ELIGIBILITY ASSESSMENT RECORDED
            </p>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Thank You, {confirmation.summary.studentName}
            </h3>
            <p className="text-sm text-slate-700">
              Your study abroad profile for <span className="font-semibold">{confirmation.summary.preferredCountry}</span> ({confirmation.summary.intendedDegreeLevel} in {confirmation.summary.intendedCourse}) has been registered with our advisory desk.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div>
            <span className="text-slate-500 block">Reference ID</span>
            <span className="font-mono font-semibold text-slate-900 mt-0.5 block">
              {confirmation.referenceId}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Preferred Destination</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">
              {confirmation.summary.preferredCountry}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Target Degree & Subject</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">
              {confirmation.summary.intendedDegreeLevel} · {confirmation.summary.intendedCourse}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Target Intake</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">
              {confirmation.summary.preferredIntake}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-700">
          <h4 className="font-display font-bold text-slate-900">Recommended Next Steps in Your Journey:</h4>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-600">
            <li>
              <strong>Step 01 — Profile Evaluation:</strong> Our country counselor reviews your qualification and course alignment.
            </li>
            <li>
              <strong>Step 02 — Shortlist & SOP Discussion:</strong> Prepare your academic transcripts and draft CV for your 1-on-1 counseling call.
            </li>
            <li>
              <strong>Step 03 — Language & Timeline Planning:</strong> Review target IELTS/PTE or German language milestones for the {confirmation.summary.preferredIntake} intake.
            </li>
          </ol>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Submit Another Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 space-y-6"
    >
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm font-medium"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <label htmlFor="elig-fullName" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="elig-fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          />
        </div>

        <div>
          <label htmlFor="elig-phone" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Phone Number <span className="text-rose-600">*</span>
          </label>
          <input
            id="elig-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          />
        </div>

        <div>
          <label htmlFor="elig-whatsapp" className="block text-xs font-semibold text-slate-800 mb-1.5">
            WhatsApp Number <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="elig-whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          />
        </div>

        <div>
          <label htmlFor="elig-email" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Email Address <span className="text-rose-600">*</span>
          </label>
          <input
            id="elig-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          />
        </div>
      </div>

      {/* Row 2: Academic & Destination Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <label htmlFor="elig-country" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Preferred Country <span className="text-rose-600">*</span>
          </label>
          <select
            id="elig-country"
            required
            value={preferredCountry}
            onChange={(e) => setPreferredCountry(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">Select Country</option>
            {SITE_CONFIG.countriesList.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="elig-qualification" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Current Qualification <span className="text-rose-600">*</span>
          </label>
          <select
            id="elig-qualification"
            required
            value={currentQualification}
            onChange={(e) => setCurrentQualification(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">High School / Bachelor&apos;s / Master&apos;s</option>
            {SITE_CONFIG.qualifications.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="elig-degree" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Intended Degree Level <span className="text-rose-600">*</span>
          </label>
          <select
            id="elig-degree"
            required
            value={intendedDegreeLevel}
            onChange={(e) => setIntendedDegreeLevel(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">Select Target Degree</option>
            {SITE_CONFIG.degreeLevels.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="elig-intake" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Preferred Intake <span className="text-rose-600">*</span>
          </label>
          <select
            id="elig-intake"
            required
            value={preferredIntake}
            onChange={(e) => setPreferredIntake(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">Spring 2027 / Fall 2027</option>
            {SITE_CONFIG.intakes.map((intake) => (
              <option key={intake} value={intake}>
                {intake}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Course, Budget, English Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label htmlFor="elig-course" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Intended Course or Subject <span className="text-rose-600">*</span>
          </label>
          <input
            id="elig-course"
            type="text"
            required
            value={intendedCourse}
            onChange={(e) => setIntendedCourse(e.target.value)}
            placeholder="e.g., Data Science, Mechanical Eng, MBA, Law"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          />
        </div>

        <div>
          <label htmlFor="elig-budget" className="block text-xs font-semibold text-slate-800 mb-1.5">
            Approximate Annual Budget <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="elig-budget"
            value={approximateBudget}
            onChange={(e) => setApproximateBudget(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">Select Approximate Range</option>
            <option value="Public / State-Subsidized Track (Plus Blocked Account)">
              Public / State-Subsidized Track (Plus Living Costs)
            </option>
            <option value="Up to USD 15,000 / year">Up to USD 15,000 / year</option>
            <option value="USD 15,000 – USD 30,000 / year">USD 15,000 – USD 30,000 / year</option>
            <option value="USD 30,000+ / year">USD 30,000+ / year</option>
            <option value="Need Guidance / Education Loan">Need Guidance / Planning Education Loan</option>
          </select>
        </div>

        <div>
          <label htmlFor="elig-english" className="block text-xs font-semibold text-slate-800 mb-1.5">
            English Proficiency Test Status <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="elig-english"
            value={englishTestStatus}
            onChange={(e) => setEnglishTestStatus(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
          >
            <option value="">Select Test Status</option>
            <option value="IELTS / PTE Completed">IELTS / PTE Score Available</option>
            <option value="Preparing for IELTS / PTE">Currently Preparing for IELTS / PTE</option>
            <option value="Need IELTS / PTE / German Coaching">Need IELTS / PTE / German Coaching</option>
            <option value="Not Started Yet">Not Started Yet</option>
          </select>
        </div>
      </div>

      {/* Row 4: Additional Questions */}
      <div>
        <label htmlFor="elig-questions" className="block text-xs font-semibold text-slate-800 mb-1.5">
          Additional Questions or Specific Goals <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="elig-questions"
          rows={2}
          value={additionalQuestions}
          onChange={(e) => setAdditionalQuestions(e.target.value)}
          placeholder="Tell us about your GPA, preferred universities, scholarship questions, or German language interest..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
        />
      </div>

      {/* Row 5: Privacy Consent & Submit Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
        <div className="flex items-start gap-2.5 max-w-xl">
          <input
            id="elig-consent"
            type="checkbox"
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
          />
          <label htmlFor="elig-consent" className="text-xs text-slate-600 leading-relaxed">
            I agree to share my academic and contact details with Gradsail Global for study abroad eligibility evaluation in accordance with the{' '}
            <Link to="/privacy-policy" className="text-sky-700 underline hover:text-sky-800">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="px-7 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 disabled:opacity-60 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          {submitting ? 'Evaluating Profile...' : 'Capture My Eligibility'}
        </button>
      </div>
    </form>
  );
};
