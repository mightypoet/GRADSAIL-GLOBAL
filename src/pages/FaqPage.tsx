import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPREHENSIVE_FAQS } from '../data/siteContent';
import { PageSEO } from '../components/PageSEO';

interface FaqPageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenCounseling }) => {
  const [openKey, setOpenKey] = useState<string>('0-0');

  return (
    <div>
      <PageSEO
        title="Frequently Asked Questions — Admissions, Visas, Forex & Language Prep"
        description="Find answers to common questions about overseas university admissions, SOPs, scholarships, visa guidance, German blocked accounts, IELTS/PTE, and student housing."
      />

      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-sky-400 tracking-wider">
              STUDENT KNOWLEDGE BASE
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Clear, honest answers covering university shortlisting, SOPs, scholarships, visa preparation, blocked accounts, apostille attestation, and language coaching.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {COMPREHENSIVE_FAQS.map((group, gIdx) => (
            <div key={group.category} className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((item, iIdx) => {
                  const key = `${gIdx}-${iIdx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenKey(isOpen ? '' : key)}
                        aria-expanded={isOpen}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="font-display font-bold text-slate-900 text-sm sm:text-base">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-sky-700' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-3 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold">Have a Specific Profile Question?</h3>
              <p className="text-xs text-slate-300 mt-1">
                Book a free 1-on-1 counseling session to discuss your academic background and target intake.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCounseling(undefined, 'FAQ Page Bottom CTA')}
              className="px-5 py-3 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl whitespace-nowrap cursor-pointer"
            >
              Book Free Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
