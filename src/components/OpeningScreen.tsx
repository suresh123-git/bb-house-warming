import React, { useState } from 'react';
import { Bell, Sparkles, Home, ArrowRight } from 'lucide-react';
import { BrassDiya, ToranamBanner } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

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
  const content = uiContent[currentLang];
  const { couple, eventDate } = invitationData;
  const [isOpening, setIsOpening] = useState(false);
  const [bellRinging, setBellRinging] = useState(false);

  const handleRingAndEnter = () => {
    setBellRinging(true);
    setIsOpening(true);

    // Audio chime bell synthesis using Web Audio API (instant, no external file needed)
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High pitch bell A5
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.4);
    } catch {
      // Audio fallback
    }

    setTimeout(() => {
      onOpen();
    }, 700);
  };

  if (isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Simhadwaram Auspicious Doorway"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B140B]/90 backdrop-blur-md overflow-y-auto transition-opacity duration-700 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Toranam */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <ToranamBanner />
      </div>

      {/* Main Door Presentation Card */}
      <div className="relative w-full max-w-xl my-auto rounded-3xl bg-[#FAF6EE] border-3 border-[#DFB76C] shadow-2xl overflow-hidden">
        {/* Sacred Header Bar */}
        <div className="bg-gradient-to-r from-[#782A15] via-[#9C4129] to-[#782A15] text-[#FAF6EE] px-4 py-3 text-center border-b border-[#DFB76C]">
          <p className="text-xs sm:text-sm font-semibold tracking-wider font-telugu">
            {content.omGanesh}
          </p>
          <p className="text-[11px] text-[#DFB76C] italic font-telugu mt-0.5">
            {content.subInvocation}
          </p>
        </div>

        {/* Simhadwaram Image Showcase */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-[#381A0B]">
          <img
            src="/assets/images/simhadwaram.jpg"
            alt="Traditional South Indian carved teak Simhadwaram entrance door decorated with mango leaves, marigolds, bells and oil lamps"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            loading="eager"
          />

          {/* Golden Ambient Overlay with Auspicious Threshold Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B140B] via-[#2B140B]/30 to-transparent flex flex-col justify-end p-5 sm:p-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28] text-[#381A0B] text-xs font-bold w-fit mb-2 shadow-md">
              <Home className="w-3.5 h-3.5" />
              <span>{content.doorScreen.tag}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white font-telugu drop-shadow-md">
              {content.doorScreen.mainHeading}
            </h1>
            <p className="text-sm sm:text-base text-[#DFB76C] font-telugu font-medium drop-shadow-xs">
              {content.doorScreen.subHeading}
            </p>
          </div>
        </div>

        {/* Card Body & Interactive Door Opening */}
        <div className="p-6 sm:p-8 text-center bg-[#FAF6EE]">
          {/* Confirmed Date */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C4129]/10 text-[#782A15] border border-[#9C4129]/30 text-xs sm:text-sm font-bold font-telugu mb-4">
            <span>📅 {eventDate.fullDate[currentLang]} ({eventDate.dayOfWeek[currentLang]})</span>
          </div>

          <p className="text-xs sm:text-sm text-[#542813] max-w-md mx-auto leading-relaxed mb-6 font-telugu">
            {content.doorScreen.instruction}
          </p>

          {/* Diya icons flanking the button */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <BrassDiya size={32} />

            <button
              type="button"
              onClick={handleRingAndEnter}
              autoFocus
              className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#9C4129] via-[#782A15] to-[#9C4129] text-[#FAF6EE] font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#DFB76C] cursor-pointer"
            >
              <Bell
                className={`w-5 h-5 text-[#DFB76C] ${
                  bellRinging ? 'animate-bell-ring' : 'group-hover:rotate-12'
                } transition-transform`}
              />
              <span className="font-telugu">{content.doorScreen.enterBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#DFB76C] group-hover:translate-x-1 transition-transform" />
            </button>

            <BrassDiya size={32} />
          </div>

          {/* Homeowners credit */}
          <div className="mt-6 pt-4 border-t border-[#DFB76C]/40 text-xs text-[#542813]/70 font-telugu flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B28]" />
            <span>{couple.homeownersHeadline[currentLang]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
