import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isPlayingAudio,
  onToggleAudio,
}) => {
  const content = uiContent[currentLang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: content.nav.hero },
    { href: '#invitation', label: content.nav.invitation },
    { href: '#ceremonies', label: content.nav.ceremony },
    { href: '#venue', label: content.nav.home },
    { href: '#gallery', label: content.nav.gallery },
    { href: '#blessings', label: content.nav.blessings },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border-b border-[#D6A84F]/40 py-2.5'
          : 'bg-[#F8F0DE]/80 backdrop-blur-xs py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-1.5 text-[#751D2A] font-bold text-lg sm:text-xl font-serif-en group"
        >
          <span className="text-[#D6A84F] group-hover:rotate-12 transition-transform">🪔</span>
          <span>{invitationData.couple.groom.firstName}</span>
          <span className="text-[#B77B27] text-sm">&amp;</span>
          <span>{invitationData.couple.bride.firstName}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-semibold text-[#523A30] hover:text-[#751D2A] font-telugu transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls: Audio Toggle + Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Button */}
          <button
            type="button"
            onClick={onToggleAudio}
            aria-label={isPlayingAudio ? content.audioMute : content.audioPlay}
            title={isPlayingAudio ? content.audioMute : content.audioPlay}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-[#751D2A] text-[#F8F0DE] border-[#D6A84F] animate-pulse'
                : 'bg-[#FFFDF9] text-[#751D2A] border-[#D6A84F]/50 hover:bg-[#FCF8EE]'
            }`}
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-[#D6A84F]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#751D2A]" />
            )}
          </button>

          {/* Language Toggle */}
          <LanguageToggle
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#751D2A] hover:bg-[#D6A84F]/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#D6A84F]/40 px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-[#523A30] hover:bg-[#FCF8EE] hover:text-[#751D2A] font-telugu transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
