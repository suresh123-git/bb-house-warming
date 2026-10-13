import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface EventDetailsSectionProps {
  currentLang: Language;
}

export const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].details;

  return (
    <section
      id="details"
      aria-label="Event Details Section"
      className="relative w-full bg-[#F9F6EF] py-20 sm:py-28 overflow-hidden select-none border-t border-[#EBE2D3]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Eyebrow: THE CELEBRATION */}
        <p className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#B86C3C] uppercase mb-3">
          {content.eyebrow}
        </p>

        {/* Main Heading: Gruhapravesam */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#482B19] font-normal tracking-tight mb-8 sm:mb-10">
          {content.title}
        </h2>

        {/* Two Event Cards Side-by-Side matching Panel 5 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md mb-8">
          {/* Card 1: Date */}
          <div className="bg-[#FDFBF7] rounded-2xl p-5 sm:p-7 border border-[#E8DFD0] shadow-[0_4px_20px_rgba(72,43,25,0.04)] flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 rounded-full bg-[#FAF4EA] flex items-center justify-center text-[#B86C3C] mb-3">
              <Calendar size={20} strokeWidth={1.75} />
            </div>
            <p className="font-sans text-xs sm:text-sm font-semibold text-[#482B19] tracking-wide">
              {content.dateDay}
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-[#684329]/80 mt-0.5">
              {content.dateFull}
            </p>
          </div>

          {/* Card 2: Time (To be confirmed) */}
          <div className="bg-[#FDFBF7] rounded-2xl p-5 sm:p-7 border border-[#E8DFD0] shadow-[0_4px_20px_rgba(72,43,25,0.04)] flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 rounded-full bg-[#FAF4EA] flex items-center justify-center text-[#B86C3C] mb-3">
              <Clock size={20} strokeWidth={1.75} />
            </div>
            <p className="font-sans text-xs sm:text-sm font-semibold text-[#482B19] tracking-wide">
              {content.timeLabel}
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-[#684329]/80 mt-0.5">
              {content.timeValue}
            </p>
          </div>
        </div>

        {/* Subtle brass divider flourish */}
        <div className="flex items-center gap-3 mb-10 w-36 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B59A66]" />
          <span className="text-[#B59A66] text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B59A66]" />
        </div>

        {/* Wide feature photo: Pooja urlis, marigolds, kalash matching Panel 5 */}
        <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_12px_36px_rgba(72,43,25,0.1)] border border-[#E8DFD0]">
          <img
            src="/assets/reference_crops/event_pooja_perfect_hd.jpg"
            alt="Traditional Pooja Urli, Marigolds, and Kalash"
            className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};
