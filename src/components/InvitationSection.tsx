import React from 'react';
import { Home, Quote } from 'lucide-react';
import { BrassDiya, OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface InvitationSectionProps {
  currentLang: Language;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { couple } = invitationData;

  return (
    <section id="invitation" className="py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <Home className="w-3.5 h-3.5" />
            <span>{content.invitation.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {content.invitation.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {content.invitation.subtitle}
          </p>
        </div>

        {/* Invitation Card */}
        <div className="relative rounded-3xl p-6 sm:p-12 bg-[#FAF6EE] border-2 border-[#DFB76C] shadow-xl">
          {/* Corner Floral Motifs */}
          <div className="absolute top-3 left-4 text-[#DFB76C] text-xl select-none">❖</div>
          <div className="absolute top-3 right-4 text-[#DFB76C] text-xl select-none">❖</div>
          <div className="absolute bottom-3 left-4 text-[#DFB76C] text-xl select-none">❖</div>
          <div className="absolute bottom-3 right-4 text-[#DFB76C] text-xl select-none">❖</div>

          {/* Salutation */}
          <div className="mb-6 pb-3 border-b border-[#DFB76C]/40 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#782A15] font-telugu">
              {content.invitation.salutation}
            </h3>
            <BrassDiya size={26} />
          </div>

          {/* Invitation Copy */}
          <div className="space-y-4 text-sm sm:text-base text-[#381A0B] leading-relaxed font-telugu">
            <p>{content.invitation.p1}</p>
            <p>{content.invitation.p2}</p>
          </div>

          {/* Auspicious Shloka */}
          <div className="my-8 p-4 sm:p-6 rounded-2xl bg-[#EFE3D0]/70 border border-[#DFB76C] text-center">
            <Quote className="w-6 h-6 text-[#D49B28] mx-auto mb-2 opacity-80" />
            <p className="text-sm sm:text-base font-bold text-[#782A15] tracking-wide font-telugu">
              {content.invitation.shloka}
            </p>
            <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
              {content.invitation.shlokaMeaning}
            </p>
          </div>

          {/* Homeowners & Families */}
          <div className="pt-6 border-t border-[#DFB76C]/40">
            <p className="text-xs uppercase tracking-widest text-[#D49B28] font-bold text-center mb-4">
              {content.invitation.hostedBy}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
              {/* Bikas & Parents */}
              <div className="p-4 rounded-xl bg-white border border-[#DFB76C]/60">
                <p className="text-sm font-bold text-[#782A15] font-telugu">
                  {couple.groom.fullName[currentLang]}
                </p>
                <p className="text-xs text-[#542813] mt-1 font-telugu leading-relaxed">
                  {couple.groom.parents[currentLang]}
                </p>
              </div>

              {/* Bhargavi & Parents */}
              <div className="p-4 rounded-xl bg-white border border-[#DFB76C]/60">
                <p className="text-sm font-bold text-[#782A15] font-telugu">
                  {couple.bride.fullName[currentLang]}
                </p>
                <p className="text-xs text-[#542813] mt-1 font-telugu leading-relaxed">
                  {couple.bride.parents[currentLang]}
                </p>
              </div>
            </div>

            {/* Combined family note */}
            <div className="mt-5 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#9C4129]/10 text-[#782A15] text-xs font-bold font-telugu border border-[#9C4129]/25">
                {couple.familySignature[currentLang]}
              </span>
            </div>
          </div>
        </div>

        <OrnamentalDivider />
      </div>
    </section>
  );
};
