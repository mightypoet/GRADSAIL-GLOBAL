import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BookOpen, Download } from 'lucide-react';
import {
  DESTINATIONS,
  JOURNEY_STEPS,
  SCHOLARSHIP_CATEGORIES,
  RESOURCES,
  WHY_CHOOSE_ITEMS,
  SERVICES,
} from '../data/siteContent';
import {
  HeroCampusIllustration,
  CounselingSessionIllustration,
  DestinationArtwork,
} from '../components/VisualArtwork';
import { EligibilityForm } from '../components/EligibilityForm';
import { PageSEO } from '../components/PageSEO';

interface HomePageProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCounseling }) => {
  const [scholarshipCategory, setScholarshipCategory] = useState<string>('All');
  const [scholarshipCountry, setScholarshipCountry] = useState<string>('All');
  const [scholarshipDegree, setScholarshipDegree] = useState<string>('All');

  const filteredScholarships = SCHOLARSHIP_CATEGORIES.filter((item) => {
    const matchCategory = scholarshipCategory === 'All' || item.fundingCategory === scholarshipCategory;
    const matchCountry =
      scholarshipCountry === 'All' ||
      item.country === scholarshipCountry ||
      item.country === 'Multi-Country';
    const matchDegree =
      scholarshipDegree === 'All' ||
      item.degreeLevel === scholarshipDegree ||
      item.degreeLevel === 'All Degrees';
    return matchCategory && matchCountry && matchDegree;
  }).slice(0, 4);

