import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES, LANGUAGE_PATHWAYS, SITE_CONFIG } from '../data/siteContent';
import { InlineCounselingForm } from '../components/InlineCounselingForm';
import { PageSEO } from '../components/PageSEO';

interface ServicePageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onOpenCounseling }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Language Hub Course Inquiry Form state
  const [langName, setLangName] = useState('');
  const [langEmail, setLangEmail] = useState('');
  const [langPhone, setLangPhone] = useState('');
  const [langTrack, setLangTrack] = useState('IELTS Academic & UKVI Preparation');
  const [langProficiency, setLangProficiency] = useState('Beginner / Unassessed');
  const [langConsent, setLangConsent] = useState(false);
  const [langSubmitting, setLangSubmitting] = useState(false);
  const [langError, setLangError] = useState<string | null>(null);
  const [langSuccess, setLangSuccess] = useState<{ referenceId: string; programTrack: string } | null>(null);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const toggleCheck = (i: number) => {
    setCheckedItems((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const handleLanguageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLangError(null);

    if (langName.trim().length < 2) {
      setLangError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(langEmail.trim())) {
      setLangError('Please enter a valid email address.');
      return;
    }
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(langPhone.trim())) {
      setLangError('Please enter a valid phone number.');
      return;
    }
    if (!langConsent) {
      setLangError('Please accept the privacy consent.');
      return;
    }

    setLangSubmitting(true);
    try {
      const res = await fetch('/api/language-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: langName.trim(),
          email: langEmail.trim(),
          phone: langPhone.trim(),
          programTrack: langTrack,
          currentProficiency: langProficiency,
          privacyConsent: langConsent,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Unable to submit course inquiry.');
      }
      setLangSuccess({
        referenceId: data.referenceId,
        programTrack: data.programTrack,
      });
    } catch (err) {
      setLangError(err instanceof Error ? err.message : 'Error submitting inquiry.');
    } finally {
      setLangSubmitting(false);
    }
  };

  const isLanguageHub = service.slug === 'language-coaching-hub';

  return (
    <div>
      <PageSEO
        title={`${service.title} — Overseas Education Advisory Service`}
        description={`${service.blueprintSummary} Explore how Gradsail Global supports your study abroad journey.`}
      />

      {/* Service Hero Section */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2 text-xs text-sky-300 font-medium">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span>Services</span>
              <span aria-hidden="true">/</span>
              <span className="text-white font-semibold">{service.navTitle}</span>
            </div>

            <p className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
              ADVISORY SERVICE {service.number} OF 06
            </p>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-sky-100 leading-relaxed font-medium">
              {service.blueprintSummary}
            </p>

            {service.blueprintSecondary && (
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.blueprintSecondary}
              </p>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenCounseling(undefined, `Service Page Hero: ${service.title}`)}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                Book Free Counseling
              </button>
              <a
                href="#service-checklist"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors whitespace-nowrap"
              >
                View Preparation Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory / Transparency Notice if applicable */}
      {service.regulatoryDisclaimer && (
        <div className="bg-sky-50 border-b border-sky-200/80 py-3.5 px-4">
          <div className="max-w-7xl mx-auto text-xs text-slate-700 leading-relaxed">
            {service.regulatoryDisclaimer}
          </div>
        </div>
      )}

      {/* Overview & Core Highlights */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              SERVICE OVERVIEW
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              How Gradsail Global Supports Your {service.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.highlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
              >
                <span className="font-mono text-xs font-semibold text-sky-700">
                  0{idx + 1}. FOCUS AREA
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {hl.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Section for Service 5: Language Coaching Hub Learning Pathways (IELTS, PTE, German A1–B2) */}
      {isLanguageHub && (
        <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                STRUCTURED LEARNING PATHWAYS
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                IELTS, PTE & German (A1 through B2) Modules
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select a proficiency track below to view covered skills and request current batch and diagnostic assessment details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LANGUAGE_PATHWAYS.map((track) => (
                <div
                  key={track.code}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono font-semibold text-sky-700">{track.code}</span>
                      <span>{track.durationNote}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {track.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {track.description}
                    </p>
                    <div className="pt-2 space-y-1.5">
                      <p className="text-xs font-semibold text-slate-800">Module Breakdown:</p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {track.modules.map((m, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-700 font-bold">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#language-inquiry-form"
                      onClick={() => setLangTrack(track.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                    >
                      <span>Inquire About {track.code} Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Dedicated Language Course Inquiry Form */}
            <div id="language-inquiry-form" className="max-w-3xl mx-auto pt-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-5">
                <div>
                  <p className="text-xs font-semibold text-sky-700">LANGUAGE COACHING DESK</p>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                    Language & Test Prep Module Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Request diagnostic evaluation details for IELTS, PTE, or German A1–B2.
                  </p>
                </div>

                {langSuccess ? (
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-display font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Language Inquiry Registered ({langSuccess.referenceId})</span>
                    </div>
                    <p className="text-xs text-emerald-800">
                      We have recorded your interest in <strong>{langSuccess.programTrack}</strong>. Our language coordinator will reach out with diagnostic test and module details.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLangSuccess(null)}
                      className="text-xs font-semibold text-sky-700 underline cursor-pointer"
                    >
                      Inquire about another module
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLanguageSubmit} noValidate className="space-y-4">
                    {langError && (
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{langError}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={langName}
                          onChange={(e) => setLangName(e.target.value)}
                          placeholder="Full name"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={langEmail}
                          onChange={(e) => setLangEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Phone / WhatsApp <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={langPhone}
                          onChange={(e) => setLangPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Select Module / Exam Track <span className="text-rose-600">*</span>
                        </label>
                        <select
                          value={langTrack}
                          onChange={(e) => setLangTrack(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                        >
                          {LANGUAGE_PATHWAYS.map((p) => (
                            <option key={p.code} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Current Proficiency Level
                        </label>
                        <select
                          value={langProficiency}
                          onChange={(e) => setLangProficiency(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                        >
                          <option value="Beginner / Unassessed">Beginner / Unassessed</option>
                          <option value="Completed A1 (For German)">Completed German A1</option>
                          <option value="Completed A2 (For German)">Completed German A2</option>
                          <option value="Completed B1 (For German)">Completed German B1</option>
                          <option value="Retaking IELTS / PTE for Higher Band">Retaking IELTS / PTE for Higher Score</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <label className="flex items-start gap-2 text-xs text-slate-600">
                        <input
                          type="checkbox"
                          checked={langConsent}
                          onChange={(e) => setLangConsent(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-700"
                        />
                        <span>
                          I agree to be contacted regarding language coaching in accordance with the{' '}
                          <Link to="/privacy-policy" className="text-sky-700 underline">
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>
                      <button
                        type="submit"
                        disabled={langSubmitting}
                        className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg whitespace-nowrap cursor-pointer"
                      >
                        {langSubmitting ? 'Submitting...' : 'Submit Language Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How the Service Works (4 Steps) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              PROCESS WORKFLOW
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              How {service.title} Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-sky-700">
                  STAGE {step.stepNumber}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Requirements & Interactive Preparation Checklist */}
      <section id="service-checklist" className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Student Requirements */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              WHAT YOU NEED TO PREPARE
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Student Requirements
            </h2>
            <ul className="space-y-3 pt-2">
              {service.studentRequirements.map((req, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-sky-700 shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-sky-700 tracking-wide">
                  INTERACTIVE READINESS AUDIT
                </p>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  {service.checklistTitle}
                </h2>
              </div>
              <span className="text-xs text-slate-500 tabular-nums">
                {Object.values(checkedItems).filter(Boolean).length} / {service.preparationChecklist.length} Completed
              </span>
            </div>

            <div className="space-y-2.5 pt-2">
              {service.preparationChecklist.map((item, idx) => {
                const isDone = Boolean(checkedItems[idx]);
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-xl border transition-colors cursor-pointer ${
                      isDone
                        ? 'bg-sky-50/70 border-sky-200 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleCheck(idx)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                    />
                    <span className={`text-sm ${isDone ? 'line-through text-slate-500' : ''}`}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions & Other Services Navigation */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Common Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="font-display font-bold text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-sky-700' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-3 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              COMPLETE SERVICE ECOSYSTEM
            </p>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Explore All Six Gradsail Services
            </h3>
            <div className="space-y-2.5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                    s.slug === service.slug
                      ? 'bg-sky-700 text-white border-sky-700 font-semibold'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300'
                  }`}
                >
                  <span className="text-sm">
                    {s.number}. {s.navTitle}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Service Counseling CTA Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineCounselingForm
            defaultService={service.title}
            sourcePage={`Service Page: ${service.title}`}
            heading={`Get Expert Support with ${service.title}`}
            subheading="Schedule a free 1-on-1 counseling session to discuss your timeline and documentation."
          />
        </div>
      </section>
    </div>
  );
};
