import React from 'react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface InvitationMessageSectionProps {
  currentLang: Language;
}

export const InvitationMessageSection: React.FC<InvitationMessageSectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].invitation;

  return (
    <section
      id="invitation"
      aria-label="Invitation Message Section"
      className="relative w-full bg-[#F9F6EF] py-20 sm:py-28 overflow-hidden select-none border-t border-[#EBE2D3]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN: INVITATION MESSAGE ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow: OUR INVITATION */}
            <p className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#B86C3C] uppercase mb-3">
              {content.eyebrow}
            </p>

            {/* Title: You're Invited */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#482B19] font-normal tracking-tight mb-5 sm:mb-6">
              {content.title}
            </h2>

            {/* Telugu Quote: మా గృహప్రవేశానికి మీ సాన్నిధ్యం మా ఆనందం */}
            <div className="font-telugu text-xl sm:text-2xl text-[#B86C3C] font-medium leading-snug mb-4 sm:mb-5">
              <p>{content.teluguQuoteLine1}</p>
              <p>{content.teluguQuoteLine2}</p>
            </div>

            {/* English invitation paragraph */}
            <p className="font-sans text-sm sm:text-base text-[#684329]/85 leading-relaxed max-w-md mb-8">
              {content.englishMessage}
            </p>

            {/* Subtle brass lamp illustration */}
            <div className="w-12 h-14 mb-4 text-[#B59A66] flex items-center justify-start opacity-90">
              <svg viewBox="0 0 40 60" fill="none" stroke="#B59A66" strokeWidth="1.5" className="w-10 h-14">
                {/* Diya flame */}
                <path d="M20 5 C22 10, 24 14, 20 20 C16 14, 18 10, 20 5 Z" fill="#D49B28" stroke="#B59A66" strokeWidth="1" />
                {/* Top cup */}
                <path d="M12 22 Q20 25, 28 22 L26 27 Q20 30, 14 27 Z" fill="#B59A66" />
                {/* Stem */}
                <line x1="20" y1="27" x2="20" y2="48" strokeWidth="2.5" />
                {/* Mid ring */}
                <circle cx="20" cy="38" r="3" fill="#B59A66" />
                {/* Base */}
                <path d="M10 54 Q20 48, 30 54 L32 58 L8 58 Z" fill="#B59A66" />
              </svg>
            </div>

            {/* Sign off */}
            <p className="font-sans text-xs sm:text-sm text-[#684329]/80 mb-1">
              {content.signOff}
            </p>

            {/* Cursive Couple Names: Bikas & Bhargavi */}
            <p className="font-signature text-3xl sm:text-4xl text-[#482B19] tracking-wide mt-1">
              {content.coupleNames}
            </p>
          </div>

          {/* ================= RIGHT COLUMN: BRASS VASE & TUBEROSES ================= */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl shadow-[0_12px_36px_rgba(72,43,25,0.1)] border border-[#E8DFD0]">
              <img
                src="/assets/reference_crops/invitation_flowers_perfect_hd.jpg"
                alt="Brass vase with white tuberoses and jasmine"
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