  const scrollToDestinations = () => {
    const el = document.getElementById('study-destinations');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <PageSEO
        title="Sail Towards Your Global Degree — Overseas Education Advisory"
        description="Your Bridge to Top Global Universities. Honest, student-centric overseas education counseling, admissions, visa guidance, scholarships, and language coaching for the UK, Australia, Germany, Dubai, France, and South Korea."
      />

      {/* SECTION A: HERO */}
      <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-xs font-bold tracking-widest text-sky-700">
                YOUR GLOBAL EDUCATION JOURNEY STARTS HERE
              </p>

              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                  Sail Towards Your Global Degree
                </h1>
                <p className="font-display text-xl sm:text-2xl font-semibold text-sky-800">
                  Your Bridge to Top Global Universities
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Honest, student-centric guidance with high visa success rates and full end-to-end support.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenCounseling(undefined, 'Hero Primary CTA')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Book a Free Counseling Session
                </button>
                <button
                  type="button"
                  onClick={scrollToDestinations}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Explore Study Destinations
                </button>
              </div>

              {/* Compact Trust Strip */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  Verified Partner Universities
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  Zero Hidden Costs
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  Personalized Guidance
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex">
              <HeroCampusIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: DESTINATION DISCOVERY */}
      <section id="study-destinations" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              GLOBAL STUDY DESTINATIONS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Find Your Perfect Study Destination
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore global opportunities and find a destination that matches your academic goals, preferred course, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <article
                key={dest.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div>
                  <DestinationArtwork slug={dest.slug} className="h-48" />
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {dest.regionLabel}
                      </p>
                      <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                        {dest.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {dest.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 block">
                          Popular Courses:
                        </span>
                        <span className="text-slate-600">
                          {dest.popularCourses.join(' · ')}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block">
                          University Categories & Examples:
                        </span>
                        <span className="text-slate-600">
                          {dest.universityCategories}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>{dest.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: FOUR-STEP STUDENT JOURNEY */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-14">
            <p className="text-xs font-semibold text-sky-700 tracking-wide">
              STRUCTURED END-TO-END ROADMAP
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Your Journey to a Global Degree
            </h2>
            <p className="text-base text-slate-600">
              Every international application follows a clear four-stage progression designed to keep your academic, financial, and visa milestones on track.
            </p>
          </div>

          {/* Horizontal 4-Step Timeline on Desktop / Vertical on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {JOURNEY_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-sky-700 tracking-wider">
                      STEP {item.step}
                    </span>
                    {idx < JOURNEY_STEPS.length - 1 && (
                      <span className="hidden lg:inline-block text-xs text-slate-300" aria-hidden="true">
                        ———→
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Outcome: {item.deliverable}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-start">
            <button
              type="button"
              onClick={() => onOpenCounseling(undefined, '4-Step Journey CTA')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION D: ABOUT GRADSAIL GLOBAL */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-sky-700 tracking-wide">
                  ABOUT GRADSAIL GLOBAL
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Honest, Student-Centric Overseas Education Advisory
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  At Gradsail Global, our mission is to simplify study abroad journeys by providing verified university partnerships, transparent fee structures, and expert guidance without hidden costs.
                </p>
              </div>

              {/* Three Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="font-mono text-xs text-sky-700 font-semibold">01. VERIFIED</p>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Verified Partner Universities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Course shortlisting aligned with accredited global institutions and your academic eligibility.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="font-mono text-xs text-sky-700 font-semibold">02. TRANSPARENT</p>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Zero Hidden Costs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complete clarity on university tuition, statutory visa fees, blocked accounts, and living costs.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="font-mono text-xs text-sky-700 font-semibold">03. RIGOROUS</p>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    High Visa Success Rate
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Embassy-aligned documentation audits, financial file preparation, and mock visa interviews.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  <span>Read Our Mission & Advisory Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <CounselingSessionIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: SCHOLARSHIP DESK */}
      <section className="py-20 lg:py-24 bg-sky-50/50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                SCHOLARSHIP DESK
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Make Your Global Education More Affordable
              </h2>
              <p className="text-base text-slate-600">
                Get guidance on securing merit-based, need-based, and institutional tuition fee waivers.
              </p>
            </div>

            <Link
              to="/scholarships"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              <span>Explore Scholarship Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Filters */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="home-sch-cat" className="block text-xs font-semibold text-slate-700 mb-1">
                Scholarship Category
              </label>
              <select
                id="home-sch-cat"
                value={scholarshipCategory}
                onChange={(e) => setScholarshipCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
              >
                <option value="All">All Funding Categories</option>
                <option value="Merit-Based">Merit-Based</option>
                <option value="Institutional Fee Waiver">Institutional Fee Waiver</option>
                <option value="Public / Government">Public / Government</option>
                <option value="Need-Based">Need-Based</option>
              </select>
            </div>

            <div>
              <label htmlFor="home-sch-country" className="block text-xs font-semibold text-slate-700 mb-1">
                Destination Country
              </label>
              <select
                id="home-sch-country"
                value={scholarshipCountry}
                onChange={(e) => setScholarshipCountry(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
              >
                <option value="All">All Study Destinations</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Dubai (UAE)">Dubai (UAE)</option>
                <option value="France">France</option>
                <option value="South Korea">South Korea</option>
              </select>
            </div>

            <div>
              <label htmlFor="home-sch-degree" className="block text-xs font-semibold text-slate-700 mb-1">
                Degree Level
              </label>
              <select
                id="home-sch-degree"
                value={scholarshipDegree}
                onChange={(e) => setScholarshipDegree(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:border-sky-600"
              >
                <option value="All">All Degree Levels</option>
                <option value="Bachelor's">Bachelor&apos;s</option>
                <option value="Master's">Master&apos;s</option>
              </select>
            </div>
          </div>

          {/* Scholarship Cards */}
          {filteredScholarships.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3">
              <p className="text-sm text-slate-600">
                No informational scholarship categories match that exact filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setScholarshipCategory('All');
                  setScholarshipCountry('All');
                  setScholarshipDegree('All');
                }}
                className="text-xs font-semibold text-sky-700 hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredScholarships.map((sch) => (
                <div
                  key={sch.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-sky-700">{sch.country}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sch.fundingCategory}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sch.degreeLevel}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {sch.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {sch.fundingTypeSummary}
                    </p>
                    <ul className="space-y-1 pt-1 text-xs text-slate-600">
                      {sch.indicativeEligibility.slice(0, 2).map((el, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-sky-700 font-bold">•</span>
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4 text-xs text-slate-500">
                    <span>{sch.verificationLabel}</span>
                    <Link
                      to="/scholarships"
                      className="font-semibold text-sky-700 hover:text-sky-800 whitespace-nowrap shrink-0"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION F: RESOURCE HUB */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                STUDENT RESOURCE HUB
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Everything You Need to Study Abroad
              </h2>
              <p className="text-base text-slate-600">
                Country guides, visa interview checklists, cost-of-living frameworks, SOP templates, and language preparation roadmaps.
              </p>
            </div>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              <span>Browse All Guides & Checklists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCES.slice(0, 8).map((res) => (
              <article
                key={res.id}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{res.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{res.readTime}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {res.shortDescription}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                  {res.downloadUrl ? (
                    <a
                      href={res.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF Guide</span>
                    </a>
                  ) : (
                    <Link
                      to={`/resources?guide=${res.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Guide</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: FREE ELIGIBILITY ASSESSMENT */}
      <section id="eligibility-assessment" className="py-20 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-10">
            <p className="text-xs font-semibold text-sky-400 tracking-wide">
              FREE STUDY ABROAD ELIGIBILITY ASSESSMENT
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Check Your Study Abroad Eligibility
            </h2>
            <p className="text-base text-slate-300">
              Tell us a little about yourself and your study plans so our team can understand your requirements.
            </p>
          </div>

          <div className="text-slate-900">
            <EligibilityForm />
          </div>
        </div>
      </section>

      {/* SECTION H: WHY CHOOSE GRADSAIL GLOBAL & CORE SERVICES */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Why Choose Us Grid */}
          <div>
            <div className="max-w-3xl space-y-3 mb-12">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                WHY CHOOSE GRADSAIL GLOBAL
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Comprehensive Support Across Every Stage of Your Journey
              </h2>
              <p className="text-base text-slate-600">
                From initial course shortlisting and SOP refinement to German Blocked Accounts, MEA Apostille, language coaching, and student accommodation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-2.5"
                >
                  <span className="font-mono text-xs font-semibold text-sky-700">
                    {item.number}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Detailed Service Offerings Directory */}
          <div className="pt-8 border-t border-slate-200">
            <div className="max-w-3xl space-y-2 mb-10">
              <p className="text-xs font-semibold text-sky-700 tracking-wide">
                SIX SPECIALIZED ADVISORY VERTICALS
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Explore Our Dedicated Student Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs font-semibold text-sky-700">
                      SERVICE {svc.number}
                    </span>
                    <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.blueprintSummary}
                    </p>
                    {svc.blueprintSecondary && (
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {svc.blueprintSecondary}
                      </p>
                    )}
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: FINAL CALL TO ACTION */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-sky-950 to-sky-900 text-white overflow-hidden">
        {/* Restrained Sailing Wave Decorative SVG */}
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-36 opacity-15 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M0 192C320 96 640 288 960 160C1200 64 1340 144 1440 128V320H0V192Z"
            fill="#38bdf8"
          />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-semibold tracking-widest text-sky-300">
            SAIL TOWARDS YOUR GLOBAL DEGREE
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Your Global Future Starts with One Conversation
          </h2>
          <p className="text-base sm:text-lg text-sky-100/90 max-w-2xl mx-auto">
            Get personalized guidance for your study abroad journey.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenCounseling(undefined, 'Homepage Final CTA')}
              className="px-7 py-4 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Book Your Free Counseling Session
            </button>
            <button
              type="button"
              onClick={scrollToDestinations}
              className="px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
