import React from 'react';
import { SITE_CONFIG } from '../data/siteContent';
import { PageSEO } from '../components/PageSEO';

export const PrivacyPolicyPage: React.FC = () => (
  <div>
    <PageSEO
      title="Privacy Policy — Data Protection & Student Inquiry Handling"
      description="Structured draft Privacy Policy for Gradsail Global outlining how student eligibility and counseling inquiries are collected and protected."
    />

    <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <p className="text-xs font-semibold text-sky-400 tracking-wider">
          STRUCTURED POLICY DRAFT FOR BUSINESS REVIEW
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">
          Last Updated: {SITE_CONFIG.lastContentReviewDate} · Note: This structured draft is provided for review and finalization by Gradsail Global’s legal/compliance advisor prior to commercial launch.
        </p>
      </div>
    </section>

    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-slate-600 leading-relaxed">
        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            1. Information We Collect
          </h2>
          <p>
            When you submit an Eligibility Assessment, Book Free Counseling form, Language Coaching inquiry, or Contact Us message on the Gradsail Global website, we collect the information you voluntarily provide—including your full name, phone/WhatsApp number, email address, current academic qualification, preferred study destination, intended intake, and study questions.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            2. How We Use Your Information
          </h2>
          <p>
            We use the submitted information strictly to evaluate your overseas education eligibility, schedule requested counseling sessions, share relevant university/course/scholarship guidance, and respond to your inquiries. We do not sell your personal information to third-party marketers.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            3. Consent & Data Retention
          </h2>
          <p>
            Every lead capture form on this website requires explicit opt-in consent before submission. You may request access to, correction of, or deletion of your inquiry record at any time by contacting the Gradsail Global advisory desk.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export const TermsPage: React.FC = () => (
  <div>
    <PageSEO
      title="Terms & Conditions — Advisory Scope & Disclaimers"
      description="Structured draft Terms and Conditions for Gradsail Global covering overseas education advisory scope, visa authority disclaimers, and financial disclosures."
    />

    <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <p className="text-xs font-semibold text-sky-400 tracking-wider">
          STRUCTURED LEGAL DRAFT FOR BUSINESS REVIEW
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-400">
          Last Updated: {SITE_CONFIG.lastContentReviewDate} · Note: This structured draft is provided for review and finalization by Gradsail Global’s legal counsel before commercial publication.
        </p>
      </div>
    </section>

    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-slate-600 leading-relaxed">
        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            1. Scope of Educational Advisory Services
          </h2>
          <p>
            Gradsail Global provides educational counseling, course and university shortlisting, Statement of Purpose (SOP) editorial guidance, visa documentation preparation, language coaching, and pre-departure orientation. All university examples, admission criteria, and cost frameworks on this website are indicative and subject to change by respective institutions and governments.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            2. Admissions, Scholarships & Visa Decisions
          </h2>
          <p>
            University admission offers and scholarship grants are decided solely by the admitting educational institutions or scholarship bodies. Student visa issuance, processing durations, and immigration outcomes are determined exclusively by sovereign embassies, consulates, and immigration departments. Gradsail Global does not guarantee admission, scholarship awards, exam scores, or visa issuance.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">
            3. Financial & Forex Assistance Disclaimer
          </h2>
          <p>
            Gradsail Global is not a bank, non-banking financial company (NBFC), lender, or licensed money changer. Any foreign exchange remittance, blocked account setup, student debit/forex card issuance, or education loan is facilitated through regulated banking institutions and authorized dealers subject to their independent terms and KYC compliance.
          </p>
        </div>
      </div>
    </section>
  </div>
);
