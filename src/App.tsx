/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CounselingModal } from './components/CounselingModal';
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { ServicePage } from './pages/ServicePage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDefaultCountry, setModalDefaultCountry] = useState<string>('');
  const [modalSource, setModalSource] = useState<string>('Site-Wide Counseling Pop-up');

  const handleOpenCounseling = (defaultCountry?: string, source?: string) => {
    setModalDefaultCountry(defaultCountry || '');
    setModalSource(source || 'Site-Wide Counseling CTA');
    setModalOpen(true);
  };

  const handleCloseCounseling = () => {
    setModalOpen(false);
    try {
      sessionStorage.setItem('gradsail_popup_dismissed', 'true');
    } catch {
      // ignore storage errors
    }
  };

  // Polite dwell-time + scroll-intent trigger (>= 28 seconds + user scroll interaction, once per session)
  useEffect(() => {
    let hasScrolled = false;
    const onScroll = () => {
      if (window.scrollY > 320) {
        hasScrolled = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const timer = window.setTimeout(() => {
      try {
        const alreadyDismissed = sessionStorage.getItem('gradsail_popup_dismissed');
        if (!alreadyDismissed && hasScrolled) {
          setModalSource('Timed Engagement Counseling Prompt');
          setModalOpen(true);
          sessionStorage.setItem('gradsail_popup_dismissed', 'true');
        }
      } catch {
        // ignore storage errors
      }
    }, 28000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar onOpenCounseling={handleOpenCounseling} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenCounseling={handleOpenCounseling} />} />
            <Route
              path="/destinations/:slug"
              element={<DestinationPage onOpenCounseling={handleOpenCounseling} />}
            />
            <Route
              path="/services/:slug"
              element={<ServicePage onOpenCounseling={handleOpenCounseling} />}
            />
            <Route
              path="/scholarships"
              element={<ScholarshipsPage onOpenCounseling={handleOpenCounseling} />}
            />
            <Route
              path="/resources"
              element={<ResourcesPage onOpenCounseling={handleOpenCounseling} />}
            />
            <Route path="/about" element={<AboutPage onOpenCounseling={handleOpenCounseling} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage onOpenCounseling={handleOpenCounseling} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer onOpenCounseling={handleOpenCounseling} />

        <CounselingModal
          isOpen={modalOpen}
          onClose={handleCloseCounseling}
          defaultCountry={modalDefaultCountry}
          sourcePage={modalSource}
        />
      </div>
    </BrowserRouter>
  );
}
