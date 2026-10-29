import React from 'react';

/**
 * High-craft bespoke SVG editorial & architectural illustrations for Gradsail Global.
 * Guarantees 100% zero broken images in hermetic environments while maintaining a
 * cohesive deep-navy, royal-blue, and cyan maritime-academic visual identity.
 */

export const SailDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
      <path
        d="M0 36C280 8 520 44 820 20C1080 0 1280 28 1440 12V48H0V36Z"
        fill="currentColor"
      />
      <path
        d="M0 24C340 46 640 4 980 28C1210 44 1350 18 1440 6"
        stroke="#0284c7"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

export const HeroCampusIllustration: React.FC = () => (
  <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-xl flex flex-col justify-between">
    {/* Layered atmospheric sky & collegiate architectural skyline */}
    <svg
      viewBox="0 0 800 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full object-cover"
      role="img"
      aria-label="Editorial illustration of an international graduate student looking toward global university architecture and Gradsail horizon"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="800" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#081c38" />
          <stop offset="52%" stopColor="#0f2f5c" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="sailGlow" x1="480" y1="70" x2="720" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#0284c7" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="sunGold" x1="560" y1="120" x2="560" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="campusStone" x1="0" y1="240" x2="0" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0b192c" />
        </linearGradient>
      </defs>

      <rect width="800" height="620" fill="url(#heroSky)" />

      {/* Subtle celestial meridian arcs representing global navigation */}
      <circle cx="580" cy="230" r="240" stroke="#38bdf8" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="580" cy="230" r="175" stroke="#7dd3fc" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="580" cy="230" r="115" fill="url(#sunGold)" />

      {/* Restrained Gradsail sailing geometry motif rising toward the horizon */}
      <path d="M510 430C555 280 585 170 615 95C665 190 688 310 662 430H510Z" fill="url(#sailGlow)" />
      <path d="M455 430C495 315 532 225 568 152C552 255 528 345 500 430H455Z" fill="#38bdf8" fillOpacity="0.18" />

      {/* Distant Global University Campus Skyline (Radcliffe Camera dome, collegiate spires, modern research tower) */}
      <g opacity="0.92">
        {/* Left Modern Technical University Wing */}
        <rect x="48" y="310" width="120" height="170" fill="#132a4a" stroke="#38bdf8" strokeOpacity="0.25" />
        <line x1="68" y1="310" x2="68" y2="480" stroke="#38bdf8" strokeOpacity="0.15" />
        <line x1="94" y1="310" x2="94" y2="480" stroke="#38bdf8" strokeOpacity="0.15" />
        <line x1="120" y1="310" x2="120" y2="480" stroke="#38bdf8" strokeOpacity="0.15" />
        <line x1="146" y1="310" x2="146" y2="480" stroke="#38bdf8" strokeOpacity="0.15" />

        {/* Central Classical Collegiate Rotunda & Spire */}
        <path d="M220 355C220 302 262 262 315 262C368 262 410 302 410 355H220Z" fill="#1b3b66" stroke="#7dd3fc" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="308" y="218" width="14" height="44" fill="#38bdf8" fillOpacity="0.4" />
        <polygon points="315,190 303,220 327,220" fill="#7dd3fc" fillOpacity="0.7" />
        <rect x="205" y="355" width="220" height="125" fill="url(#campusStone)" stroke="#38bdf8" strokeOpacity="0.3" />
        {/* Classical colonnade */}
        <rect x="228" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />
        <rect x="260" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />
        <rect x="292" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />
        <rect x="328" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />
        <rect x="360" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />
        <rect x="392" y="372" width="10" height="90" fill="#38bdf8" fillOpacity="0.2" />

        {/* Gothic Academic Tower */}
        <rect x="445" y="275" width="66" height="205" fill="#153054" stroke="#38bdf8" strokeOpacity="0.28" />
        <polygon points="445,275 460,225 475,275" fill="#1e4273" />
        <polygon points="481,275 496,225 511,275" fill="#1e4273" />
      </g>

      {/* Courtyard & Water Horizon */}
      <rect x="0" y="475" width="800" height="145" fill="#071529" />
      <path d="M0 490C240 472 520 508 800 482" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M0 515C300 498 560 530 800 506" stroke="#0284c7" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* Foreground Silhouette of Graduate Student Looking Toward the Campus & Sail Horizon */}
      <g transform="translate(115, 315)">
        {/* Academic Mortarboard Cap in perspective */}
        <polygon points="58,8 106,22 58,36 10,22" fill="#0ea5e9" stroke="#bae6fd" strokeWidth="1.2" />
        <path d="M36 29V44C36 44 48 50 60 50C72 50 82 44 82 44V29" fill="#0284c7" />
        <path d="M22 25C15 36 12 48 16 58" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        {/* Head & Shoulders Silhouette */}
        <circle cx="59" cy="56" r="18" fill="#0f294a" stroke="#7dd3fc" strokeOpacity="0.4" strokeWidth="1.2" />
        <path
          d="M16 175C18 122 34 92 59 92C84 92 102 122 106 175H16Z"
          fill="#0c213d"
          stroke="#38bdf8"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        {/* Portfolio / University Prospectus held by student */}
        <rect x="76" y="118" width="34" height="44" rx="3" transform="rotate(-10 76 118)" fill="#0284c7" stroke="#bae6fd" strokeWidth="1.2" />
      </g>
    </svg>

    {/* Top bar overlay with subtle destination coordinates */}
    <div className="relative z-10 p-6 flex items-center justify-between text-xs text-sky-200/90 border-b border-white/10 bg-slate-950/40 backdrop-blur-xs">
      <span className="font-medium tracking-wide">GRADSAIL GLOBAL ADVISORY</span>
      <span className="text-sky-300">UK · AUSTRALIA · GERMANY · DUBAI · FRANCE · SOUTH KOREA</span>
    </div>

    {/* Bottom Editorial Caption Card */}
    <div className="relative z-10 p-6 md:p-7 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15 text-white">
        <div>
          <p className="text-xs text-sky-300 font-medium">6 Global Destinations</p>
          <p className="text-sm font-semibold mt-0.5">Curated University Pathways</p>
        </div>
        <div>
          <p className="text-xs text-sky-300 font-medium">6 Core Services</p>
          <p className="text-sm font-semibold mt-0.5">Admissions to Pre-Departure</p>
        </div>
        <div>
          <p className="text-xs text-sky-300 font-medium">Transparent Process</p>
          <p className="text-sm font-semibold mt-0.5">Student-First Counseling</p>
        </div>
      </div>
    </div>
  </div>
);

