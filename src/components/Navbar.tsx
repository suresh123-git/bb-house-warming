import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Home } from 'lucide-react';
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
    { href: '#hero', label: content.nav.entrance },
    { href: '#invitation', label: content.nav.invitation },
    { href: '#rituals', label: content.nav.rituals },
    { href: '#features', label: content.nav.features },
    { href: '#journey', label: content.nav.journey },
    { href: '#gallery', label: currentLang === 'te' ? 'చిత్ర మాలిక' : 'Gallery' },
    { href: '#venue', label: content.nav.venue },
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
          ? 'bg-[#FAF6EE]/95 backdrop-blur-md shadow-md border-b border-[#DFB76C]/60 py-2.5'
          : 'bg-[#FAF6EE]/85 backdrop-blur-xs py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-[#782A15] font-bold text-base sm:text-lg font-telugu group"
        >
          <span className="p-1 rounded-lg bg-[#9C4129] text-[#DFB76C] shadow-2xs">
            <Home className="w-4 h-4" />
          </span>
          <span className="tracking-tight">{invitationData.venue.name[currentLang]}</span>
          <span className="text-xs text-[#D49B28] font-sans-en">
            • {invitationData.couple.groom.firstName} &amp; {invitationData.couple.bride.firstName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-bold text-[#542813] hover:text-[#9C4129] font-telugu transition-colors cursor-pointer"
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
            aria-label={isPlayingAudio ? 'సంగీతం నిశ్శబ్దం / Mute' : 'మంగళ వాయిద్యం / Play'}
            title={isPlayingAudio ? 'సంగీతం నిశ్శబ్దం / Mute' : 'మంగళ వాయిద్యం / Play'}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-[#9C4129] text-[#FAF6EE] border-[#DFB76C] animate-pulse'
                : 'bg-white text-[#782A15] border-[#DFB76C] hover:bg-[#EFE3D0]'
            }`}
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-[#DFB76C]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#782A15]" />
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
            className="lg:hidden p-2 rounded-full text-[#782A15] hover:bg-[#D49B28]/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] border-b border-[#DFB76C] px-4 py-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-lg text-xs sm:text-sm font-bold text-[#542813] hover:bg-[#EFE3D0] hover:text-[#9C4129] font-telugu transition-colors"
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
