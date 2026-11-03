import React, { useMemo } from 'react';

type PetalType = 'marigold' | 'jasmine' | 'rose' | 'gold';
type SwayType = 'sway-1' | 'sway-2' | 'sway-3';

interface PetalItem {
  id: number;
  left: string;
  type: PetalType;
  swayClass: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export const PetalFallEffect: React.FC = () => {
  // Pre-configured auspicious petal stream distributed evenly across screen width
  const petals: PetalItem[] = useMemo(() => {
    const rawPetals: Array<{
      left: number;
      type: PetalType;
      sway: SwayType;
      size: number;
      duration: number;
      delay: number;
      opacity: number;
    }> = [
      { left: 3, type: 'marigold', sway: 'sway-1', size: 18, duration: 10.5, delay: -2.0, opacity: 0.88 },
      { left: 8, type: 'jasmine', sway: 'sway-2', size: 15, duration: 13.0, delay: -7.5, opacity: 0.82 },
      { left: 13, type: 'rose', sway: 'sway-3', size: 19, duration: 9.8, delay: -4.2, opacity: 0.85 },
      { left: 18, type: 'gold', sway: 'sway-1', size: 16, duration: 11.5, delay: -1.0, opacity: 0.9 },
      { left: 23, type: 'marigold', sway: 'sway-2', size: 21, duration: 12.2, delay: -8.8, opacity: 0.86 },
      { left: 28, type: 'jasmine', sway: 'sway-3', size: 14, duration: 14.0, delay: -3.5, opacity: 0.8 },
      { left: 34, type: 'rose', sway: 'sway-1', size: 18, duration: 10.2, delay: -6.0, opacity: 0.85 },
      { left: 39, type: 'gold', sway: 'sway-2', size: 15, duration: 12.8, delay: -0.5, opacity: 0.92 },
      { left: 44, type: 'marigold', sway: 'sway-3', size: 20, duration: 11.0, delay: -9.2, opacity: 0.88 },
      { left: 50, type: 'jasmine', sway: 'sway-1', size: 16, duration: 13.5, delay: -5.0, opacity: 0.82 },
      { left: 55, type: 'rose', sway: 'sway-2', size: 19, duration: 10.8, delay: -2.8, opacity: 0.85 },
      { left: 60, type: 'gold', sway: 'sway-3', size: 17, duration: 12.0, delay: -7.0, opacity: 0.9 },
      { left: 66, type: 'marigold', sway: 'sway-1', size: 22, duration: 11.2, delay: -4.5, opacity: 0.88 },
      { left: 71, type: 'jasmine', sway: 'sway-2', size: 15, duration: 14.5, delay: -8.2, opacity: 0.8 },
      { left: 76, type: 'rose', sway: 'sway-3', size: 18, duration: 10.0, delay: -1.5, opacity: 0.86 },
      { left: 81, type: 'gold', sway: 'sway-1', size: 16, duration: 12.5, delay: -6.8, opacity: 0.92 },
      { left: 86, type: 'marigold', sway: 'sway-2', size: 19, duration: 10.5, delay: -3.0, opacity: 0.88 },
      { left: 91, type: 'jasmine', sway: 'sway-3', size: 14, duration: 13.2, delay: -9.8, opacity: 0.8 },
      { left: 96, type: 'rose', sway: 'sway-1', size: 18, duration: 11.8, delay: -5.5, opacity: 0.85 },
    ];

    return rawPetals.map((p, idx) => ({
      id: idx,
      left: `${p.left}%`,
      type: p.type,
      swayClass:
        p.sway === 'sway-1'
          ? 'animate-petal-sway-1'
          : p.sway === 'sway-2'
          ? 'animate-petal-sway-2'
          : 'animate-petal-sway-3',
      size: p.size,
      duration: `${p.duration}s`,
      delay: `${p.delay}s`,
      opacity: p.opacity,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-25"
    >
      {/* Shared SVG Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Marigold Petal Gradient */}
          <linearGradient id="mainMarigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Jasmine Petal Gradient */}
          <linearGradient id="mainJasmineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>

          {/* Rose Petal Gradient */}
          <linearGradient id="mainRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="55%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>

          {/* Golden Blessing Petal Gradient */}
          <linearGradient id="mainGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Petal Instances */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute top-0 ${petal.swayClass}`}
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          {petal.type === 'marigold' && (
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(217,119,6,0.35)]"
            >
              <path
                d="M12 2 C16 5 21 11 20 17 C19 21 15 23 12 23 C9 23 5 21 4 17 C3 11 8 5 12 2 Z"
                fill="url(#mainMarigoldGrad)"
              />
              <path d="M12 5 L12 21" stroke="#B45309" strokeWidth="0.6" opacity="0.45" />
            </svg>
          )}

          {petal.type === 'jasmine' && (
            <svg
              viewBox="0 0 20 28"
              className="w-full h-full filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.14)]"
            >
              <path
                d="M10 2 C14 7 18 14 17 21 C16 25 13 27 10 27 C7 27 4 25 3 21 C2 14 6 7 10 2 Z"
                fill="url(#mainJasmineGrad)"
              />
              <circle cx="10" cy="23" r="2.5" fill="#FDE047" opacity="0.8" />
            </svg>
          )}

          {petal.type === 'rose' && (
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full filter drop-shadow-[0_2px_5px_rgba(190,18,60,0.3)]"
            >
              <path
                d="M12 3 C16 3 22 7 21 15 C20 20 16 23 12 23 C8 23 4 20 3 15 C2 7 8 3 12 3 Z"
                fill="url(#mainRoseGrad)"
              />
              <path
                d="M9 13 Q12 17 15 13"
                stroke="#9F1239"
                strokeWidth="0.6"
                opacity="0.4"
                fill="none"
              />
            </svg>
          )}

          {petal.type === 'gold' && (
            <svg
              viewBox="0 0 22 24"
              className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(234,179,8,0.4)]"
            >
              <path
                d="M11 2 C15 5 20 10 19 16 C18 20 15 22 11 22 C7 22 4 20 3 16 C2 10 7 5 11 2 Z"
                fill="url(#mainGoldGrad)"
              />
              <path d="M11 5 L11 20" stroke="#78350F" strokeWidth="0.5" opacity="0.4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