export const CounselingSessionIllustration: React.FC = () => (
  <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end">
    <svg
      viewBox="0 0 720 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full object-cover"
      role="img"
      aria-label="Illustration of a student discussing university pathways with a Gradsail Global education counselor"
    >
      <defs>
        <linearGradient id="officeBg" x1="0" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="720" height="500" fill="url(#officeBg)" />

      {/* Large architectural window overlooking world map & sail motif */}
      <rect x="48" y="36" width="624" height="250" rx="12" fill="#0b192c" stroke="#38bdf8" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="256" y1="36" x2="256" y2="286" stroke="#38bdf8" strokeOpacity="0.18" strokeWidth="1.5" />
      <line x1="464" y1="36" x2="464" y2="286" stroke="#38bdf8" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* Pathway nodes displayed on advisory screen */}
      <circle cx="150" cy="155" r="28" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="150" y="160" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontWeight="700">01</text>
      <line x1="178" y1="155" x2="332" y2="155" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="360" cy="155" r="28" fill="#0284c7" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="360" y="160" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontWeight="700">02</text>
      <line x1="388" y1="155" x2="542" y2="155" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="570" cy="155" r="28" fill="#0ea5e9" fillOpacity="0.45" stroke="#bae6fd" strokeWidth="1.5" />
      <text x="570" y="160" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">03</text>

      {/* Advisory Consultation Table & Two Figures (Advisor & Student) */}
      <g transform="translate(140, 225)">
        {/* Advisor (Left) */}
        <circle cx="110" cy="48" r="24" fill="#38bdf8" fillOpacity="0.85" />
        <path d="M62 150C62 108 82 84 110 84C138 84 158 108 158 150H62Z" fill="#0284c7" />
        {/* Laptop & Shortlist Documents */}
        <polygon points="155,115 215,115 225,150 145,150" fill="#e0f2fe" />
        {/* Student (Right) */}
        <circle cx="330" cy="48" r="24" fill="#bae6fd" fillOpacity="0.9" />
        <path d="M282 150C282 108 302 84 330 84C358 84 378 108 378 150H282Z" fill="#0ea5e9" />
        {/* Desk surface */}
        <rect x="20" y="150" width="400" height="14" rx="4" fill="#7dd3fc" fillOpacity="0.35" />
      </g>
    </svg>

    <div className="relative z-10 p-6 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent text-white">
      <p className="text-xs text-sky-300 font-medium">One-on-One Advisory</p>
      <p className="text-base font-semibold mt-1">
        Structured Shortlisting, Transparent Costs & Dedicated Visa Preparation
      </p>
    </div>
  </div>
);

