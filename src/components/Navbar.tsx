import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onReopenDoor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onReopenDoor,
}) => {
  const content = storyboardContent[currentLang].nav;
  const [activeSection, setActiveSection] = useState<'home' | 'our-story' | 'details' | 'location'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'our-story', 'details', 'location'] as const;
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFontClass = () => {
    if (currentLang === 'kn') return 'font-kannada';
    if (currentLang === 'te') return 'font-telugu';
    return 'font-sans';
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F6EF]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#EBDDC8]'
          : 'bg-[#F9F6EF] py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-10 flex flex-wrap items-center justify-between gap-y-3">
        {/* Couple Brand Name matching Panel 3 */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-display'} text-2xl sm:text-3xl text-[#482B19] font-medium tracking-tight hover:opacity-90 transition-opacity`}
        >
          {content.brand}
        </a>

        {/* Center / Right Editorial Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-7 md:gap-9">
          <button
            onClick={() => scrollToSection('home')}
            className={`${getFontClass()} text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
              activeSection === 'home'
                ? 'text-[#482B19] font-semibold'
                : 'text-[#684329]/80 hover:text-[#482B19]'
            }`}
          >
            {content.home}
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B86C3C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('our-story')}
            className={`${getFontClass()} text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
              activeSection === 'our-story'
                ? 'text-[#482B19] font-semibold'
                : 'text-[#684329]/80 hover:text-[#482B19]'
            }`}
          >
            {content.ourStory}
            {activeSection === 'our-story' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B86C3C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('details')}
            className={`${getFontClass()} text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
              activeSection === 'details'
                ? 'text-[#482B19] font-semibold'
                : 'text-[#684329]/80 hover:text-[#482B19]'
            }`}
          >
            {content.details}
            {activeSection === 'details' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B86C3C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('location')}
            className={`${getFontClass()} text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
              activeSection === 'location'
                ? 'text-[#482B19] font-semibold'
                : 'text-[#684329]/80 hover:text-[#482B19]'
            }`}
          >
            {content.location}
            {activeSection === 'location' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B86C3C] rounded-full" />
            )}
          </button>

          {/* Controls: 3-Language segmented switcher + Replay Entrance */}
          <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-[#D9CDB8]">
            {/* Language Switcher: English | తెలుగు | ಕನ್ನಡ */}
            <div className="flex items-center bg-[#EDE4D5]/80 p-0.5 rounded-full border border-[#D9CDB8]">
              {(
                [
                  { code: 'en', label: 'EN', fullName: 'English', font: 'font-sans' },
                  { code: 'te', label: 'తెలుగు', fullName: 'తెలుగు', font: 'font-telugu' },
                  { code: 'kn', label: 'ಕನ್ನಡ', fullName: 'ಕನ್ನಡ', font: 'font-kannada' },
                ] as const
              ).map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`cursor-pointer text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full transition-all ${lang.font} ${
                    currentLang === lang.code
                      ? 'bg-[#B86C3C] text-white shadow-xs'
                      : 'text-[#684329] hover:text-[#482B19] hover:bg-white/60'
                  }`}
                  title={`Switch to ${lang.fullName}`}
                  aria-label={`Switch to ${lang.fullName}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Replay Entrance Experience */}
            <button
              onClick={onReopenDoor}
              className="cursor-pointer p-1.5 rounded-full text-[#684329] hover:text-[#482B19] hover:bg-[#F6F1E8] transition-colors"
              title={content.replayTooltip}
              aria-label={content.replayTooltip}
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
