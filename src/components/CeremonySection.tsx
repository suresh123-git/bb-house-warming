import React from 'react';
import { Calendar, Clock, Flame, Bell, CheckCircle2, Sparkles } from 'lucide-react';
import { BrassDiya, BrassKalash, OrnamentalDivider } from './Decorations';
import type { Language, HousewarmingRitual } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface CeremonySectionProps {
  currentLang: Language;
}

export const CeremonySection: React.FC<CeremonySectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { eventDate, rituals, meal } = invitationData;

  const renderRitualIcon = (name: HousewarmingRitual['iconName']) => {
    switch (name) {
      case 'cow':
        return <span className="text-xl" role="img" aria-label="Gomatha">🐄</span>;
      case 'milk':
        return <span className="text-xl" role="img" aria-label="Milk Boiling">🥛</span>;
      case 'flame':
        return <Flame className="w-5 h-5 text-[#9C4129]" />;
      case 'bell':
        return <Bell className="w-5 h-5 text-[#D49B28]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D49B28]" />;
    }
  };

  return (
    <section id="rituals" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.rituals.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {content.rituals.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {content.rituals.subtitle}
          </p>
        </div>

        {/* Confirmed Date Highlight Banner */}
        <div className="mb-10 rounded-2xl p-6 bg-gradient-to-r from-[#FAF6EE] via-[#EFE3D0] to-[#FAF6EE] border-2 border-[#DFB76C] shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#9C4129] text-[#FAF6EE] shadow-sm">
                <Calendar className="w-7 h-7 text-[#DFB76C]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#D49B28] font-bold font-telugu">
                    {content.rituals.dateBadge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2C5E3B] bg-[#2C5E3B]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    ధృవీకరించబడిన తేదీ
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#782A15] mt-0.5 font-telugu">
                  {eventDate.fullDate[currentLang]} ({eventDate.dayOfWeek[currentLang]})
                </h3>
              </div>
            </div>

            <BrassDiya size={32} />
          </div>

          {/* Panchangam Timing Notice */}
          <div className="mt-4 pt-3 border-t border-[#DFB76C]/40 flex items-start gap-2.5 text-xs sm:text-sm text-[#542813] bg-white/70 p-3 rounded-xl">
            <Clock className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
            <p className="font-telugu leading-relaxed">
              <strong className="text-[#782A15]">ముహూర్తం: </strong>
              {content.rituals.timePendingNote}
            </p>
          </div>
        </div>

        {/* 4 Ritual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((ritual, index) => (
            <div
              key={ritual.id}
              className="rounded-2xl p-6 bg-[#FAF6EE] border border-[#DFB76C] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#D49B28]"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#D49B28] tracking-widest font-sans-en">
                    PHASE 0{index + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-white border border-[#DFB76C]/50 shadow-2xs">
                    {renderRitualIcon(ritual.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#782A15] mb-1 font-telugu">
                  {ritual.title[currentLang]}
                </h3>

                <p className="text-xs font-semibold text-[#D49B28] mb-3 font-telugu">
                  {ritual.subtitle[currentLang]}
                </p>

                <p className="text-xs sm:text-sm text-[#542813] leading-relaxed mb-3 font-telugu">
                  {ritual.description[currentLang]}
                </p>

                {/* Cultural significance note */}
                <div className="p-3 rounded-xl bg-[#EFE3D0]/60 border border-[#DFB76C]/40 mb-4">
                  <p className="text-[11px] font-semibold text-[#782A15] font-telugu mb-0.5">
                    {content.rituals.significanceLabel}
                  </p>
                  <p className="text-xs text-[#542813]/90 italic font-telugu leading-relaxed">
                    {ritual.significance[currentLang]}
                  </p>
                </div>
              </div>

              {/* Timing status */}
              <div className="pt-3 border-t border-[#DFB76C]/30 flex items-center justify-between text-xs text-[#542813]">
                <span className="font-telugu">📅 {ritual.dateStr[currentLang]}</span>
                <span className="font-semibold text-[#D49B28] bg-[#D49B28]/15 px-2.5 py-0.5 rounded-full font-telugu text-[11px]">
                  {content.rituals.timePendingBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Meal Info: displayed only if confirmed */}
        {meal.isConfirmed && (
          <div className="mt-8 rounded-2xl p-6 bg-[#EFE3D0] border border-[#DFB76C] shadow-md flex items-center gap-4">
            <BrassKalash size={36} />
            <div>
              <h4 className="font-bold text-[#782A15] font-telugu text-base">
                {meal.title[currentLang]}
              </h4>
              <p className="text-xs sm:text-sm text-[#542813] font-telugu mt-0.5">
                {meal.description[currentLang]}
              </p>
            </div>
          </div>
        )}

        <OrnamentalDivider />
      </div>
    </section>
  );
};
