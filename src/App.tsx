import React, { useState, useRef, useEffect } from 'react';
import type { Language } from './data/invitation';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { LocationSection } from './components/LocationSection';
import { InvitationMessageSection } from './components/InvitationMessageSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  // English is default across the entire application as requested
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
      audioRef.current.volume = 0.3;
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
      audioRef.current.volume = 0.3;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex flex-col text-[#482B19] relative selection:bg-[#B59A66]/30 selection:text-[#482B19]">
      {/* Background traditional flute audio */}
      <audio
        ref={audioRef}
        src="/assets/audio/traditional-flute.mp3"
        loop
        preload="auto"
      />

      {/* Screen 1 & 2: Fullscreen Entrance & Interactive 3D Door Swing Animation */}
      <OpeningScreen
        currentLang={currentLang}
        onOpen={handleOpenDoor}
        isOpen={isDoorOpen}
      />

      {/* Screen 3: Invitation Reveal and Main Website */}
      <div className={`flex flex-col flex-1 w-full transition-opacity duration-1000 ${isDoorOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Bar matching Panel 3 */}
        <Navbar
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={handleToggleAudio}
          onReopenDoor={() => setIsDoorOpen(false)}
        />

        {/* Main Sections in Exact Reference Order */}
        <main id="main-content" className="flex-1 w-full">
          {/* Section A: Hero (Panel 3) */}
          <HeroSection currentLang={currentLang} />

          {/* Section B: Our Story (Panel 4) */}
          <OurStorySection currentLang={currentLang} />

          {/* Section C: Event Details (Panel 5) */}
          <EventDetailsSection currentLang={currentLang} />

          {/* Section D: Location (Panel 6) */}
          <LocationSection currentLang={currentLang} />

          {/* Section E: Invitation Message (Panel 7) */}
          <InvitationMessageSection currentLang={currentLang} />
        </main>

        {/* Section F: Footer (Section 4.F) */}
        <FooterSection currentLang={currentLang} />
      </div>
    </div>
  );
};

export default App;
