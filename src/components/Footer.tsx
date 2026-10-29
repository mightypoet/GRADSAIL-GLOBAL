import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, SERVICES, SITE_CONFIG } from '../data/siteContent';

interface FooterProps {
  onOpenCounseling: (defaultCountry?: string, source?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCounseling }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white px-3.5 py-2 rounded-xl">
              {!logoError ? (
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt="Gradsail Global — Sail Towards Your Global Degree"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className="font-display text-lg font-extrabold text-slate-900">
                  GRADSAIL GLOBAL
                </span>
              )}
            </Link>
            <p className="font-display text-base font-semibold text-white">
              “{SITE_CONFIG.tagline}”
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.brandPromise}. At Gradsail Global, our mission is to simplify study abroad journeys by providing verified university partnerships, transparent fee structures, and expert guidance without hidden costs.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenCounseling(undefined, 'Footer Counseling CTA')}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Free Counseling
              </button>
            </div>
          </div>

          {/* Column 2: Study Destinations */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white tracking-wide">
              Study Destinations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {DESTINATIONS.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advisory Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {svc.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources, Company & Contact Configuration */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white tracking-wide">
              Student Desk & Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/scholarships" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Scholarship Desk
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Resource Hub & Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Gradsail Global
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact & Counseling Desk
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1.5">
              <p className="font-semibold text-slate-300">Advisory Hours</p>
              <p>{SITE_CONFIG.contact.counselingHours}</p>
              <p className="text-slate-500">
                Direct phone, email & social channels are configurable in <code className="text-slate-400">siteContent.ts</code> prior to live deployment. Use our online counseling forms 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved. Sail Towards Your Global Degree.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
