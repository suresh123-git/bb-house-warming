import React from 'react';
import { MapPin } from 'lucide-react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';
import { BotanicalSprig } from './Decorations';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].location;

  return (
    <section
      id="location"
      aria-label="Location and Venue Section"
      className="relative w-full bg-[#F6F1E8] py-20 sm:py-28 overflow-hidden select-none border-t border-[#EBE2D3]"
    >
      {/* Botanical leaves framing top right */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 w-24 sm:w-32">
        <BotanicalSprig className="w-full h-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Eyebrow: THE LOCATION / వేదిక / ಸ್ಥಳ */}
        <p className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#B86C3C] uppercase mb-3`}>
          {content.eyebrow}
        </p>

        {/* Title: Come Home */}
        <h2 className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-display'} text-4xl sm:text-5xl lg:text-[56px] text-[#482B19] font-normal tracking-tight mb-3`}>
          {content.title}
        </h2>

        {/* Subtitle */}
        <p className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-xs sm:text-sm text-[#684329]/85 max-w-sm mb-8 sm:mb-10`}>
          {content.subtitle}
        </p>

        {/* Center Map Card matching Panel 6 */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden border border-[#E8DFD0] shadow-[0_8px_30px_rgba(72,43,25,0.06)] bg-[#F4EDE2] p-8 flex flex-col items-center justify-center">
          {/* Subtle stylized map grid pattern background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(#CBB9A0 1px, transparent 1px),
                linear-gradient(to right, rgba(203,185,160,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(203,185,160,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px, 48px 48px, 48px 48px',
            }}
          />

          {/* Stylized streets lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
            viewBox="0 0 380 200"
            fill="none"
            stroke="#9E876B"
            strokeWidth="1.5"
          >
            <path d="M-10 60 Q 140 80, 200 110 T 400 90" />
            <path d="M60 -10 Q 110 90, 190 100 T 260 210" />
            <path d="M190 100 L 320 30" />
          </svg>

          {/* Terracotta Pin */}
          <div className="relative z-10 w-12 h-12 rounded-full bg-[#B86C3C]/10 flex items-center justify-center text-[#B86C3C] mb-3 shadow-xs">
            <MapPin size={28} className="fill-[#B86C3C] text-white" />
          </div>

          {/* Venue & Location Name */}
          <h3 className={`relative z-10 text-base sm:text-lg font-semibold text-[#482B19] mb-1 ${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'}`}>
            {content.venueName}
          </h3>
          <p className={`relative z-10 text-xs sm:text-[13px] text-[#684329]/80 mb-5 ${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'}`}>
            {content.address}
          </p>

          {/* Button: Open in Google Maps → */}
          <a
            href={content.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 cursor-pointer bg-[#B86C3C] hover:bg-[#A35D32] active:scale-95 text-white ${
              currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'
            } text-xs sm:text-sm font-medium tracking-wide px-7 py-2.5 rounded-full shadow-[0_4px_16px_rgba(184,108,60,0.3)] transition-all duration-300 flex items-center gap-2`}
          >
            <span>{content.mapBtn}</span>
          </a>
        </div>

        {/* Discreet address note */}
        <p className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-xs text-[#684329]/80 italic mt-4`}>
          {content.discreetNote}
        </p>

        {/* Bottom fine line-art house facade sketch matching Panel 6 */}
        <div className="w-full max-w-xs mt-10 opacity-70 pointer-events-none">
          <img
            src="/assets/images/house_sketch_clean.png"
            alt="Traditional Home Facade Line Art"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
