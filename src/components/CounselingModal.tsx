import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry?: string;
  sourcePage?: string;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({
  isOpen,
  onClose,
  defaultCountry = '',
  sourcePage = 'Site-Wide Counseling Pop-up',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetCountry, setTargetCountry] = useState(defaultCountry);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    submittedAt: string;
    fullName: string;
    targetCountry: string;
  } | null>(null);

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultCountry) {
      setTargetCountry(defaultCountry);
    }
  }, [defaultCountry]);

  useEffect(() => {
    if (isOpen) {
      setErrorMessage(null);
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 60);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone.trim())) {
      setErrorMessage('Please enter a valid phone or WhatsApp number (including country code if applicable).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!targetCountry) {
      setErrorMessage('Please select your target study destination.');
      return;
    }
    if (!privacyConsent) {
      setErrorMessage('Please agree to the privacy consent to schedule your counseling session.');
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
          privacyConsent,
          sourcePage,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit your request at this time.');
      }

      setSubmissionResult({
        referenceId: data.referenceId,
        submittedAt: data.submittedAt,
        fullName: fullName.trim(),
        targetCountry,
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetModal = () => {
    setSubmissionResult(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setPrivacyConsent(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="counseling-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
        {/* Top Navy Header Strip */}
        <div className="bg-slate-900 px-6 py-5 flex items-start justify-between gap-4 text-white">
          <div>
            <p className="text-xs font-medium text-sky-300 tracking-wide">
              GRADSAIL GLOBAL COUNSELING DESK
            </p>
            <h2 id="counseling-modal-title" className="font-display text-xl font-bold mt-1">
              Book Your Free Counseling Session
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close counseling popup"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submissionResult ? (
            <div className="space-y-4 py-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-base">
                    Counseling Request Confirmed
                  </h3>
                  <p className="text-sm text-emerald-800 mt-1">
                    Thank you, <span className="font-semibold">{submissionResult.fullName}</span>. Your session inquiry for{' '}
                    <span className="font-semibold">{submissionResult.targetCountry}</span> has been recorded.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-semibold text-slate-900">{submissionResult.referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Target Destination:</span>
                  <span className="font-semibold text-slate-900">{submissionResult.targetCountry}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">What Happens Next:</p>
                <p>1. A Gradsail Global destination advisor reviews your preferred country and profile.</p>
                <p>2. We reach out via your provided phone/WhatsApp or email to schedule your 1-on-1 counseling slot.</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={validateAndSubmit} className="space-y-4" noValidate>
              <p className="text-sm text-slate-600">
                Connect with an advisor for honest, transparent guidance on university shortlisting, scholarships, and visa preparation.
              </p>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs font-medium"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullName" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="modal-fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Phone / WhatsApp <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-country" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Target Country <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="modal-country"
                    required
                    value={targetCountry}
                    onChange={(e) => setTargetCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none"
                  >
                    <option value="">Select Preferred Country</option>
                    {SITE_CONFIG.countriesList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="modal-consent"
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                />
                <label htmlFor="modal-consent" className="text-xs text-slate-600 leading-relaxed">
                  I consent to Gradsail Global contacting me regarding my study abroad inquiry in accordance with the{' '}
                  <Link
                    to="/privacy-policy"
                    onClick={onClose}
                    className="text-sky-700 underline hover:text-sky-800"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 disabled:opacity-60 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                {submitting ? 'Submitting Request...' : 'Submit & Get Started'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
