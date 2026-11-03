import React, { useState, useEffect } from 'react';
import type { Language } from '../data/invitation';
import { storyboardContent } from '../data/invitation';

interface OpeningScreenProps {
  currentLang: Language;
  onOpen: () => void;
  isOpen: boolean;
}

/**
 * Ornate Hanging Brass Temple Bell for Left & Right Blank Flanks
 */
const HangingBrassBell: React.FC<{ direction?: 'left' | 'right'; className?: string }> = ({
  direction = 'left',
  className = '',
}) => {
  return (
    <div
      className={`origin-top pointer-events-none select-none filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.65)] ${
        direction === 'left' ? 'animate-bell-sway-left' : 'animate-bell-sway-right'
      } ${className}`}
    >
      <svg
        viewBox="0 0 56 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 sm:w-10 md:w-11 h-32 sm:h-40 md:h-44"
      >
        {/* Brass Chain Links from Top Ceiling */}
        <line x1="28" y1="0" x2="28" y2="108" stroke="#B59A66" strokeWidth="2.5" strokeDasharray="5 3" />
        <circle cx="28" cy="18" r="3.5" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />
        <circle cx="28" cy="42" r="4" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />
        <circle cx="28" cy="66" r="4.5" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />
        <circle cx="28" cy="90" r="5" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />
        <circle cx="28" cy="106" r="5.5" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />

        {/* Top Dome of Bell */}
        <path d="M18 112 C18 106 38 106 38 112 L36 122 L20 122 Z" fill="url(#bellGoldGradSide)" stroke="#8C6D23" strokeWidth="1" />

        {/* Bell Flaring Body */}
        <path
          d="M20 122 C20 138 11 154 9 164 C8 168 13 170 28 170 C43 170 48 168 47 164 C45 154 36 138 36 122 Z"
          fill="url(#bellGoldGradSide)"
          stroke="#8C6D23"
          strokeWidth="1.2"
        />

        {/* Bell Rim with Engraved Band */}
        <ellipse cx="28" cy="170" rx="19" ry="4.5" fill="#E6C36A" stroke="#8C6D23" strokeWidth="1.2" />
        <ellipse cx="28" cy="170" rx="14" ry="2.8" fill="#4A3410" />

        {/* Sacred Auspicious Motif on Bell */}
        <circle cx="28" cy="146" r="3.5" fill="#8C6D23" opacity="0.6" />
        <circle cx="28" cy="146" r="2" fill="#FDE047" opacity="0.9" />

        {/* Clapper and Dangling Bead */}
        <line x1="28" y1="168" x2="28" y2="186" stroke="#B59A66" strokeWidth="2.5" />
        <circle cx="28" cy="188" r="4.5" fill="url(#bellGoldGradSide)" stroke="#8C6D23" strokeWidth="1" />

        {/* Sacred red ribbon tip */}
        <path d="M26 192 L30 192 L29 200 L27 200 Z" fill="#DC2626" opacity="0.95" />

        <defs>
          <linearGradient id="bellGoldGradSide" x1="10" y1="110" x2="48" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.25" stopColor="#E6C36A" />
            <stop offset="0.6" stopColor="#B59A66" />
            <stop offset="1" stopColor="#785918" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

/**
 * Traditional Floor Diya with animated flickering flame and Urli flower bowl
 */
const FloorDiyaAndUrli: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = '',
}) => {
  return (
    <div
      className={`flex items-end gap-2 filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.75)] pointer-events-none select-none origin-bottom ${
        flip ? 'flex-row-reverse' : ''
      } ${className}`}
    >
      {/* Traditional Brass Diya */}
      <div className="relative flex flex-col items-center">
        {/* Soft Golden Ambient Light Halo around Flame */}
        <div className="absolute -top-5 w-12 h-12 rounded-full bg-radial from-[#F59E0B]/60 via-[#EAB308]/20 to-transparent blur-md pointer-events-none animate-pulse" />

        {/* Animated Diya Flame */}
        <svg
          viewBox="0 0 20 32"
          className="w-5 h-8 animate-diya origin-bottom filter drop-shadow-[0_0_8px_rgba(245,158,11,0.95)]"
        >
          <path
            d="M10 2 C10 2 17 12 17 22 C17 27 13.8 30 10 30 C6.2 30 3 27 3 22 C3 12 10 2 10 2 Z"
            fill="url(#diyaFlameOuterSide)"
          />
          <path
            d="M10 9 C10 9 14.5 16 14.5 23 C14.5 26.5 12.5 28.5 10 28.5 C7.5 28.5 5.5 26.5 5.5 23 C5.5 16 10 9 10 9 Z"
            fill="url(#diyaFlameInnerSide)"
          />
          <defs>
            <linearGradient id="diyaFlameOuterSide" x1="10" y1="2" x2="10" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF08A" />
              <stop offset="0.4" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="diyaFlameInnerSide" x1="10" y1="9" x2="10" y2="28.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.5" stopColor="#FEF08A" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Brass Lamp Basin and Pedestal */}
        <svg viewBox="0 0 46 34" className="w-10 h-7 -mt-1">
          <ellipse cx="23" cy="8" rx="19" ry="4.5" fill="#E6C36A" stroke="#8C6D23" strokeWidth="0.8" />
          <path
            d="M6 8 C8 19 16 23 23 23 C30 23 38 19 40 8 Z"
            fill="url(#diyaBaseGoldSide)"
            stroke="#8C6D23"
            strokeWidth="0.8"
          />
          <path d="M18 23 L16 29 L30 29 L28 23 Z" fill="#B59A66" />
          <ellipse cx="23" cy="29" rx="13" ry="3.5" fill="#D4AF37" stroke="#8C6D23" strokeWidth="0.8" />
          <defs>
            <linearGradient id="diyaBaseGoldSide" x1="6" y1="8" x2="40" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.45" stopColor="#B59A66" />
              <stop offset="1" stopColor="#6B4B15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mini Brass Urli with Floating Petals */}
      <div className="relative">
        <svg viewBox="0 0 58 30" className="w-12 h-6">
          <ellipse cx="29" cy="9" rx="26" ry="6.5" fill="#8C6D23" stroke="#D4AF37" strokeWidth="1" />
          <path
            d="M4 9 C6 20 15 26 29 26 C43 26 52 20 54 9 Z"
            fill="url(#miniUrliGoldSide)"
            stroke="#6B4B15"
            strokeWidth="1"
          />
          <ellipse cx="29" cy="26" rx="15" ry="3" fill="#B59A66" />
          {/* Water Surface */}
          <ellipse cx="29" cy="9" rx="23" ry="5" fill="#2E2820" />
          {/* Floating Petals */}
          <circle cx="22" cy="8.5" r="3.5" fill="#F59E0B" />
          <circle cx="30" cy="9.5" r="3.8" fill="#EF4444" />
          <circle cx="36" cy="8.5" r="3.2" fill="#FEF08A" />
          <circle cx="26" cy="7.5" r="2.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="miniUrliGoldSide" x1="4" y1="9" x2="54" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6C36A" />
              <stop offset="0.5" stopColor="#B59A66" />
              <stop offset="1" stopColor="#5A4015" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

/**
 * Auspicious Architectural Side Plaque Inscription for Left & Right Blank Flanks
 */
const AuspiciousSidePlaque: React.FC<{
  titleSanskrit: string;
  subtitleRegional: string;
  subtitleEnglish: string;
  className?: string;
}> = ({ titleSanskrit, subtitleRegional, subtitleEnglish, className = '' }) => {
  return (
    <div
      className={`flex flex-col items-center gap-1.5 py-4 px-2.5 rounded-full bg-black/45 backdrop-blur-md border border-[#B59A66]/40 shadow-[0_8px_24px_rgba(0,0,0,0.6)] pointer-events-none select-none ${className}`}
    >
      <span className="text-[#D4AF37] text-xs">❖</span>
      <span className="font-serif text-sm font-semibold tracking-wider text-[#FDE047] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
        {titleSanskrit}
      </span>
      <div className="w-4 h-[1px] bg-[#B59A66]/50 my-1" />
      <span
        className="font-serif-en text-[10px] tracking-widest text-[#F6F1E8]/85 uppercase font-medium"
        style={{ writingMode: 'vertical-rl' }}
      >
        {subtitleRegional} • {subtitleEnglish}
      </span>
      <div className="w-4 h-[1px] bg-[#B59A66]/50 my-1" />
      <span className="text-[#D4AF37] text-xs">❖</span>
    </div>
  );
};

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  currentLang,
  onOpen,
  isOpen,
}) => {
  const content = storyboardContent[currentLang].entrance;
  const [isAnimating, setIsAnimating] = useState(false);
  const [doorsSwung, setDoorsSwung] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

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

  // Interactive subtle mouse tracking for ambient golden spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating || doorsSwung) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
  };

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

  // Golden floating firefly particles along the screen
  const fireflies = [
    { left: '3%', top: '22%', delay: '0.2s', duration: '5.2s', size: 4 },
    { left: '7%', top: '48%', delay: '1.8s', duration: '6.4s', size: 3 },
    { left: '11%', top: '72%', delay: '0.7s', duration: '4.8s', size: 5 },
    { left: '5%', top: '85%', delay: '2.5s', duration: '5.6s', size: 4 },
    { left: '14%', top: '34%', delay: '3.1s', duration: '6.2s', size: 3 },
    { left: '9%', top: '16%', delay: '1.2s', duration: '5.1s', size: 4 },
    { left: '17%', top: '62%', delay: '2.8s', duration: '5.9s', size: 4 },
    { right: '3%', top: '24%', delay: '0.4s', duration: '5.4s', size: 4 },
    { right: '7%', top: '46%', delay: '1.6s', duration: '6.2s', size: 3 },
    { right: '11%', top: '70%', delay: '2.2s', duration: '5.0s', size: 5 },
    { right: '5%', top: '84%', delay: '0.9s', duration: '5.8s', size: 4 },
    { right: '14%', top: '36%', delay: '3.0s', duration: '6.5s', size: 3 },
    { right: '9%', top: '18%', delay: '1.3s', duration: '5.3s', size: 4 },
    { right: '17%', top: '60%', delay: '2.6s', duration: '5.7s', size: 4 },
  ];

  // Auspicious falling blossom petals
  const petals = [
    { left: '4%', delay: '0s', duration: '8.5s', color: '#F59E0B', size: 16 },
    { left: '9%', delay: '3s', duration: '10.5s', color: '#FFFBEB', size: 14 },
    { left: '13%', delay: '1.5s', duration: '8s', color: '#EA580C', size: 18 },
    { left: '17%', delay: '5s', duration: '9.5s', color: '#FEF08A', size: 15 },
    { left: '6%', delay: '7s', duration: '11.5s', color: '#FFFBEB', size: 13 },
    { right: '4%', delay: '1s', duration: '9s', color: '#F59E0B', size: 16 },
    { right: '9%', delay: '4s', duration: '11s', color: '#FFFBEB', size: 14 },
    { right: '13%', delay: '2s', duration: '8.2s', color: '#EA580C', size: 18 },
    { right: '17%', delay: '6s', duration: '10s', color: '#FEF08A', size: 15 },
    { right: '6%', delay: '8s', duration: '12s', color: '#FFFBEB', size: 13 },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Housewarming Entrance Doors"
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-radial from-[#2C2A27] via-[#1E1C1A] to-[#121110] select-none transition-opacity duration-700 ${
        isAnimating && doorsSwung ? 'pointer-events-none' : ''
      } ${doorsSwung && isAnimating ? 'opacity-90' : 'opacity-100'}`}
      style={{
        opacity: fadeComplete ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* ================= FULLSCREEN EXTENDED ARCHITECTURAL BACKDROP ================= */}
      {/* Eliminates blank black side/vertical areas and seamlessly continues the scene */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <img
          src="/assets/images/4k/entrance_frame_4k.png"
          alt=""
          className="w-full h-full object-cover scale-110 filter blur-2xl brightness-60 contrast-125 opacity-75"
        />
        {/* Soft vignette gradient over the backdrop */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#141312]/60 to-[#0A0908]/90" />
      </div>

      {/* ================= INTERACTIVE AMBIENT GOLDEN SPOTLIGHT ================= */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 420px at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.12) 0%, rgba(181, 154, 102, 0.04) 50%, transparent 80%)`,
          opacity: doorsSwung ? 0 : 1,
        }}
      />

      {/* ================= AMBIENT PARTICLES (FIREFLIES & PETALS) ================= */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          doorsSwung ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Floating Golden Fireflies / Embers */}
        {fireflies.map((ff, idx) => (
          <div
            key={`ff-${idx}`}
            className="absolute rounded-full bg-[#F59E0B] animate-firefly pointer-events-none"
            style={{
              left: ff.left,
              right: ff.right,
              top: ff.top,
              width: `${ff.size}px`,
              height: `${ff.size}px`,
              animationDelay: ff.delay,
              animationDuration: ff.duration,
              boxShadow:
                '0 0 10px 3px rgba(245, 158, 11, 0.85), 0 0 20px 6px rgba(217, 119, 6, 0.45)',
            }}
          />
        ))}

        {/* Auspicious Falling Blossom Petals */}
        {petals.map((petal, idx) => (
          <div
            key={`petal-${idx}`}
            className="absolute pointer-events-none animate-petal"
            style={{
              left: petal.left,
              right: petal.right,
              top: 0,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill={petal.color}
              className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              <path
                d="M12 2 C16 6 22 12 20 18 C18 22 14 22 12 22 C10 22 6 22 4 18 C2 12 8 6 12 2 Z"
                opacity="0.88"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* ================= ENTRANCE STAGE & SIDE WINGS ================= */}
      <div className="relative z-10 flex items-center justify-center w-full h-full max-h-[100dvh]">
        {/* ================= LEFT WING: LOCATED IN THE LEFT BLANK SPACE OUTSIDE THE FRAME ================= */}
        <div
          className={`hidden md:flex flex-col items-center justify-between h-full py-6 px-3 z-20 pointer-events-none select-none flex-1 max-w-[220px] transition-opacity duration-700 ${
            doorsSwung ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Top: Hanging Brass Bell */}
          <div className="pt-2">
            <HangingBrassBell direction="left" />
          </div>

          {/* Middle: Warm Sconce Light & Auspicious Blessings Plaque */}
          <div className="relative flex flex-col items-center my-auto py-4">
            <div className="absolute inset-0 w-16 -left-3 bg-gradient-to-b from-[#F59E0B]/25 via-[#F59E0B]/10 to-transparent blur-md rounded-full pointer-events-none animate-sconce-breathe" />
            <AuspiciousSidePlaque
              titleSanskrit="॥ शुभ ॥"
              subtitleRegional="ಆಶೀರ್ವಾದ"
              subtitleEnglish="BLESSINGS"
            />
          </div>

          {/* Bottom: Floor Diya with Flickering Flame & Flower Urli */}
          <div className="pb-4">
            <FloorDiyaAndUrli flip={false} />
          </div>
        </div>

        {/* ================= CENTER: EXACT 16:9 ENTRANCE STAGE ================= */}
        {/* The entrance frame in the center remains 100% clean and unobstructed */}
        <div
          className="relative flex-none flex items-center justify-center shadow-2xl overflow-hidden"
          style={{
            aspectRatio: '16 / 9',
            height: 'min(100dvh, calc(100vw * (9 / 16)))',
            maxHeight: '100dvh',
            maxWidth: 'calc(100dvh * (16 / 9))',
          }}
        >
          {/* ================= LAYER 0: DARK DOORWAY THRESHOLD CAVITY ================= */}
          <div
            className="absolute z-0 bg-[#1A1816]"
            style={{
              left: '24.12%',
              top: '17.01%',
              width: '51.56%',
              height: '69.44%',
            }}
          />

          {/* ================= LAYER 1: SUNLIT COURTYARD (BEHIND DOORS) ================= */}
          <div
            className="absolute z-1 overflow-hidden"
            style={{
              left: '24.12%',
              top: '17.01%',
              width: '51.56%',
              height: '69.44%',
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
              left: '24.12%',
              top: '17.01%',
              width: '51.56%',
              height: '69.44%',
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
          {/* Responsively scaled so it fits cleanly inside the doors on mobile, tablet & desktop */}
          <div
            className={`absolute z-30 flex flex-col items-center justify-center text-center px-2 sm:px-4 transition-all duration-400 ${
              isAnimating ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
            style={{
              left: '24.12%',
              top: '17.01%',
              width: '51.56%',
              height: '69.44%',
            }}
          >
            {/* Soft sacred warm ambient glow behind typography */}
            <div
              className="absolute inset-0 -z-10 rounded-full blur-xl sm:blur-2xl opacity-40 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(184, 108, 60, 0.2) 50%, transparent 80%)',
              }}
            />
            {/* Dynamic Heading based on active language */}
            <h1
              className={`${
                currentLang === 'kn'
                  ? 'font-kannada'
                  : currentLang === 'te'
                  ? 'font-telugu'
                  : 'font-display'
              } text-base sm:text-2xl md:text-4xl lg:text-5xl text-[#F6F1E8] font-normal leading-tight tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}
            >
              {content.heading.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < content.heading.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Dynamic Subheading matching selected language */}
            <p
              className={`${
                currentLang === 'kn'
                  ? 'font-kannada'
                  : currentLang === 'te'
                  ? 'font-telugu'
                  : 'font-sans'
              } text-[10px] sm:text-xs md:text-base lg:text-lg text-[#F9F6EF]/95 font-medium mt-1 sm:mt-2 md:mt-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}
            >
              {content.subheading}
            </p>

            {/* Subtle brass divider with ornament */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-1.5 sm:my-3 md:my-4 w-24 sm:w-36 md:w-44 opacity-85">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B59A66]" />
              <span className="text-[#B59A66] text-[10px] sm:text-xs">❖</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B59A66]" />
            </div>

            {/* Prominent Ivory Pill Button: OPEN THE DOOR → */}
            <button
              id="open-the-door-btn"
              onClick={handleOpenClick}
              disabled={isAnimating || doorsSwung}
              className={`group cursor-pointer bg-[#F6F1E8] hover:bg-white text-[#482B19] active:scale-95 ${
                currentLang === 'kn'
                  ? 'font-kannada'
                  : currentLang === 'te'
                  ? 'font-telugu'
                  : 'font-sans'
              } font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase px-4 sm:px-6 md:px-8 py-1.5 sm:py-2.5 md:py-3.5 rounded-full border border-[#B59A66]/50 shadow-[0_4px_16px_rgba(72,43,25,0.35)] hover:shadow-[0_6px_22px_rgba(184,108,60,0.45)] hover:border-[#B59A66] transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 hover:ring-2 hover:ring-[#B59A66]/40`}
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

        {/* ================= RIGHT WING: LOCATED IN THE RIGHT BLANK SPACE OUTSIDE THE FRAME ================= */}
        <div
          className={`hidden md:flex flex-col items-center justify-between h-full py-6 px-3 z-20 pointer-events-none select-none flex-1 max-w-[220px] transition-opacity duration-700 ${
            doorsSwung ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Top: Hanging Brass Bell */}
          <div className="pt-2">
            <HangingBrassBell direction="right" />
          </div>

          {/* Middle: Warm Sconce Light & Auspicious Prosperity Plaque */}
          <div className="relative flex flex-col items-center my-auto py-4">
            <div className="absolute inset-0 w-16 -left-3 bg-gradient-to-b from-[#F59E0B]/25 via-[#F59E0B]/10 to-transparent blur-md rounded-full pointer-events-none animate-sconce-breathe" />
            <AuspiciousSidePlaque
              titleSanskrit="॥ लाभ ॥"
              subtitleRegional="ಸಮೃದ್ಧಿ"
              subtitleEnglish="PROSPERITY"
            />
          </div>

          {/* Bottom: Floor Diya with Flickering Flame & Flower Urli */}
          <div className="pb-4">
            <FloorDiyaAndUrli flip={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
