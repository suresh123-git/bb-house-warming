import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  onReopenDoor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isPlayingAudio,
  onToggleAudio,
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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F6EF]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#EBDDC8]'
          : 'bg-[#F9F6EF] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Couple Brand Name matching Panel 3 */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-display text-2xl sm:text-3xl text-[#482B19] font-medium tracking-tight hover:opacity-90 transition-opacity"
        >
          {content.brand}
        </a>

        {/* Center / Right Editorial Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-9">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-sans text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
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
            className={`font-sans text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
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
            className={`font-sans text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
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
            className={`font-sans text-xs sm:text-sm tracking-wide transition-colors relative pb-1 cursor-pointer ${
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

          {/* Controls: Language toggle + Audio + Reopen Doors */}
          <div className="flex items-center gap-2.5 ml-2 pl-3 border-l border-[#D9CDB8]">
            {/* Language toggle: English default */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'te' : 'en')}
              className="cursor-pointer text-xs font-semibold px-2.5 py-1 rounded-md border border-[#B59A66]/60 text-[#482B19] hover:bg-[#F6F1E8] transition-colors"
              title={currentLang === 'en' ? 'తెలుగులో చూడండి' : 'Switch to English'}
            >
              {currentLang === 'en' ? 'తెలుగు' : 'English'}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              className="cursor-pointer p-1.5 rounded-full text-[#684329] hover:text-[#482B19] hover:bg-[#F6F1E8] transition-colors"
              title={isPlayingAudio ? 'Mute Music' : 'Play Music'}
              aria-label="Toggle background flute audio"
            >
              {isPlayingAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Replay Entrance Experience */}
            <button
              onClick={onReopenDoor}
              className="cursor-pointer p-1.5 rounded-full text-[#684329] hover:text-[#482B19] hover:bg-[#F6F1E8] transition-colors"
              title="Experience Entrance Again"
              aria-label="Replay Entrance Screen"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
