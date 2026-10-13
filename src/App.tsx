import React, { useState, useRef, useEffect } from 'react';
import type { Language } from './data/invitation';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CeremonySection } from './components/CeremonySection';
import { HouseFeaturesSection } from './components/HouseFeaturesSection';
import { JourneySection } from './components/JourneySection';
import { GallerySection } from './components/GallerySection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleOpenDoor = () => {
    setIsDoorOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

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
    <div className="min-h-screen bg-[#FAF6EE] bg-house-warm flex flex-col text-[#381A0B] relative selection:bg-[#D49B28]/30 selection:text-[#782A15]">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/assets/audio/traditional-flute.mp3"
        loop
        preload="auto"
      />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#782A15] text-[#FAF6EE] px-4 py-2 rounded-lg font-bold"
      >
        Skip to housewarming content
      </a>

      {/* Simhadwaram Sacred Entrance Screen */}
      <OpeningScreen
        currentLang={currentLang}
        onOpen={handleOpenDoor}
        isOpen={isDoorOpen}
      />

      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
        onReopenDoor={() => setIsDoorOpen(false)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-6">
        <HeroSection currentLang={currentLang} />
        <InvitationSection currentLang={currentLang} />
        <CeremonySection currentLang={currentLang} />
        <HouseFeaturesSection currentLang={currentLang} />
        <JourneySection currentLang={currentLang} />
        <GallerySection currentLang={currentLang} />
        <VenueSection currentLang={currentLang} />
        <BlessingsSection currentLang={currentLang} />
      </main>
    </div>
  );
};

export default App;
