import React from 'react';
import { Sparkles } from 'lucide-react';
import { OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface JourneySectionProps {
  currentLang: Language;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { journey } = invitationData;

  return (
    <section id="journey" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.journey.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {content.journey.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {content.journey.subtitle}
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="relative border-l-2 border-[#DFB76C] ml-4 sm:ml-32 space-y-8 sm:space-y-10 pl-6 sm:pl-8">
          {journey.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border-2 border-[#D49B28] text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Stage label for large screens */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-24 text-xs font-bold text-[#A97A24] font-telugu">
                {item.stage[currentLang]}
              </div>

              {/* Card content */}
              <div className="rounded-2xl p-5 bg-[#FAF6EE] border border-[#DFB76C] shadow-xs group-hover:shadow-md transition-shadow">
                <span className="sm:hidden inline-block text-[11px] font-bold text-[#A97A24] bg-[#D49B28]/10 px-2.5 py-0.5 rounded-full mb-1 font-telugu">
                  {item.stage[currentLang]}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#782A15] font-telugu mb-1">
                  {item.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#542813] leading-relaxed font-telugu">
                  {item.description[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <OrnamentalDivider />
      </div>
    </section>
  );
};
