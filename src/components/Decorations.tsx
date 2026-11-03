import React from 'react';

/**
 * Botanical Leaf Branch Sprig matching UX Storyboard Panels 3, 4, 6
 */
export const BotanicalSprig: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Main branch stems */}
      <path
        d="M160 0 Q130 25, 95 38 T30 55"
        stroke="#594838"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M115 30 Q90 55, 60 70"
        stroke="#594838"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M75 48 Q55 75, 40 95"
        stroke="#594838"
        strokeWidth="1.0"
        strokeLinecap="round"
      />

      {/* Leaf clusters in authentic botanical green #697654 */}
      <g fill="#697654" opacity="0.88">
        {/* Branch 1 Leaves */}
        <path d="M140 10 Q148 4, 155 8 Q150 18, 140 10 Z" />
        <path d="M125 18 Q135 12, 142 16 Q135 26, 125 18 Z" fill="#586745" />
        <path d="M110 26 Q122 20, 128 25 Q120 36, 110 26 Z" />
        <path d="M95 35 Q106 28, 114 34 Q104 44, 95 35 Z" fill="#586745" />
        <path d="M78 42 Q90 36, 96 42 Q86 52, 78 42 Z" />
        <path d="M60 48 Q72 44, 78 50 Q68 58, 60 48 Z" fill="#586745" />
        <path d="M42 53 Q52 50, 58 55 Q50 62, 42 53 Z" />
        <path d="M26 55 Q35 54, 40 58 Q32 64, 26 55 Z" fill="#586745" />

        {/* Branch 2 Sub-leaves */}
        <path d="M102 42 Q108 50, 102 58 Q95 52, 102 42 Z" />
        <path d="M88 54 Q94 62, 88 70 Q82 64, 88 54 Z" fill="#586745" />
        <path d="M74 62 Q80 70, 72 78 Q68 70, 74 62 Z" />
        <path d="M56 70 Q62 78, 54 85 Q50 78, 56 70 Z" fill="#586745" />

        {/* Branch 3 Lower leaves */}
        <path d="M68 64 Q70 75, 62 82 Q58 72, 68 64 Z" />
        <path d="M52 78 Q54 88, 46 95 Q42 85, 52 78 Z" fill="#586745" />
        <path d="M38 92 Q40 102, 32 108 Q30 98, 38 92 Z" />
      </g>
    </svg>
  );
};
