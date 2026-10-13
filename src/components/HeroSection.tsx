import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Clock } from 'lucide-react';
import { BrassDiya, BrassKalash, OrnamentalDivider, ToranamBanner } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface HeroSectionProps {
  currentLang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const couple = invitationData.couple;
  const eventDate = invitationData.eventDate;

  // Countdown target: 16 November 2026 00:00:00 IST (+05:30)
  const targetEpoch = new Date('2026-11-16T00:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const diff = targetEpoch - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetEpoch]);

  return (
    <section id="hero" className="relative pt-0 pb-16 sm:pb-24 px-4 overflow-hidden">
      {/* Mango Leaf Toranam at top */}
      <ToranamBanner className="mb-4 sm:mb-8" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sacred Invocation Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <BrassDiya size={28} />
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFFDF9]/80 border border-[#D6A84F]/40 shadow-xs">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#751D2A] font-telugu">
              {content.omGanesh}
            </span>
          </div>
          <BrassDiya size={28} />
        </div>

        {/* Temple Arch Frame Wrapper */}
        <div className="relative mx-auto max-w-3xl rounded-t-full sm:rounded-t-[140px] pt-8 sm:pt-14 pb-10 px-6 sm:px-12 bg-gradient-to-b from-[#FFFDF9] via-[#FCF8EE] to-[#FFFDF9] border-2 border-[#D6A84F] shadow-xl">
          
          {/* Subtle Arch Ornament */}
          <div className="flex justify-center -mt-4 mb-4">
            <BrassKalash size={42} />
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-2 font-telugu">
            {content.hero.eyebrow}
          </p>

          {/* Bilingual Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#751D2A] tracking-tight mb-2">
            <span className="block font-telugu mb-1 text-2xl sm:text-4xl md:text-5xl">
              మా గృహప్రవేశ వేడుక
            </span>
            <span className="block font-serif-en italic text-3xl sm:text-5xl md:text-6xl text-[#751D2A]">
              Our Gruhapravesam
            </span>
          </h1>

          {/* Couple's Names Prominently */}
          <div className="my-6 py-4 border-y border-[#D6A84F]/40 relative">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="h-[1px] w-8 bg-[#D6A84F]" />
              <Heart className="w-4 h-4 text-[#751D2A] fill-[#751D2A]" />
              <span className="h-[1px] w-8 bg-[#D6A84F]" />
            </div>

            <div className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-serif-en tracking-wide">
              {couple.groom.firstName} &amp; {couple.bride.firstName}
            </div>

            <div className="text-base sm:text-xl text-[#33221A] font-telugu font-medium mt-1">
              {couple.groom.fullName[currentLang]} &amp; {couple.bride.fullName[currentLang]}
            </div>

            <p className="text-xs text-[#751D2A]/70 font-sans-en mt-1">
              {couple.groom.degree} &amp; {couple.bride.degree}
            </p>
          </div>

          {/* Headline subtext */}
          <p className="text-sm sm:text-base text-[#523A30] max-w-xl mx-auto leading-relaxed mb-6 font-telugu">
            {content.hero.subHeadline}
          </p>

          {/* Confirmed Date Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-[#751D2A] text-[#F8F0DE] shadow-md border border-[#D6A84F]/60 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#D6A84F]" />
              <span className="font-semibold text-base sm:text-lg">
                {eventDate.fullDate[currentLang]}
              </span>
            </div>
            <span className="hidden sm:inline text-[#D6A84F]">•</span>
            <div className="text-sm sm:text-base text-[#F8F0DE]/90 font-telugu">
              {eventDate.dayOfWeek[currentLang]}
            </div>
          </div>

          {/* Countdown timer */}
          <div className="pt-4 border-t border-[#D6A84F]/30 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#751D2A] mb-3">
              <Clock className="w-4 h-4 text-[#B77B27]" />
              <span>{content.hero.countdownLabel}</span>
            </div>

            {timeLeft.isPast ? (
              <div className="p-3 bg-[#386347]/10 text-[#386347] font-semibold rounded-xl text-sm font-telugu">
                {content.hero.eventPassed}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/60 shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#751D2A] font-sans-en">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#523A30] font-medium mt-0.5">
                    {content.hero.days}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/60 shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#751D2A] font-sans-en">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#523A30] font-medium mt-0.5">
                    {content.hero.hours}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/60 shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#751D2A] font-sans-en">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#523A30] font-medium mt-0.5">
                    {content.hero.minutes}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/60 shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#751D2A] font-sans-en">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#523A30] font-medium mt-0.5">
                    {content.hero.seconds}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <OrnamentalDivider />
      </div>
    </section>
  );
};