export const DestinationArtwork: React.FC<{
  slug: string;
  className?: string;
}> = ({ slug, className = 'h-48' }) => {
  const renderLandmark = () => {
    switch (slug) {
      case 'united-kingdom':
        return (
          <g>
            {/* Radcliffe Camera Dome & Elizabeth Tower Silhouette */}
            <path d="M90 155C90 118 122 92 160 92C198 92 230 118 230 155H90Z" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.5" />
            <rect x="78" y="155" width="164" height="65" fill="#172554" stroke="#38bdf8" strokeOpacity="0.4" />
            <rect x="280" y="58" width="42" height="162" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.5" />
            <polygon points="301,24 278,58 324,58" fill="#0284c7" />
            <circle cx="301" cy="86" r="11" fill="#e0f2fe" fillOpacity="0.85" />
          </g>
        );
      case 'australia':
        return (
          <g>
            {/* Sydney Opera Sails & Harbour Arch */}
            <path d="M40 190C95 130 175 130 230 190" stroke="#7dd3fc" strokeWidth="2.5" fill="none" />
            <path d="M210 195C218 130 250 96 285 88C276 135 270 168 265 195H210Z" fill="#0ea5e9" stroke="#e0f2fe" strokeWidth="1.2" />
            <path d="M252 195C262 140 292 110 325 104C316 144 308 172 302 195H252Z" fill="#38bdf8" stroke="#e0f2fe" strokeWidth="1.2" />
            <path d="M294 195C302 155 324 132 348 128C342 156 336 178 332 195H294Z" fill="#7dd3fc" />
          </g>
        );
      case 'germany':
        return (
          <g>
            {/* Brandenburg Gate Neoclassical Columns & Modern Technical Campus */}
            <rect x="75" y="102" width="210" height="14" fill="#0284c7" stroke="#bae6fd" strokeWidth="1.2" />
            <rect x="95" y="84" width="170" height="18" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.2" />
            <rect x="92" y="116" width="14" height="84" fill="#38bdf8" fillOpacity="0.55" />
            <rect x="132" y="116" width="14" height="84" fill="#38bdf8" fillOpacity="0.55" />
            <rect x="172" y="116" width="14" height="84" fill="#38bdf8" fillOpacity="0.55" />
            <rect x="212" y="116" width="14" height="84" fill="#38bdf8" fillOpacity="0.55" />
            <rect x="252" y="116" width="14" height="84" fill="#38bdf8" fillOpacity="0.55" />
            <circle cx="332" cy="140" r="36" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4 4" />
          </g>
        );
      case 'dubai-uae':
        return (
          <g>
            {/* Burj Spire & Torus Innovation Landmark */}
            <polygon points="150,24 138,195 162,195" fill="#38bdf8" fillOpacity="0.7" />
            <rect x="126" y="95" width="48" height="100" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.2" />
            <rect x="112" y="135" width="76" height="60" fill="#0f294a" stroke="#38bdf8" strokeWidth="1.2" />
            <ellipse cx="285" cy="148" rx="46" ry="30" stroke="#7dd3fc" strokeWidth="3" fill="none" />
            <ellipse cx="285" cy="148" rx="26" ry="15" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </g>
        );
      case 'france':
        return (
          <g>
            {/* Eiffel Lattice Spire & Sorbonne Dome */}
            <path d="M145 32L110 195H132L145 140L158 195H180L145 32Z" fill="#0284c7" stroke="#bae6fd" strokeWidth="1.4" />
            <path d="M235 155C235 122 262 98 295 98C328 98 355 122 355 155H235Z" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.4" />
            <rect x="225" y="155" width="140" height="40" fill="#172554" />
          </g>
        );
      case 'south-korea':
      default:
        return (
          <g>
            {/* Traditional Giwa Curved Roof Pavilion & Modern Research Tower */}
            <path d="M68 138C115 118 175 118 222 138L206 154H84L68 138Z" fill="#0284c7" stroke="#bae6fd" strokeWidth="1.4" />
            <rect x="92" y="154" width="106" height="42" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.2" />
            <rect x="288" y="46" width="16" height="150" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="1.2" />
            <rect x="274" y="76" width="44" height="18" rx="4" fill="#0ea5e9" stroke="#e0f2fe" strokeWidth="1.2" />
            <line x1="296" y1="22" x2="296" y2="46" stroke="#bae6fd" strokeWidth="2" />
          </g>
        );
    }
  };

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900 ${className}`}>
      <svg
        viewBox="0 0 420 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`grad-${slug}`} x1="0" y1="0" x2="420" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#091930" />
            <stop offset="55%" stopColor="#12315e" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <rect width="420" height="220" fill={`url(#grad-${slug})`} />
        <circle cx="350" cy="54" r="72" fill="#38bdf8" fillOpacity="0.12" />
        {/* Subtle Gradsail curve */}
        <path d="M340 195C360 135 375 88 390 52C405 100 410 148 398 195H340Z" fill="#38bdf8" fillOpacity="0.16" />
        {renderLandmark()}
        <path d="M0 195H420V220H0V195Z" fill="#071326" />
        <path d="M0 195C140 185 280 205 420 192" stroke="#38bdf8" strokeOpacity="0.45" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
