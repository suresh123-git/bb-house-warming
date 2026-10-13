import React from 'react';
import { Home } from 'lucide-react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface FooterSectionProps {
  currentLang: Language;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ currentLang }) => {
  const content = storyboardContent[currentLang].footer;

  return (
    <footer
      aria-label="Website Footer"
      className="w-full bg-[#F6F1E8] py-14 px-6 border-t border-[#EBE2D3] select-none text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Small line-art house icon */}
        <div className="w-10 h-10 rounded-full bg-[#EFE4D3] flex items-center justify-center text-[#B86C3C] mb-4">
          <Home size={18} strokeWidth={1.75} />
        </div>

        {/* Bilingual closing quote */}
        <p className="font-display text-lg sm:text-xl text-[#482B19] italic max-w-md mb-3">
          "{content.closingQuote}"
        </p>

        {/* Brand & Date */}
        <p className="font-sans text-xs tracking-widest uppercase font-semibold text-[#684329]/80">
          {content.brand} • {content.date}
        </p>

        {/* Subtle Telugu blessing */}
        <p className="font-telugu text-xs text-[#B86C3C] mt-2">
          {currentLang === 'te'
            ? 'మా నూతన గృహప్రవేశ వేడుకకు మీ ఆశీస్సులే మాకు కొండంత బలం.'
            : 'Gruhapravesam Ceremony • Auspicious Housewarming 2026'}
        </p>
      </div>
    </footer>
  );
};
