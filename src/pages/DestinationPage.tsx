import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronDown, Check, ArrowRight, BookOpen } from 'lucide-react';
import { DESTINATIONS, RESOURCES } from '../data/siteContent';
import { DestinationArtwork } from '../components/VisualArtwork';
import { InlineCounselingForm } from '../components/InlineCounselingForm';
import { PageSEO } from '../components/PageSEO';

interface DestinationPageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({ onOpenCounseling }) => {
  const { slug } = useParams<{ slug: string }>();
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  if (!destination) {
    return <Navigate to="/404" replace />;
  }

  const toggleChecklist = (index: number) => {
    setCheckedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const relatedResources = RESOURCES.filter(
    (r) =>
      r.targetCountry.includes(destination.shortName) ||
      r.targetCountry.includes(destination.name) ||
      r.targetCountry.includes('All')
  ).slice(0, 3);

  return (
    <div>
      <PageSEO
        title={`Study in ${destination.name} — Courses, Universities, Visa & Scholarships`}
        description={`${destination.shortDescription} Get student-centric admissions, scholarship, and visa guidance for ${destination.name} with Gradsail Global.`}
      />

      {/* 1. Hero Section with Country Imagery */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-2 text-xs text-sky-300 font-medium">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span>Destinations</span>
                <span aria-hidden="true">/</span>
                <span className="text-white font-semibold">{destination.name}</span>
              </div>

              <p className="text-xs font-semibold tracking-wider text-sky-400">
                {destination.regionLabel.toUpperCase()}
              </p>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Study in {destination.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {destination.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onOpenCounseling(
                      destination.name === 'Dubai (UAE)' ? 'Dubai / UAE' : destination.name,
                      `Destination Hero: ${destination.name}`
                    )
                  }
                  className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book Free {destination.shortName} Counseling
                </button>
                <a
                  href="#destination-counseling-form"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors whitespace-nowrap"
                >
                  Check Requirements Below
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <DestinationArtwork slug={destination.slug} className="h-64 lg:h-full min-h-[240px]" />
              <div className="p-5 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Key Focus Areas:</span>
                  <span className="font-semibold text-white">{destination.popularCourses[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">University Landscape:</span>
                  <span className="font-semibold text-sky-300">{destination.universityCategories}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & 3. Popular Courses and Academic Pathways */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                DESTINATION OVERVIEW
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Why Study in {destination.name}?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {destination.overview}
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Popular Course Categories in {destination.name}
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {destination.popularCourses.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-bold text-sky-700 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="font-medium text-slate-900">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Academic Pathways */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Academic Pathways & Degree Structures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destination.academicPathways.map((pathway, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-sky-700">{pathway.duration}</p>
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      {pathway.level}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pathway.overview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Relevant University Examples & Categories */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              HIGHER EDUCATION LANDSCAPE
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              University Categories & Examples ({destination.universityCategories})
            </h2>
            <p className="text-xs text-slate-500">
              Note: Institution names and university groups are provided for educational orientation and do not imply exclusive representation unless verified during counseling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.universityExamples.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3"
              >
                <p className="text-xs text-sky-700 font-semibold">{uni.category}</p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {uni.name}
                </h3>
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-800">Key Disciplines:</strong> {uni.focusAreas}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Indicative Admission Requirements & 6. Language Preparation */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                INDICATIVE ADMISSION CRITERIA
              </p>
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                General Admission Requirements
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Indicative overview — exact entry grades and credit prerequisites vary by university and degree program.
              </p>
            </div>

            <ul className="space-y-3">
              {destination.indicativeAdmissionRequirements.map((req, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-sky-700 shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
              <p className="text-xs font-semibold text-sky-400 tracking-wide">
                LANGUAGE & TEST PREPARATION
              </p>
              <h3 className="font-display text-xl font-bold">
                English & Local Language Readiness
              </h3>
              <div>
                <p className="text-xs text-slate-400 mb-1.5">Commonly Accepted Proficiency Exams:</p>
                <p className="text-sm font-semibold text-sky-200">
                  {destination.languagePreparation.acceptedTests.join(' · ')}
                </p>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {destination.languagePreparation.localLanguageNote}
              </p>
              <div className="pt-2">
                <Link
                  to="/services/language-coaching-hub"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-white"
                >
                  <span>Explore Gradsail Language Coaching Hub (IELTS, PTE, German A1–B2)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 8. Scholarship Information */}
            <div className="bg-sky-50/70 rounded-2xl border border-sky-200/80 p-6 space-y-3">
              <p className="text-xs font-semibold text-sky-800 tracking-wide">
                SCHOLARSHIPS & FUNDING
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Scholarship Opportunities for {destination.name}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {destination.scholarshipGuidance.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-700 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  to="/scholarships"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                >
                  <span>View Scholarship Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Cost Planning, 9. Visa Preparation & 10. Accommodation + Interactive Checklist */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cost & Financial Planning */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-sky-700">FINANCIAL & COST PLANNING</span>
                <span>Last Reviewed: {destination.costGuidance.lastChecked}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Tuition & Living Expense Structure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.costGuidance.overview}
              </p>
              <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                {destination.costGuidance.tuitionStructureNote}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-800">Key Budgeting Factors:</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {destination.costGuidance.livingCostFactors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-700 font-bold">•</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visa Preparation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4">
              <p className="text-xs font-semibold text-sky-700">
                VISA GUIDANCE & PREPARATION
              </p>
              <h3 className="font-display text-xl font-bold text-slate-900">
                {destination.visaPreparation.visaRouteName}
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {destination.visaPreparation.keyRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-sky-700 shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                {destination.visaPreparation.authorityDisclaimer}
              </p>
            </div>
          </div>

          {/* Accommodation & Interactive Student Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <p className="text-xs font-semibold text-sky-700">
                PRE-DEPARTURE & HOUSING
              </p>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Accommodation & Arrival Support
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {destination.accommodationAndPreDeparture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-bold text-sky-700 mt-0.5">
                      0{i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  to="/services/pre-departure-accommodation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:underline"
                >
                  <span>Explore Pre-Departure & Accommodation Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-sky-700">INTERACTIVE ROADMAP</p>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {destination.name} Student Application Checklist
                  </h3>
                </div>
                <span className="text-xs text-slate-500 tabular-nums">
                  {Object.values(checkedSteps).filter(Boolean).length} / {destination.studentChecklist.length} Checked
                </span>
              </div>

              <div className="space-y-2.5">
                {destination.studentChecklist.map((step, idx) => {
                  const isDone = Boolean(checkedSteps[idx]);
                  return (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors cursor-pointer ${
                        isDone
                          ? 'bg-sky-50/70 border-sky-200 text-slate-900'
                          : 'bg-slate-50/60 border-slate-200/80 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggleChecklist(idx)}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                      />
                      <span className={`text-sm ${isDone ? 'line-through text-slate-500' : ''}`}>
                        {step}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Destination FAQs & 13. Related Guides */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                DESTINATION FAQS
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Frequently Asked Questions About Studying in {destination.name}
              </h2>
            </div>

            <div className="space-y-3">
              {destination.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 overflow-hidden bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
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
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 13. Related Guides & Resources */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                RELATED RESOURCES
              </p>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                Helpful Study Abroad Guides
              </h3>
            </div>

            <div className="space-y-4">
              {relatedResources.map((res) => (
                <div
                  key={res.id}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <p className="text-xs text-sky-700 font-semibold">{res.category}</p>
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-600">{res.shortDescription}</p>
                  <Link
                    to={`/resources?guide=${res.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:underline pt-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Guide</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Dedicated Destination Counseling Form */}
      <section id="destination-counseling-form" className="py-16 lg:py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineCounselingForm
            defaultCountry={destination.name === 'Dubai (UAE)' ? 'Dubai / UAE' : destination.name}
            sourcePage={`Destination Page: ${destination.name}`}
            heading={`Plan Your ${destination.name} Application with Gradsail Global`}
            subheading={`Get a personalized course shortlist, SOP review, and visa documentation roadmap for ${destination.name}.`}
          />
        </div>
      </section>
    </div>
  );
};
