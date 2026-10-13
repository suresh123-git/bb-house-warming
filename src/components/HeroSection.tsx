import React from 'react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';
import { BotanicalSprig } from './Decorations';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].hero;

  return (
    <section
      id="home"
      aria-label={currentLang === 'te' ? 'గృహప్రవేశం' : 'House Warming Hero'}
      className="relative w-full bg-[#F9F6EF] pt-6 pb-20 sm:pt-10 sm:pb-28 overflow-hidden select-none"
    >
      {/* Botanical leaves framing top right corner matching Panel 3 */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 w-28 sm:w-36 md:w-44">
        <BotanicalSprig className="w-full h-auto" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN: EDITORIAL TYPOGRAPHY ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow: OUR HOUSE WARMING / మా గృహప్రవేశం */}
            <p className={`${currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#B86C3C] uppercase mb-4 sm:mb-5`}>
              {content.eyebrow}
            </p>

            {/* Main Heading: A Home Full of Love */}
            <h1 className={`${currentLang === 'te' ? 'font-telugu' : 'font-display'} text-5xl sm:text-6xl lg:text-[68px] text-[#482B19] font-normal leading-[1.08] tracking-tight`}>
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h1>

            {/* Language-pure Invitation lines */}
            <div className={`${currentLang === 'te' ? 'font-telugu text-lg sm:text-xl' : 'font-serif text-lg sm:text-xl italic'} text-[#B86C3C] font-normal leading-relaxed mt-5 sm:mt-6`}>
              <p>{content.subtitleLine1}</p>
              <p>{content.subtitleLine2}</p>
            </div>

            {/* Secondary subtitle note */}
            <p className={`${currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-sm sm:text-base text-[#684329]/85 font-normal mt-3 sm:mt-4`}>
              {content.secondarySubtitle}
            </p>

            {/* Delicate brass flourish divider */}
            <div className="flex items-center gap-3 my-5 sm:my-6 w-36">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B59A66]" />
              <span className="text-[#B59A66] text-xs">❖</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B59A66]" />
            </div>

            {/* Event Date */}
            <p className={`${currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-sm sm:text-base font-semibold tracking-wide text-[#482B19]`}>
              {content.date}
            </p>
          </div>

          {/* ================= RIGHT COLUMN: VILLA EXTERIOR PHOTOGRAPHY ================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_12px_36px_rgba(72,43,25,0.12)] border border-[#EBE1D0]">
              <img
                src="/assets/images/4k/hero_villa_4k.jpg"
                alt="Bikas and Bhargavi New Home Villa"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Soft warm sun glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#482B19]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
