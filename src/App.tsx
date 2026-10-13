import React, { useState, useRef, useEffect } from 'react';
import type { Language } from './data/invitation';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CeremonySection } from './components/CeremonySection';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { BlessingsSection } from './components/BlessingsSection';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('te');
  const [isInvitationOpen, setIsInvitationOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Handle invitation opening
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Attempt audio play upon user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => {
          // Audio autoplay was prevented or muted by browser policy
          setIsPlayingAudio(false);
        });
    }
  };

  // Toggle audio
  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.volume = 0.35;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F0DE] bg-parchment flex flex-col text-[#33221A] relative selection:bg-[#D6A84F]/30 selection:text-[#751D2A]">
      {/* Background Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/audio/traditional-flute.mp3"
        loop
        preload="auto"
      />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#751D2A] text-[#F8F0DE] px-4 py-2 rounded-lg font-semibold"
      >
        Skip to invitation content
      </a>

      {/* Auspicious Opening Screen / Card Envelope */}
      <OpeningScreen
        currentLang={currentLang}
        onOpen={handleOpenInvitation}
        isOpen={isInvitationOpen}
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-6">
        <HeroSection currentLang={currentLang} />
        <InvitationSection currentLang={currentLang} />
        <CeremonySection currentLang={currentLang} />
        <VenueSection currentLang={currentLang} />
        <GallerySection currentLang={currentLang} />
        <BlessingsSection currentLang={currentLang} />
      </main>
    </div>
  );
};

export default App;
