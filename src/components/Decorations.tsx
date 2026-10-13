import React from 'react';

/**
 * Hanging Mango Leaf Toranam Banner
 * Features authentic South Indian mango leaf silhouettes and marigold (genda phool) blossoms.
 */
export const ToranamBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none relative ${className}`} aria-hidden="true">
      <div className="flex justify-between items-start w-full px-1 sm:px-4 py-0 min-w-[320px]">
        {Array.from({ length: 14 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center flex-1 origin-top animate-leaf-sway"
            style={{ animationDelay: `${(idx % 5) * 0.4}s` }}
          >
            {/* Top hanging thread / marigold bead */}
            <div className="w-2 h-2 rounded-full bg-[#B77B27] border border-[#D6A84F] shadow-xs" />
            
            {/* Mango Leaf SVG */}
            <svg
              viewBox="0 0 24 64"
              className="w-5 sm:w-7 md:w-8 h-12 sm:h-14 md:h-16 text-[#386347] -mt-0.5 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
              fill="currentColor"
            >
              {/* Leaf Blade */}
              <path
                d="M12 0 C13 8 20 18 20 38 C20 54 13 62 12 64 C11 62 4 54 4 38 C4 18 11 8 12 0 Z"
                fill="#386347"
              />
              {/* Leaf Stem & Vein */}
              <path
                d="M12 0 L12 62"
                stroke="#254631"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              <path
                d="M12 20 Q16 16 18 17 M12 30 Q17 26 19 28 M12 40 Q16 37 18 39 M12 20 Q8 16 6 17 M12 30 Q7 26 5 28 M12 40 Q8 37 6 39"
                stroke="#4C805E"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
              {/* Golden auspicious tip */}
              <circle cx="12" cy="62" r="1.5" fill="#D6A84F" />
            </svg>

            {/* Marigold blossom node on alternating leaves */}
            {idx % 2 === 0 && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6A84F] border border-[#B77B27] -mt-1 shadow-xs" />
            )}
          </div>
        ))}
      </div>
      {/* Golden boundary thread */}
      <div className="w-full h-1 bg-gradient-to-r from-[#B77B27] via-[#D6A84F] to-[#B77B27] opacity-80" />
    </div>
  );
};

/**
 * Traditional Brass Diya SVG
 */
export const BrassDiya: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Flame */}
      <svg
        width={size * 0.4}
        height={size * 0.55}
        viewBox="0 0 16 24"
        fill="none"
        className="animate-flame -mb-1"
        aria-hidden="true"
      >
        <path
          d="M8 0C8 0 16 8 14 16C12 22 4 22 2 16C0 8 8 0 8 0Z"
          fill="url(#diyaFlame)"
        />
        <path
          d="M8 8C8 8 12 13 11 17C10 20 6 20 5 17C4 13 8 8 8 8Z"
          fill="#FFF4D0"
        />
        <defs>
          <radialGradient id="diyaFlame" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#FFA62B" />
            <stop offset="100%" stopColor="#D9381E" />
          </radialGradient>
        </defs>
      </svg>
      {/* Brass Lamp Base */}
      <svg
        width={size}
        height={size * 0.55}
        viewBox="0 0 36 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 7C5 15 31 15 34 7C34 5 31 4 26 4C21 4 20 5 18 5C16 5 15 4 10 4C5 4 2 5 2 7Z"
          fill="url(#brassGold)"
          stroke="#9E7422"
          strokeWidth="0.75"
        />
        <ellipse cx="18" cy="16" rx="9" ry="3" fill="#B77B27" />
        <ellipse cx="18" cy="15.5" rx="8" ry="2.5" fill="url(#brassGold)" />
        <path d="M16 11L15 15H21L20 11" fill="#D6A84F" />
        <defs>
          <linearGradient id="brassGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5D98B" />
            <stop offset="45%" stopColor="#D6A84F" />
            <stop offset="80%" stopColor="#B77B27" />
            <stop offset="100%" stopColor="#8C5C1A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

/**
 * Sacred Brass Kalash with Coconut and Mango Leaves
 */
export const BrassKalash: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 48 60"
      fill="none"
      className={`filter drop-shadow-md ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kalashGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9E2A8" />
          <stop offset="50%" stopColor="#D6A84F" />
          <stop offset="85%" stopColor="#B77B27" />
          <stop offset="100%" stopColor="#7E5114" />
        </linearGradient>
        <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A845C" />
          <stop offset="100%" stopColor="#2D533A" />
        </linearGradient>
      </defs>
      
      {/* Mango Leaves emerging from pot */}
      <path d="M24 22 C18 14 10 10 4 14 C12 18 18 22 24 22 Z" fill="url(#leafGreen)" />
      <path d="M24 22 C30 14 38 10 44 14 C36 18 30 22 24 22 Z" fill="url(#leafGreen)" />
      <path d="M24 22 C21 10 16 4 14 2 C22 6 23 16 24 22 Z" fill="url(#leafGreen)" />
      <path d="M24 22 C27 10 32 4 34 2 C26 6 25 16 24 22 Z" fill="url(#leafGreen)" />
      
      {/* Coconut atop */}
      <ellipse cx="24" cy="13" rx="8" ry="11" fill="#784B20" />
      <path d="M24 2 C22 6 21 10 24 14 C27 10 26 6 24 2 Z" fill="#96612F" opacity="0.8" />
      
      {/* Kalash Pot Neck */}
      <path d="M16 24 H32 V27 H16 Z" fill="url(#kalashGold)" stroke="#9E7422" strokeWidth="0.5" />
      <path d="M14 27 C14 25 34 25 34 27 L33 30 H15 Z" fill="#F5D98B" />
      
      {/* Kalash Pot Body */}
      <path
        d="M15 30 C9 35 8 47 16 53 C18 54.5 30 54.5 32 53 C40 47 39 35 33 30 Z"
        fill="url(#kalashGold)"
        stroke="#9E7422"
        strokeWidth="0.75"
      />
      
      {/* Sacred Swastika / Red Ribbon on Pot */}
      <circle cx="24" cy="42" r="5" fill="#751D2A" opacity="0.9" />
      <circle cx="24" cy="42" r="3" fill="#D6A84F" />
      
      {/* Kalash Pot Base Stand */}
      <ellipse cx="24" cy="55" rx="10" ry="2.5" fill="url(#kalashGold)" stroke="#9E7422" strokeWidth="0.5" />
    </svg>
  );
};

