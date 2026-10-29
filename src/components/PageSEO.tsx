import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
  title: string;
  description: string;
}

export const PageSEO: React.FC<PageSEOProps> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const fullTitle = `${title} | Gradsail Global`;
    document.title = fullTitle;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description]);

  return null;
};
