import React, { useState } from 'react';
import { Search, RotateCcw, Check } from 'lucide-react';
import { SCHOLARSHIP_CATEGORIES } from '../data/siteContent';
import { InlineCounselingForm } from '../components/InlineCounselingForm';
import { PageSEO } from '../components/PageSEO';

interface ScholarshipsPageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({ onOpenCounseling }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedDegree, setSelectedDegree] = useState('All');

  const filtered = SCHOLARSHIP_CATEGORIES.filter((item) => {
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fundingTypeSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.fundingCategory === selectedCategory;
    const matchesCountry =
      selectedCountry === 'All' ||
      item.country === selectedCountry ||
      item.country === 'Multi-Country';
    const matchesDegree =
      selectedDegree === 'All' ||
      item.degreeLevel === selectedDegree ||
      item.degreeLevel === 'All Degrees';

    return matchesSearch && matchesCategory && matchesCountry && matchesDegree;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCountry('All');
    setSelectedDegree('All');
  };

  return (
    <div>
      <PageSEO
        title="Scholarship Desk — Merit, Need-Based & Institutional Fee Waivers"
        description="Make your global education more affordable. Get guidance on securing merit-based, need-based, and institutional tuition fee waivers across the UK, Australia, Germany, Dubai, France, and South Korea."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-sky-400 tracking-wider">
              GRADSAIL GLOBAL SCHOLARSHIP DESK
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Make Your Global Education More Affordable
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Get guidance on securing merit-based, need-based, and institutional tuition fee waivers across our six global study destinations.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenCounseling(undefined, 'Scholarship Desk Hero CTA')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Scholarship Assessment Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Transparency Banner */}
      <div className="bg-sky-50 border-b border-sky-200/80 py-3.5 px-4">
        <div className="max-w-7xl mx-auto text-xs text-slate-700">
          <strong>Transparency Note:</strong> Scholarship categories below represent verified institutional and public funding structures. Specific award values, deadlines, and eligibility rules are determined annually by individual universities and ministries; our counselors verify active scholarship tracks against your transcripts during shortlisting.
        </div>
      </div>

      {/* Filters & Cards */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="sch-search" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Search Keyword
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="sch-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g., Merit, STEM, Germany..."
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sch-cat" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Scholarship Category
                </label>
                <select
                  id="sch-cat"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                >
                  <option value="All">All Categories</option>
                  <option value="Merit-Based">Merit-Based</option>
                  <option value="Institutional Fee Waiver">Institutional Fee Waiver</option>
                  <option value="Public / Government">Public / Government</option>
                  <option value="Need-Based">Need-Based</option>
                </select>
              </div>

              <div>
                <label htmlFor="sch-country" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Study Destination
                </label>
                <select
                  id="sch-country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                >
                  <option value="All">All Destinations</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Dubai (UAE)">Dubai (UAE)</option>
                  <option value="France">France</option>
                  <option value="South Korea">South Korea</option>
                </select>
              </div>

              <div>
                <label htmlFor="sch-degree" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Degree Level
                </label>
                <select
                  id="sch-degree"
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
                >
                  <option value="All">All Degree Levels</option>
                  <option value="Bachelor's">Bachelor&apos;s</option>
                  <option value="Master's">Master&apos;s</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
              <span className="tabular-nums">
                Showing {filtered.length} of {SCHOLARSHIP_CATEGORIES.length} scholarship pathways
              </span>
              {(searchQuery || selectedCategory !== 'All' || selectedCountry !== 'All' || selectedDegree !== 'All') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 font-semibold text-sky-700 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-3">
              <h3 className="font-display text-lg font-bold text-slate-900">
                No Matching Scholarship Categories
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Try clearing one of your filters or book a free counseling session to discuss institutional bursaries for your specific course.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 rounded-lg cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((sch) => (
                <article
                  key={sch.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-sky-700">{sch.country}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sch.fundingCategory}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sch.degreeLevel}</span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-slate-900">
                      {sch.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {sch.fundingTypeSummary}
                    </p>

                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-semibold text-slate-900">
                        Indicative Eligibility Considerations:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {sch.indicativeEligibility.map((el, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                      <strong className="text-slate-800">Application Window:</strong> {sch.applicationWindowNote}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">{sch.verificationLabel}</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenCounseling(
                          sch.country === 'Multi-Country'
                            ? undefined
                            : sch.country === 'Dubai (UAE)'
                            ? 'Dubai / UAE'
                            : sch.country,
                          `Scholarship Card: ${sch.title}`
                        )
                      }
                      className="px-4 py-2 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Assess Eligibility with Advisor
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineCounselingForm
            defaultService="Scholarship & Tuition Waiver Guidance"
            sourcePage="Scholarship Desk Page"
            heading="Evaluate Your Scholarship Eligibility"
            subheading="Share your academic background and preferred destination so our team can identify realistic tuition waiver and bursary options."
          />
        </div>
      </section>
    </div>
  );
};