/**
 * Ornamental Divider with Gold Lotus / Kalash center
 */
export const OrnamentalDivider: React.FC<{ title?: string; className?: string }> = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 px-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#D6A84F] to-[#B77B27] opacity-60" />
      
      <div className="mx-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B77B27]" />
        <span className="text-[#D6A84F] text-lg sm:text-xl">❖</span>
        {title && (
          <span className="text-xs uppercase tracking-widest text-[#751D2A] font-semibold px-2">
            {title}
          </span>
        )}
        <span className="text-[#D6A84F] text-lg sm:text-xl">❖</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#B77B27]" />
      </div>

      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent via-[#D6A84F] to-[#B77B27] opacity-60" />
    </div>
  );
};

/**
 * Traditional Rice-Flour Kolam / Muggu Motif
 */
export const KolamMotif: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#D6A84F"
      strokeWidth="1.5"
      className={`opacity-70 ${className}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="4" fill="#B77B27" />
      <circle cx="32" cy="32" r="12" strokeDasharray="3 3" />
      <path d="M32 4 C40 16 48 24 60 32 C48 40 40 48 32 60 C24 48 16 40 4 32 C16 24 24 16 32 4 Z" />
      <path d="M12 12 Q32 24 52 12 Q40 32 52 52 Q32 40 12 52 Q24 32 12 12 Z" opacity="0.6" />
    </svg>
  );
};
