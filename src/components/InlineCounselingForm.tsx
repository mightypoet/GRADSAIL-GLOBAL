import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface InlineCounselingFormProps {
  defaultCountry?: string;
  defaultService?: string;
  sourcePage: string;
  heading?: string;
  subheading?: string;
}

export const InlineCounselingForm: React.FC<InlineCounselingFormProps> = ({
  defaultCountry = '',
  defaultService = 'General Study Abroad Counseling',
  sourcePage,
  heading = 'Request Personalized Counseling',
  subheading = 'Speak with a Gradsail Global advisor for honest guidance tailored to your profile.',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetCountry, setTargetCountry] = useState(defaultCountry);
  const [studyIntake, setStudyIntake] = useState('');
  const [notes, setNotes] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ referenceId: string; fullName: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone.trim())) {
      setError('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!targetCountry) {
      setError('Please select a target study destination.');
      return;
    }
    if (!privacyConsent) {
      setError('Please confirm the privacy policy consent.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/counseling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          targetCountry,
          preferredService: defaultService,
          studyIntake,
          notes: notes.trim(),
          privacyConsent,
          sourcePage,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Submission failed.');
      }
      setResult({
        referenceId: data.referenceId,
        fullName: fullName.trim(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8">
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-slate-900">{heading}</h3>
        <p className="text-sm text-slate-600 mt-1">{subheading}</p>
      </div>

      {result ? (
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-slate-900">
                Counseling Request Registered ({result.referenceId})
              </h4>
              <p className="text-sm text-slate-700 mt-1">
                Thank you, {result.fullName}. Our advisory team has received your inquiry for {targetCountry} and will reach out to schedule your session.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setFullName('');
              setPhone('');
              setEmail('');
              setNotes('');
              setPrivacyConsent(false);
            }}
            className="text-xs font-semibold text-sky-700 hover:underline cursor-pointer"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {error && (
            <div
              role="alert"
              className="flex items-start gap-2.5 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs font-medium"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Phone / WhatsApp <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Target Country <span className="text-rose-600">*</span>
              </label>
              <select
                required
                value={targetCountry}
                onChange={(e) => setTargetCountry(e.target.value)}
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
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Preferred Intake
              </label>
              <select
                value={studyIntake}
                onChange={(e) => setStudyIntake(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
              >
                <option value="">Select Intake</option>
                {SITE_CONFIG.intakes.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Specific Course or Question <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., MSc Data Science, Blocked Account timeline, Scholarship eligibility..."
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <label className="flex items-start gap-2.5 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
              />
              <span>
                I consent to Gradsail Global contacting me in accordance with the{' '}
                <Link to="/privacy-policy" className="text-sky-700 underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {submitting ? 'Submitting...' : 'Book Free Counseling'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
