import React from 'react';
import { Calendar, Clock, Flame, Home, Sparkles, Utensils, CheckCircle2 } from 'lucide-react';
import { BrassDiya, BrassKalash, OrnamentalDivider } from './Decorations';
import type { Language, CeremonyScheduleItem } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface CeremonySectionProps {
  currentLang: Language;
}

export const CeremonySection: React.FC<CeremonySectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { eventDate, ceremonies, meal } = invitationData;

  const renderIcon = (name: CeremonyScheduleItem['iconName']) => {
    switch (name) {
      case 'flame':
        return <Flame className="w-5 h-5 text-[#B77B27]" />;
      case 'home':
        return <Home className="w-5 h-5 text-[#386347]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#D6A84F]" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-[#751D2A]" />;
      default:
        return <BrassKalash size={24} />;
    }
  };

  return (
    <section id="ceremonies" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-1">
            {content.ceremony.sectionTitle}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-telugu">
            {currentLang === 'te' ? 'శుభ ముహూర్తం & పూజా కార్యక్రమాలు' : 'Auspicious Ceremonies'}
          </h2>
          <p className="text-xs sm:text-sm text-[#523A30] mt-1 italic font-telugu">
            {content.ceremony.sectionSubtitle}
          </p>
        </div>

        {/* Confirmed Date Highlight Card */}
        <div className="mb-10 rounded-2xl p-6 bg-gradient-to-r from-[#FFFDF9] via-[#FCF8EE] to-[#FFFDF9] border-2 border-[#D6A84F] shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#751D2A] text-[#D6A84F] shadow-xs">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#B77B27] font-bold">
                    {content.ceremony.dateCardLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#386347] bg-[#386347]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {content.ceremony.confirmedBadge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#751D2A] mt-0.5 font-telugu">
                  {eventDate.fullDate[currentLang]} ({eventDate.dayOfWeek[currentLang]})
                </h3>
              </div>
            </div>

            <BrassDiya size={32} />
          </div>

          {/* Panchangam Timing Notice (Transparent about unconfirmed hours) */}
          <div className="mt-4 pt-3 border-t border-[#D6A84F]/30 flex items-start gap-2.5 text-xs sm:text-sm text-[#523A30] bg-[#FFFDF9] p-3 rounded-xl">
            <Clock className="w-4 h-4 text-[#B77B27] shrink-0 mt-0.5" />
            <p className="font-telugu leading-relaxed">
              <strong className="text-[#751D2A]">{content.ceremony.auspiciousMuhurtham}: </strong>
              {content.ceremony.timePendingNotice}
            </p>
          </div>
        </div>

        {/* Ceremonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ceremonies.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl p-6 bg-[#FFFDF9] border border-[#D6A84F]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#B77B27] tracking-widest">
                  0{index + 1}
                </span>
                <div className="p-2 rounded-xl bg-[#FCF8EE] border border-[#D6A84F]/40">
                  {renderIcon(item.iconName)}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#751D2A] mb-1 font-telugu">
                  {item.title[currentLang]}
                </h3>

                {item.subtitle && (
                  <p className="text-xs text-[#B77B27] font-medium mb-3 font-telugu">
                    {item.subtitle[currentLang]}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#523A30] leading-relaxed mb-4 font-telugu">
                  {item.description[currentLang]}
                </p>
              </div>

              {/* Timing row: Only display real time if confirmed, otherwise show clean status */}
              <div className="pt-3 border-t border-[#D6A84F]/30 flex items-center justify-between text-xs text-[#523A30]">
                <div className="flex items-center gap-1 font-medium font-telugu">
                  <span>📅 {item.dateStr[currentLang]}</span>
                </div>

                {item.isTimeConfirmed && item.time ? (
                  <span className="font-semibold text-[#751D2A] bg-[#751D2A]/10 px-2 py-0.5 rounded-full">
                    {item.time[currentLang]}
                  </span>
                ) : (
                  <span className="font-medium text-[#B77B27] bg-[#B77B27]/10 px-2 py-0.5 rounded-full font-telugu text-[11px]">
                    {content.ceremony.timePendingTag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Meal Information: Show only if confirmed */}
        {meal.isConfirmed && (
          <div className="mt-8 rounded-2xl p-6 bg-[#FCF8EE] border border-[#D6A84F] shadow-md flex items-center gap-4">
            <div className="p-3 rounded-full bg-[#751D2A] text-[#F8F0DE]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#751D2A] font-telugu text-base">
                {meal.title[currentLang]}
              </h4>
              <p className="text-xs sm:text-sm text-[#523A30] font-telugu mt-0.5">
                {meal.description[currentLang]}
              </p>
              {meal.timing && (
                <span className="inline-block mt-1 text-xs font-semibold text-[#386347]">
                  ⏰ {meal.timing[currentLang]}
                </span>
              )}
            </div>
          </div>
        )}

        <OrnamentalDivider />
      </div>
    </section>
  );
};
