import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';
import { PageSEO } from '../components/PageSEO';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Admissions & University Shortlisting');
  const [targetCountry, setTargetCountry] = useState('');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ referenceId: string; submittedAt: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please write a brief message (at least 10 characters) describing how we can help.');
      return;
    }
    if (!privacyConsent) {
      setError('Please accept the privacy policy consent.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          inquiryTopic,
          targetCountry,
          message: message.trim(),
          privacyConsent,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Unable to submit message.');
      }
      setConfirmation(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageSEO
        title="Contact Us — Connect with the Gradsail Global Advisory Desk"
        description="Have questions about studying in the UK, Australia, Germany, Dubai, France, or South Korea? Send an inquiry to Gradsail Global."
      />

      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-sky-400 tracking-wider">
              CONTACT & ADVISORY SUPPORT
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Get in Touch with Gradsail Global
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Send us your questions regarding university admissions, visa documentation, blocked accounts, apostille attestation, or language coaching.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Configurable Contact Details & Advisory Desk Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold text-sky-700">COUNSELING DESK CONFIGURATION</p>
                <h2 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Direct Advisory Channels
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-semibold text-slate-800">Counseling Schedule</p>
                  <p className="text-xs text-slate-600 mt-1">{SITE_CONFIG.contact.counselingHours}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-semibold text-slate-800">Official Email & Phone Configuration</p>
                  <p className="text-xs text-slate-600 mt-1">
                    {SITE_CONFIG.contact.emailPlaceholder}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {SITE_CONFIG.contact.phonePlaceholder}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-semibold text-slate-800">Office Location</p>
                  <p className="text-xs text-slate-600 mt-1">
                    {SITE_CONFIG.contact.officePlaceholder}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                All inquiries submitted through the adjacent online form are stored directly in the Gradsail Global advisory backend with an instant reference number.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Send an Inquiry
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below and our team will respond to your questions.
              </p>

              {confirmation ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-slate-900">
                        Inquiry Received ({confirmation.referenceId})
                      </h3>
                      <p className="text-sm text-slate-700 mt-1">
                        Thank you, {fullName}. Your message regarding <strong>{inquiryTopic}</strong> has been logged.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setConfirmation(null);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-sky-700 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {error && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs font-medium flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
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
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                      />
                    </div>
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
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={inquiryTopic}
                        onChange={(e) => setInquiryTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                      >
                        <option value="Admissions & University Shortlisting">Admissions & Shortlisting</option>
                        <option value="Visa Guidance & Mock Interview">Visa Guidance & Preparation</option>
                        <option value="Forex & German Blocked Account">Forex & Blocked Account</option>
                        <option value="Apostille & Legal Attestation">Apostille & Attestation</option>
                        <option value="Language Hub (IELTS/PTE/German)">Language Coaching Hub</option>
                        <option value="Pre-Departure & Accommodation">Pre-Departure & Housing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Preferred Country
                      </label>
                      <select
                        value={targetCountry}
                        onChange={(e) => setTargetCountry(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                      >
                        <option value="">Select Country</option>
                        {SITE_CONFIG.countriesList.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Your Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your academic background, target intake, and questions..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-700"
                      />
                      <span>
                        I consent to Gradsail Global processing my inquiry in accordance with the{' '}
                        <Link to="/privacy-policy" className="text-sky-700 underline">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg whitespace-nowrap cursor-pointer"
                    >
                      {submitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
