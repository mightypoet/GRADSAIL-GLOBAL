import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES, DESTINATIONS, JOURNEY_STEPS, SITE_CONFIG } from '../data/siteContent';
import { CounselingSessionIllustration } from '../components/VisualArtwork';
import { PageSEO } from '../components/PageSEO';

interface AboutPageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCounseling }) => {
  return (
    <div>
      <PageSEO
        title="About Us — Honest, Student-Centric Overseas Education Advisory"
        description="At Gradsail Global, our mission is to simplify study abroad journeys by providing verified university partnerships, transparent fee structures, and expert guidance without hidden costs."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 lg:py-22 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-sky-400 tracking-wider">
              ABOUT {SITE_CONFIG.brandName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Honest, Student-Centric Overseas Education Advisory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {SITE_CONFIG.brandPromise} — {SITE_CONFIG.tagline}.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-sky-700 tracking-wide">
                  OUR MISSION & STUDENT-FIRST APPROACH
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  Simplifying Global Higher Education Without Hidden Costs
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  At Gradsail Global, our mission is to simplify study abroad journeys by providing verified university partnerships, transparent fee structures, and expert guidance without hidden costs.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Planning an international degree involves complex academic credit evaluations, Statement of Purpose preparation, embassy-specific financial documentation, apostille attestations, and language milestones. Our advisory framework brings all six core services together under one transparent roof so students and parents can make well-informed decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <Check className="w-5 h-5 text-sky-700" />
                  <h3 className="font-display font-bold text-slate-900 text-sm">
                    Verified Partner Universities
                  </h3>
                  <p className="text-xs text-slate-600">
                    Transparent course shortlisting matched to your academic credentials.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <Check className="w-5 h-5 text-sky-700" />
                  <h3 className="font-display font-bold text-slate-900 text-sm">
                    Zero Hidden Costs
                  </h3>
                  <p className="text-xs text-slate-600">
                    Clear breakdown of tuition, blocked accounts, and statutory visa fees.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <Check className="w-5 h-5 text-sky-700" />
                  <h3 className="font-display font-bold text-slate-900 text-sm">
                    High Visa Success Rate
                  </h3>
                  <p className="text-xs text-slate-600">
                    Rigorous documentation audits and mock interview preparation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <CounselingSessionIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Guidance Philosophy & 4-Step Process */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              OUR ADVISORY METHODOLOGY
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              How We Guide Students From First Conversation to Campus Arrival
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-sky-700">
                  STEP {step.step}
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

      {/* Overview of Our 6 Destinations & 6 Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Six Global Study Destinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESTINATIONS.map((d) => (
                  <Link
                    key={d.slug}
                    to={`/destinations/${d.slug}`}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <p className="font-display font-bold text-sm text-slate-900">{d.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{d.universityCategories}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-700 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Six End-to-End Student Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <p className="font-display font-bold text-sm text-slate-900">
                        {s.number}. {s.navTitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-700 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display text-2xl font-bold">
                Ready to Discuss Your Study Abroad Plan?
              </h3>
              <p className="text-sm text-slate-300">
                Connect with a Gradsail Global counselor for a transparent profile evaluation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCounseling(undefined, 'About Us Page CTA')}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Free Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
