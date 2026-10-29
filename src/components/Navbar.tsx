import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { DESTINATIONS, SERVICES, SITE_CONFIG } from '../data/siteContent';

interface NavbarProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCounseling }) => {
  const [openDropdown, setOpenDropdown] = useState<'destinations' | 'services' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'destinations' | 'services' | null>(null);
  const [logoError, setLogoError] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded-lg"
          aria-label="Gradsail Global Home"
        >
          {!logoError ? (
            <img
              src={SITE_CONFIG.logoUrl}
              alt="Gradsail Global — Sail Towards Your Global Degree"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-11 md:h-13 w-auto object-contain"
            />
          ) : (
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
              GRADSAIL GLOBAL
            </span>
          )}
        </Link>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700" aria-label="Main Navigation">
          <Link
            to="/"
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 ${
              isActive('/') ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600' : ''
            }`}
          >
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('destinations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'destinations' ? null : 'destinations')}
              aria-expanded={openDropdown === 'destinations'}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded ${
                location.pathname.startsWith('/destinations')
                  ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600'
                  : ''
              }`}
            >
              <span>Destinations</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  openDropdown === 'destinations' ? 'rotate-180 text-sky-700' : 'text-slate-400'
                }`}
              />
            </button>

            {openDropdown === 'destinations' && (
              <div
                className="absolute left-0 top-full pt-2 w-[520px] z-50"
                role="menu"
                aria-label="Study Destinations"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-5 grid grid-cols-2 gap-2">
                  {DESTINATIONS.map((dest) => (
                    <Link
                      key={dest.slug}
                      to={`/destinations/${dest.slug}`}
                      role="menuitem"
                      className="group p-3 rounded-lg hover:bg-sky-50/80 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-slate-900 group-hover:text-sky-700">
                          {dest.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {dest.universityCategories}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              aria-expanded={openDropdown === 'services'}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded ${
                location.pathname.startsWith('/services')
                  ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600'
                  : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  openDropdown === 'services' ? 'rotate-180 text-sky-700' : 'text-slate-400'
                }`}
              />
            </button>

            {openDropdown === 'services' && (
              <div
                className="absolute left-0 top-full pt-2 w-[580px] z-50"
                role="menu"
                aria-label="Advisory Services"
              >
                <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-5 grid grid-cols-2 gap-2.5">
                  {SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      role="menuitem"
                      className="group p-3 rounded-lg hover:bg-sky-50/80 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-semibold text-slate-900 group-hover:text-sky-700 text-sm">
                          {svc.number}. {svc.navTitle}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {svc.blueprintSummary}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/scholarships"
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 ${
              isActive('/scholarships') ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600' : ''
            }`}
          >
            Scholarships
          </Link>

          <Link
            to="/resources"
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 ${
              isActive('/resources') ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600' : ''
            }`}
          >
            Resources
          </Link>

          <Link
            to="/about"
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-sky-700 ${
              isActive('/about') ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2 decoration-sky-600' : ''
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenCounseling(undefined, 'Header Top Navigation CTA')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
          >
            Book Free Counseling
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-sky-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[82vh] overflow-y-auto px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            Home
          </Link>

          {/* Mobile Destinations Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSection(mobileSection === 'destinations' ? null : 'destinations')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
            >
              <span>Destinations</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform ${
                  mobileSection === 'destinations' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileSection === 'destinations' && (
              <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-slate-200 ml-3 mt-1">
                {DESTINATIONS.map((dest) => (
                  <Link
                    key={dest.slug}
                    to={`/destinations/${dest.slug}`}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform ${
                  mobileSection === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileSection === 'services' && (
              <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-slate-200 ml-3 mt-1">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    {svc.number}. {svc.navTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/scholarships"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            Scholarships
          </Link>

          <Link
            to="/resources"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            Resources
          </Link>

          <Link
            to="/about"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            About Us
          </Link>

          <Link
            to="/faq"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            FAQs
          </Link>

          <Link
            to="/contact"
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounseling(undefined, 'Mobile Navigation Menu');
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs"
            >
              Book Free Counseling
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
