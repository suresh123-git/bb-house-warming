import React from 'react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';
import { BotanicalSprig } from './Decorations';

interface OurStorySectionProps {
  currentLang: Language;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].story;

  return (
    <section
      id="our-story"
      aria-label="Our Story Section"
      className="relative w-full bg-[#F6F1E8] py-20 sm:py-28 overflow-hidden select-none border-t border-[#EBE2D3]"
    >
      {/* Botanical sprig framing top right */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 w-24 sm:w-32">
        <BotanicalSprig className="w-full h-auto" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN: STORY EDITORIAL COPY ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center relative">
            {/* Eyebrow: OUR STORY */}
            <p className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#B86C3C] uppercase mb-4 sm:mb-5">
              {content.eyebrow}
            </p>

            {/* Main Heading: A Place to Call Home */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#482B19] font-normal leading-[1.12] tracking-tight mb-6 sm:mb-8">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            {/* Warm, meaningful story copy */}
            <div className="font-sans text-sm sm:text-base text-[#684329]/90 leading-relaxed space-y-4 max-w-lg">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            {/* Subtle rangoli / mandala line-art flourish in bottom left corner */}
            <div className="mt-8 opacity-60 w-16 h-16 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#B86C3C" strokeWidth="1.2" className="w-full h-full">
                <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="10" fill="#B86C3C" fillOpacity="0.1" />
              </svg>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SUNLIT LIVING ROOM INTERIOR ================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl shadow-[0_12px_36px_rgba(72,43,25,0.1)] border border-[#E8DFD0]">
              <img
                src="/assets/images/4k/living_room_4k.jpg"
                alt="Living room interior"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#482B19]/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
