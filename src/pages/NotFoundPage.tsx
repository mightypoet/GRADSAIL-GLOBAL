import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';

export const NotFoundPage: React.FC = () => (
  <div className="min-h-[65vh] flex items-center justify-center bg-slate-50 px-4 py-16">
    <PageSEO
      title="Page Not Found (404)"
      description="The page you are looking for could not be found on Gradsail Global."
    />
    <div className="max-w-lg w-full bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5">
      <p className="font-mono text-xs font-bold text-sky-700">ERROR 404 · OFF COURSE</p>
      <h1 className="font-display text-3xl font-extrabold text-slate-900">
        We Couldn&apos;t Find That Page
      </h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        The destination or resource link you followed may have moved. Use the links below to return to the homepage or explore our six study destinations.
      </p>
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/resources"
          className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
        >
          Visit Resource Hub
        </Link>
      </div>
    </div>
  </div>
);
