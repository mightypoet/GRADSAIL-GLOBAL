import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Download, BookOpen, Check, Printer, X } from 'lucide-react';
import { RESOURCES, ResourceItem } from '../data/siteContent';
import { PageSEO } from '../components/PageSEO';

interface ResourcesPageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

const CATEGORIES = [
  'All',
  'Country Guides',
  'Visa Interview Checklists',
  'Cost-of-Living Breakdowns',
  'Application & SOP Guides',
  'IELTS and PTE Preparation',
  'German Language Learning',
  'Pre-Departure Checklists',
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenCounseling }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeGuide, setActiveGuide] = useState<ResourceItem | null>(null);

  useEffect(() => {
    const guideSlug = searchParams.get('guide');
    if (guideSlug) {
      const found = RESOURCES.find((r) => r.slug === guideSlug);
      if (found) {
        setActiveGuide(found);
      }
    }
  }, [searchParams]);

  const filteredResources = RESOURCES.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetCountry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const openGuideReader = (res: ResourceItem) => {
    setActiveGuide(res);
    setSearchParams({ guide: res.slug });
  };

  const closeGuideReader = () => {
    setActiveGuide(null);
    setSearchParams({});
  };

  return (
    <div>
      <PageSEO
        title="Resource Hub — Country Guides, Visa Checklists, SOP & Language Roadmaps"
        description="Everything you need to study abroad: Country Guides, Visa Interview Checklists, Cost-of-Living Breakdowns, SOP Guides, IELTS/PTE Prep, and German A1–B2 Roadmaps."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-sky-400 tracking-wider">
              GRADSAIL GLOBAL RESOURCE HUB
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Everything You Need to Study Abroad
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Access structured country guides, visa interview checklists, cost-of-living frameworks, SOP templates, and language preparation roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides by topic, country, SOP, visa, IELTS, German..."
                  aria-label="Search study abroad resources"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 outline-none focus:border-sky-600"
                />
              </div>
              <div className="text-xs text-slate-500 tabular-nums shrink-0 self-center">
                {filteredResources.length} Resource{filteredResources.length === 1 ? '' : 's'} Available
              </div>
            </div>

            {/* Interactive Segmented Category Controls */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <article
                key={res.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-5 hover:border-sky-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{res.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{res.readTime}</span>
                  </div>

                  <h2 className="font-display text-lg font-bold text-slate-900">
                    {res.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {res.shortDescription}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <p className="text-xs font-semibold text-slate-800">Key Takeaways:</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {res.keyTakeaways.map((kt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-700 font-bold">•</span>
                          <span>{kt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">{res.publicationStatus}</span>
                  <div className="flex items-center gap-2">
                    {res.downloadUrl && (
                      <a
                        href={res.downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => openGuideReader(res)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Guide</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Guide Reader Drawer / Modal */}
      {activeGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-reader-title"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[88vh] flex flex-col overflow-hidden">
            <div className="bg-slate-900 text-white px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-sky-300 font-medium">
                  {activeGuide.category} · {activeGuide.targetCountry}
                </p>
                <h2 id="guide-reader-title" className="font-display text-xl font-bold mt-1">
                  {activeGuide.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeGuideReader}
                aria-label="Close guide reader"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeGuide.shortDescription}
              </p>

              {activeGuide.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {sec.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{sec.body}</p>
                  {sec.checklist && (
                    <ul className="space-y-2 pt-2">
                      {sec.checklist.map((item, i) => (
                        <li
                          key={i}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {activeGuide.downloadUrl && (
                  <a
                    href={activeGuide.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official PDF</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const title = activeGuide.title;
                  closeGuideReader();
                  onOpenCounseling(undefined, `Resource Reader: ${title}`);
                }}
                className="px-4 py-2 text-xs font-semibold text-sky-800 bg-sky-100 hover:bg-sky-200 rounded-lg cursor-pointer"
              >
                Discuss This Guide with an Advisor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
