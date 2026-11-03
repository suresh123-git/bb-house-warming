import React, { useState, useEffect } from 'react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface OpeningScreenProps {
  currentLang: Language;
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  currentLang,
  onOpen,
  isOpen,
}) => {
  const content = storyboardContent[currentLang].entrance;
  const [isAnimating, setIsAnimating] = useState(false);
  const [doorsSwung, setDoorsSwung] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);

  // If already opened previously and not animating, unmount
  useEffect(() => {
    if (isOpen && !isAnimating) {
      setFadeComplete(true);
    } else if (!isOpen) {
      setFadeComplete(false);
      setDoorsSwung(false);
      setIsAnimating(false);
    }
  }, [isOpen, isAnimating]);

  // Keyboard accessibility: Enter or Space to open the doors
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen && !isAnimating && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleOpenClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isAnimating]);

  if (fadeComplete) {
    return null;
  }

  const handleOpenClick = () => {
    if (isAnimating || doorsSwung) return;
    setIsAnimating(true);

    // Trigger door swing inward after brief text fade
    setTimeout(() => {
      setDoorsSwung(true);
    }, 200);

    // Complete transition and notify parent
    setTimeout(() => {
      onOpen();
    }, 1450);

    setTimeout(() => {
      setFadeComplete(true);
      setIsAnimating(false);
    }, 2100);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Housewarming Entrance Doors"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-radial from-[#F7F1E6] via-[#EFE6D6] to-[#E5DAC6] select-none transition-opacity duration-700 ${
        isAnimating && doorsSwung ? 'pointer-events-none' : ''
      } ${doorsSwung && isAnimating ? 'opacity-90' : 'opacity-100'}`}
      style={{
        opacity: fadeComplete ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* 4K Aspect-ratio constrained Stage matching Panel 1 composition (1200x896 = 4:3) */}
      <div className="relative w-full h-full max-w-[1350px] max-h-[100vh] flex items-center justify-center shadow-2xl">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            aspectRatio: '1200 / 896',
            maxHeight: '100vh',
            maxWidth: 'calc(100vh * (1200 / 896))',
          }}
        >
          {/* ================= LAYER 0: DARK DOORWAY THRESHOLD CAVITY ================= */}
          <div
            className="absolute z-0 bg-[#2A1408]"
            style={{
              left: '24.5%',
              top: '12.8%',
              width: '51.0%',
              height: '70.3%',
            }}
          />

          {/* ================= LAYER 1: SUNLIT COURTYARD (BEHIND DOORS) ================= */}
          <div
            className="absolute z-1 overflow-hidden"
            style={{
              left: '24.5%',
              top: '12.8%',
              width: '51.0%',
              height: '70.3%',
            }}
          >
            {/* The 4K sunlit courtyard photograph revealed upon opening */}
            <img
              src="/assets/images/4k/courtyard_door_fit_4k.jpg"
              alt="Sunlit courtyard"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                doorsSwung ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Warm sunlight burst / ray expansion effect as doors swing open */}
            <div
              className={`absolute inset-0 bg-radial from-[#FFF3D6] via-[#F8DE9E]/40 to-transparent mix-blend-screen transition-opacity duration-1000 ${
                doorsSwung ? 'opacity-80 scale-110' : 'opacity-0 scale-90'
              }`}
            />
          </div>

          {/* ================= LAYER 2: 3D MOVABLE 4K DOOR PANELS ================= */}
          <div
            className="absolute z-10 flex"
            style={{
              left: '24.5%',
              top: '12.8%',
              width: '51.0%',
              height: '70.3%',
              perspective: '1400px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* LEFT 4K DOOR PANEL */}
            <div
              className="w-1/2 h-full relative"
              style={{
                transformOrigin: 'left center',
                transform: doorsSwung ? 'rotateY(-105deg)' : 'rotateY(0deg)',
                transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.4, 1)',
                transformStyle: 'preserve-3d',
                boxShadow: doorsSwung
                  ? '-20px 0 35px rgba(0, 0, 0, 0.65)'
                  : 'none',
              }}
            >
              <img
                src="/assets/images/4k/door_leaf_left_4k.jpg"
                alt="Left Door"
                className="w-full h-full object-fill pointer-events-none"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none transition-opacity duration-1000"
                style={{ opacity: doorsSwung ? 0.6 : 0 }}
              />
            </div>

            {/* RIGHT 4K DOOR PANEL */}
            <div
              className="w-1/2 h-full relative"
              style={{
                transformOrigin: 'right center',
                transform: doorsSwung ? 'rotateY(105deg)' : 'rotateY(0deg)',
                transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.4, 1)',
                transformStyle: 'preserve-3d',
                boxShadow: doorsSwung
                  ? '20px 0 35px rgba(0, 0, 0, 0.65)'
                  : 'none',
              }}
            >
              <img
                src="/assets/images/4k/door_leaf_right_4k.jpg"
                alt="Right Door"
                className="w-full h-full object-fill pointer-events-none"
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none transition-opacity duration-1000"
                style={{ opacity: doorsSwung ? 0.6 : 0 }}
              />
            </div>
          </div>

          {/* ================= LAYER 3: 4K FRAME & SURROUND (LANTERNS, PLANTS, RANGOLI, URLIS) ================= */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <img
              src="/assets/images/4k/entrance_frame_4k.png"
              alt="Entrance Frame"
              className="w-full h-full object-fill"
            />
          </div>

          {/* ================= LAYER 4: CENTERED TYPOGRAPHY & INTERACTIVE BUTTON ================= */}
          <div
            className={`absolute z-30 flex flex-col items-center justify-center text-center px-4 transition-all duration-400 ${
              isAnimating ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
            style={{
              left: '24.5%',
              top: '20%',
              width: '51.0%',
              height: '52%',
            }}
          >
            {/* Dynamic Heading based on active language */}
            <h1 className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-display'} text-3xl sm:text-4xl md:text-5xl text-[#F6F1E8] font-normal leading-tight tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}>
              {content.heading.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < content.heading.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Dynamic Subheading matching selected language */}
            <p className={`${currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'} text-base sm:text-lg md:text-xl text-[#F9F6EF]/95 font-medium mt-3 md:mt-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}>
              {content.subheading}
            </p>

            {/* Subtle brass divider with ornament */}
            <div className="flex items-center justify-center gap-2 my-4 md:my-5 w-44 opacity-85">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B59A66]" />
              <span className="text-[#B59A66] text-xs">❖</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B59A66]" />
            </div>

            {/* Prominent Ivory Pill Button: OPEN THE DOOR → */}
            <button
              id="open-the-door-btn"
              onClick={handleOpenClick}
              disabled={isAnimating || doorsSwung}
              className={`group cursor-pointer bg-[#F6F1E8] hover:bg-white text-[#482B19] active:scale-95 ${
                currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'
              } font-semibold text-xs sm:text-sm tracking-widest uppercase px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.45)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center gap-2.5 mt-2 hover:ring-2 hover:ring-[#B59A66]/50`}
              aria-label={
                currentLang === 'kn'
                  ? 'ಗೃಹಪ್ರವೇಶ ಆಹ್ವಾನವನ್ನು ವೀಕ್ಷಿಸಲು ಬಾಗಿಲು ತೆರೆಯಿರಿ'
                  : currentLang === 'te'
                  ? 'గృహప్రవేశ ఆహ్వానంలోకి ప్రవేశించండి'
                  : 'Open the door to enter house warming invitation'
              }
            >
              <span>{content.openBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
