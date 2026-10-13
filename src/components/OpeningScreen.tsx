import React, { useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
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
  const [isCompletelyOpen, setIsCompletelyOpen] = useState(false);

  if (isOpen && isCompletelyOpen) {
    return null;
  }

  const handleRingAndOpen = () => {
    if (isOpening) return;
    setBellRinging(true);
    setIsOpening(true);

    // Auspicious temple bell chime synthesis
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High resonant chime A5
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.45, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.5);
    } catch {
      // Audio fallback
    }

    setTimeout(() => {
      onOpen();
    }, 600);

    setTimeout(() => {
      setIsCompletelyOpen(true);
    }, 1800);
  };

  return (
    <div
      role="region"
      aria-label="Simhadwaram Doorway"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden simhadwaram-viewport bg-[#1a0c06] select-none transition-opacity duration-700 ${
        isOpening && isOpen ? 'pointer-events-none' : ''
      } ${isCompletelyOpen ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Background golden light burst behind doors when opening */}
      {isOpening && (
        <div className="absolute inset-0 bg-gradient-radial from-[#F5D98B] via-[#DFB76C]/40 to-transparent z-0 animate-golden-burst" />
      )}

      {/* Top Lintel & Mango Toranam */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <ToranamBanner />
        {/* Ornate Arch Header */}
        <div className="bg-gradient-to-r from-[#401b0d] via-[#782A15] to-[#401b0d] border-b-2 border-[#DFB76C] py-2 px-4 text-center shadow-lg">
          <p className="text-xs sm:text-sm font-bold text-[#DFB76C] font-telugu tracking-widest">
            {content.omGanesh}
          </p>
          <p className="text-[10px] sm:text-xs text-[#FAF6EE]/80 italic mt-0.5 font-telugu">
            {content.subInvocation}
          </p>
        </div>
      </div>

      {/* ================= LEFT DOOR LEAF ================= */}
      <div
        className={`door-leaf door-leaf-left absolute top-0 left-0 w-1/2 h-full z-20 border-r-2 border-[#1f0c05] flex flex-col justify-between p-4 sm:p-8 shadow-2xl ${
          isOpening ? 'door-open-left' : ''
        }`}
        style={{
          backgroundImage: "linear-gradient(rgba(26, 11, 5, 0.4), rgba(26, 11, 5, 0.6)), url('/assets/images/simhadwaram.jpg')",
          backgroundSize: '200% 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left top carved details */}
        <div className="pt-24 sm:pt-28">
          <div className="w-full max-w-[260px] mx-auto rounded-xl p-3 bg-[#240e06]/85 border-2 border-[#DFB76C]/80 shadow-2xl backdrop-blur-xs">
            <div className="flex justify-between items-center px-2 py-0.5">
              <span className="text-[#DFB76C] text-xs">❖</span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#DFB76C] font-telugu">
                {currentLang === 'te' ? 'శుభ ప్రవేశం' : 'Auspicious Entrance'}
              </span>
              <span className="text-[#DFB76C] text-xs">❖</span>
            </div>
            {/* Carved relief motif */}
            <div className="h-24 sm:h-36 rounded-lg bg-[#1a0904]/80 border border-[#DFB76C]/40 flex flex-col items-center justify-center p-2 text-center mt-1">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#DFB76C] p-1 flex items-center justify-center bg-[#421a0d] shadow-md mb-1">
                <span className="text-xl sm:text-3xl" role="img" aria-label="Goddess Lakshmi">🪷</span>
              </div>
              <p className="text-xs font-bold text-[#DFB76C] font-telugu">
                {currentLang === 'te' ? 'శ్రీ గృహలక్ష్మీ ప్రసన్న' : 'Sri Griha Lakshmi'}
              </p>
              <p className="text-[10px] text-[#FAF6EE]/70 italic font-telugu">
                {currentLang === 'te' ? 'సమృద్ధి & శాంతి' : 'Abundance & Peace'}
              </p>
            </div>
          </div>
        </div>

        {/* Left brass latch bar & lotus studs */}
        <div className="my-auto flex flex-col items-end pr-1 sm:pr-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#DFB76C] border-2 border-[#782A15] shadow-lg flex items-center justify-center text-[10px] text-[#542813]">
              ✦
            </div>
            <div className="w-14 sm:w-24 h-4 rounded-l-md bg-gradient-to-r from-[#B77B27] to-[#DFB76C] border-y border-l border-[#542813] shadow-md" />
          </div>
        </div>

        {/* Left Bottom corner decorative stud */}
        <div className="pb-16 sm:pb-20 pl-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#DFB76C] border-2 border-[#782A15] shadow-lg flex items-center justify-center text-[10px] text-[#542813]">
            ✦
          </div>
        </div>
      </div>

      {/* ================= RIGHT DOOR LEAF ================= */}
      <div
        className={`door-leaf door-leaf-right absolute top-0 right-0 w-1/2 h-full z-20 border-l-2 border-[#1f0c05] flex flex-col justify-between p-4 sm:p-8 shadow-2xl ${
          isOpening ? 'door-open-right' : ''
        }`}
        style={{
          backgroundImage: "linear-gradient(rgba(26, 11, 5, 0.4), rgba(26, 11, 5, 0.6)), url('/assets/images/simhadwaram.jpg')",
          backgroundSize: '200% 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Right top carved details */}
        <div className="pt-24 sm:pt-28">
          <div className="w-full max-w-[260px] mx-auto rounded-xl p-3 bg-[#240e06]/85 border-2 border-[#DFB76C]/80 shadow-2xl backdrop-blur-xs">
            <div className="flex justify-between items-center px-2 py-0.5">
              <span className="text-[#DFB76C] text-xs">❖</span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#DFB76C] font-telugu">
                {currentLang === 'te' ? 'సింహద్వారం' : 'Sri Nilayam'}
              </span>
              <span className="text-[#DFB76C] text-xs">❖</span>
            </div>
            {/* Carved relief motif */}
            <div className="h-24 sm:h-36 rounded-lg bg-[#1a0904]/80 border border-[#DFB76C]/40 flex flex-col items-center justify-center p-2 text-center mt-1">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#DFB76C] p-1 flex items-center justify-center bg-[#421a0d] shadow-md mb-1">
                <span className="text-xl sm:text-3xl" role="img" aria-label="Lord Ganesha">🐘</span>
              </div>
              <p className="text-xs font-bold text-[#DFB76C] font-telugu">
                {currentLang === 'te' ? 'శ్రీ విఘ్నేశ్వర ప్రసన్న' : 'Lord Vigneshwara'}
              </p>
              <p className="text-[10px] text-[#FAF6EE]/70 italic font-telugu">
                {currentLang === 'te' ? 'అవిఘ్నమస్తు' : 'Divine Protection'}
              </p>
            </div>
          </div>
        </div>

        {/* Right brass latch bar & lotus studs */}
        <div className="my-auto flex flex-col items-start pl-1 sm:pl-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-14 sm:w-24 h-4 rounded-r-md bg-gradient-to-l from-[#B77B27] to-[#DFB76C] border-y border-r border-[#542813] shadow-md" />
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#DFB76C] border-2 border-[#782A15] shadow-lg flex items-center justify-center text-[10px] text-[#542813]">
              ✦
            </div>
          </div>
        </div>

        {/* Right Bottom corner decorative stud */}
        <div className="pb-16 sm:pb-20 pr-2 flex justify-end">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#DFB76C] border-2 border-[#782A15] shadow-lg flex items-center justify-center text-[10px] text-[#542813]">
            ✦
          </div>
        </div>
      </div>

      {/* ================= CENTER DOOR LATCH & INTERACTIVE KNOCKER ================= */}
      <div
        className={`absolute z-30 flex flex-col items-center justify-center px-4 max-w-sm sm:max-w-md w-full text-center transition-all duration-700 ${
          isOpening ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        {/* Sacred Auspicious Plate */}
        <div className="rounded-2xl p-5 sm:p-7 bg-[#240e06]/95 border-2 border-[#DFB76C] shadow-2xl backdrop-blur-md">
          {/* Top small icon */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#DFB76C] text-sm">✦</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DFB76C]">
              {currentLang === 'te' ? 'గృహప్రవేశ ఆహ్వానం' : 'Housewarming Invitation'}
            </span>
            <span className="text-[#DFB76C] text-sm">✦</span>
          </div>

          {/* Couple's Names */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-serif-en mb-0.5">
            {couple.groom.firstName} &amp; {couple.bride.firstName}
          </h1>

          <p className="text-xs text-[#DFB76C] font-telugu font-semibold">
            {currentLang === 'te' ? 'నూతన గృహస్థులు' : 'New Homeowners'} • Sri Nilayam
          </p>

          <div className="my-3 py-1.5 px-3.5 rounded-full bg-[#782A15] text-[#FAF6EE] text-[11px] sm:text-xs font-bold inline-block border border-[#DFB76C]/60 shadow-xs">
            📅 {eventDate.fullDate[currentLang]} ({eventDate.dayOfWeek[currentLang]})
          </div>

          <p className="text-xs text-[#FAF6EE]/85 leading-relaxed font-telugu mb-5">
            {currentLang === 'te'
              ? 'గంట మోగించి సింహద్వారం తెరిచి మా నూతన గృహంలోకి అడుగిడండి...'
              : 'Ring the temple bell and open the sacred doorway to step into our new home...'}
          </p>

          {/* MAIN OPEN DOOR BUTTON / BELL KNOCKER */}
          <div className="flex items-center justify-center gap-3">
            <BrassDiya size={24} />

            <button
              type="button"
              onClick={handleRingAndOpen}
              autoFocus
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D49B28] via-[#DFB76C] to-[#D49B28] text-[#381A0B] font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#782A15] cursor-pointer"
            >
              <Bell
                className={`w-5 h-5 text-[#782A15] ${
                  bellRinging ? 'animate-bell-ring' : 'group-hover:rotate-12'
                } transition-transform`}
              />
              <span className={currentLang === 'te' ? 'font-telugu' : 'font-sans-en font-bold'}>
                {currentLang === 'te' ? 'సింహద్వారం తెరవండి 🔔' : 'Ring Bell & Open Door 🔔'}
              </span>
              <ArrowRight className="w-4 h-4 text-[#782A15] group-hover:translate-x-1 transition-transform" />
            </button>

            <BrassDiya size={24} />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SACRED THRESHOLD (గడప) ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* Turmeric & Kumkum Yellow Step */}
        <div className="h-6 sm:h-8 w-full bg-gradient-to-r from-[#B77B27] via-[#D49B28] to-[#B77B27] border-t-2 border-[#DFB76C] flex items-center justify-around px-4 shadow-md">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#782A15] shadow-2xs" />
              <span className="text-[#782A15] text-[10px] font-bold">卐</span>
            </div>
          ))}
        </div>

        {/* Floor Rangoli & Brass Diyas */}
        <div className="bg-[#FAF6EE] py-2 px-6 flex items-center justify-between border-t border-[#DFB76C]/60 shadow-lg">
          <BrassDiya size={28} />
          <div className="text-center font-telugu text-[11px] text-[#782A15] font-bold">
            {currentLang === 'te'
              ? '॥ శుభం భవతు • సుస్వాగతం ॥'
              : '|| Shubham Bhavatu • Cordial Welcome ||'}
          </div>
          <BrassDiya size={28} />
        </div>
      </div>
    </div>
  );
};
