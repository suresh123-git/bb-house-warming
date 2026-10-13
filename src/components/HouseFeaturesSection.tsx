import React from 'react';
import { Home, Sparkles, Flame, Sun } from 'lucide-react';
import { BrassDiya, OrnamentalDivider } from './Decorations';
import type { Language, HouseFeature } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface HouseFeaturesSectionProps {
  currentLang: Language;
}

export const HouseFeaturesSection: React.FC<HouseFeaturesSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { houseFeatures } = invitationData;

  const getFeatureIcon = (type: HouseFeature['iconName']) => {
    switch (type) {
      case 'tulasi':
        return <Sun className="w-5 h-5 text-[#2C5E3B]" />;
      case 'pooja':
        return <Sparkles className="w-5 h-5 text-[#D49B28]" />;
      case 'kitchen':
        return <Flame className="w-5 h-5 text-[#9C4129]" />;
      case 'living':
        return <Home className="w-5 h-5 text-[#782A15]" />;
      default:
        return <Home className="w-5 h-5 text-[#D49B28]" />;
    }
  };

  return (
    <section id="features" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <Home className="w-3.5 h-3.5" />
            <span>{content.features.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {content.features.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {content.features.subtitle}
          </p>
        </div>

        {/* 4 Architectural Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {houseFeatures.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl p-6 bg-[#FAF6EE] border border-[#DFB76C] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#D49B28]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-[#DFB76C]/60 shadow-2xs">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#782A15] bg-[#9C4129]/10 px-2.5 py-0.5 rounded-full font-telugu">
                    {feat.tag[currentLang]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#782A15] font-telugu mb-1">
                  {feat.title[currentLang]}
                </h3>

                <p className="text-xs font-semibold text-[#D49B28] font-telugu mb-3">
                  {feat.subtitle[currentLang]}
                </p>

                <p className="text-xs sm:text-sm text-[#542813]/90 leading-relaxed font-telugu">
                  {feat.description[currentLang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DFB76C]/30 flex items-center justify-between text-xs text-[#542813]/70 font-telugu">
                <span>శ్రీ నిలయం</span>
                <BrassDiya size={18} />
              </div>
            </div>
          ))}
        </div>

        <OrnamentalDivider />
      </div>
    </section>
  );
};
