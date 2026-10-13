import React, { useState, useEffect } from 'react';
import { Calendar, Home, Clock } from 'lucide-react';
import { BrassDiya, OrnamentalDivider, ToranamBanner } from './Decorations';

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
  const { couple, eventDate } = invitationData;

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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
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
    <section id="hero" className="relative pt-2 pb-16 sm:pb-24 px-4 overflow-hidden">
      {/* Top Toranam */}
      <ToranamBanner className="mb-6" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sacred Header with Kalash */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <BrassDiya size={28} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] border border-[#DFB76C] shadow-xs">
            <span className="text-xs sm:text-sm font-bold tracking-wide text-[#782A15] font-telugu">
              {content.omGanesh}
            </span>
          </div>
          <BrassDiya size={28} />
        </div>

        {/* Hero Architectural Card */}
        <div className="relative rounded-3xl bg-[#FAF6EE] border-2 border-[#DFB76C] shadow-2xl overflow-hidden p-6 sm:p-10">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#9C4129]/10 text-[#782A15] border border-[#9C4129]/25 text-xs font-bold uppercase tracking-widest font-telugu mb-3">
            <Home className="w-3.5 h-3.5 text-[#D49B28]" />
            <span>{content.hero.eyebrow}</span>
          </div>

          {/* Bilingual Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#782A15] tracking-tight mb-2">
            <span className="block font-telugu text-3xl sm:text-5xl md:text-6xl text-[#782A15]">
              మా గృహప్రవేశం
            </span>
            <span className="block font-serif-en italic text-2xl sm:text-4xl md:text-5xl text-[#9C4129] mt-1">
              Our Gruhapravesam Ceremony
            </span>
          </h1>

          {/* New Homeowners Spotlight */}
          <div className="my-6 py-4 px-4 rounded-2xl bg-[#EFE3D0]/60 border border-[#DFB76C]/60 max-w-lg mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#D49B28] font-bold mb-1">
              {currentLang === 'te' ? 'నూతన గృహస్థులు' : 'New Homeowners'}
            </p>
            <div className="text-2xl sm:text-3xl font-bold text-[#542813] font-serif-en">
              {couple.groom.firstName} &amp; {couple.bride.firstName}
            </div>
            <p className="text-sm sm:text-base text-[#782A15] font-telugu font-semibold mt-0.5">
              {couple.groom.fullName[currentLang]} &amp; {couple.bride.fullName[currentLang]}
            </p>
          </div>

          {/* New Home Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden my-6 border-2 border-[#DFB76C] shadow-md group">
            <img
              src="/assets/images/new_home.jpg"
              alt="South Indian house decorated with mango toranam, marigolds, and glowing deepams for Gruhapravesam"
              className="w-full h-56 sm:h-80 md:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
            {/* Visual caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B140B]/80 via-transparent to-transparent flex items-end p-4 sm:p-6 text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#D49B28] text-[#381A0B] text-xs font-bold mb-1 shadow-sm font-telugu">
                  🏡 {invitationData.venue.name[currentLang]}
                </span>
                <p className="text-white text-sm sm:text-base font-telugu font-medium drop-shadow-md">
                  {content.hero.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Confirmed Date Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-[#9C4129] text-[#FAF6EE] shadow-lg border border-[#DFB76C] mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#DFB76C]" />
              <span className="font-bold text-base sm:text-lg">
                {eventDate.fullDate[currentLang]}
              </span>
            </div>
            <span className="hidden sm:inline text-[#DFB76C]">•</span>
            <div className="text-sm sm:text-base text-[#FAF6EE]/90 font-telugu font-medium">
              {eventDate.dayOfWeek[currentLang]}
            </div>
          </div>

          {/* Countdown timer to Gruhapravesam date */}
          <div className="pt-6 border-t border-[#DFB76C]/40 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#782A15] mb-3">
              <Clock className="w-4 h-4 text-[#D49B28]" />
              <span className="font-telugu">{content.hero.countdownTitle}</span>
            </div>

            {timeLeft.isPast ? (
              <div className="p-3 bg-[#2C5E3B]/10 text-[#2C5E3B] font-semibold rounded-xl text-sm font-telugu">
                {content.hero.eventPassed}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-white border border-[#DFB76C] shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#782A15] font-sans-en">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#542813] font-medium mt-0.5 font-telugu">
                    {content.hero.days}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-white border border-[#DFB76C] shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#782A15] font-sans-en">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#542813] font-medium mt-0.5 font-telugu">
                    {content.hero.hours}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-white border border-[#DFB76C] shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#782A15] font-sans-en">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#542813] font-medium mt-0.5 font-telugu">
                    {content.hero.mins}
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-white border border-[#DFB76C] shadow-xs">
                  <span className="text-xl sm:text-3xl font-bold text-[#782A15] font-sans-en">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#542813] font-medium mt-0.5 font-telugu">
                    {content.hero.secs}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <OrnamentalDivider />
      </div>
    </section>
  );
};
