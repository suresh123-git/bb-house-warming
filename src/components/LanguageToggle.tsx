import React from 'react';
import { Globe } from 'lucide-react';
import type { Language } from '../data/invitation';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onLanguageChange,
  className = '',
}) => {
  return (
    <div
      role="group"
      aria-label="Language selector / భాష ఎంపిక"
      className={`inline-flex items-center rounded-full p-1 bg-[#FFFDF9]/90 border border-[#D6A84F]/50 shadow-md backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center pl-2 pr-1 text-[#751D2A] opacity-80" aria-hidden="true">
        <Globe className="w-4 h-4" />
      </div>

      <button
        type="button"
        onClick={() => onLanguageChange('te')}
        aria-pressed={currentLang === 'te'}
        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 font-telugu ${
          currentLang === 'te'
            ? 'bg-[#751D2A] text-[#F8F0DE] shadow-xs'
            : 'text-[#751D2A] hover:bg-[#D6A84F]/20'
        }`}
      >
        తెలుగు
      </button>

      <button
        type="button"
        onClick={() => onLanguageChange('en')}
        aria-pressed={currentLang === 'en'}
        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 font-sans-en ${
          currentLang === 'en'
            ? 'bg-[#751D2A] text-[#F8F0DE] shadow-xs'
            : 'text-[#751D2A] hover:bg-[#D6A84F]/20'
        }`}
      >
        English
      </button>
    </div>
  );
};
