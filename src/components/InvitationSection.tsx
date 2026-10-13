import React from 'react';
import { Quote } from 'lucide-react';
import { BrassDiya, OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface InvitationSectionProps {
  currentLang: Language;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const couple = invitationData.couple;

  return (
    <section id="invitation" className="py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-1">
            {content.invitation.sectionTitle}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-telugu">
            {currentLang === 'te' ? 'మా హృదయపూర్వక ఆహ్వానం' : 'A Cordial Invitation'}
          </h2>
          <p className="text-xs sm:text-sm text-[#523A30] mt-1 italic font-telugu">
            {content.invitation.sectionSubtitle}
          </p>
        </div>

        {/* Invitation Parchment Card */}
        <div className="relative rounded-3xl p-6 sm:p-12 bg-[#FFFDF9] border-2 border-[#D6A84F] shadow-xl">
          {/* Corner Floral Motifs */}
          <div className="absolute top-3 left-4 text-[#D6A84F] text-xl select-none">❖</div>
          <div className="absolute top-3 right-4 text-[#D6A84F] text-xl select-none">❖</div>
          <div className="absolute bottom-3 left-4 text-[#D6A84F] text-xl select-none">❖</div>
          <div className="absolute bottom-3 right-4 text-[#D6A84F] text-xl select-none">❖</div>

          {/* Salutation */}
          <div className="mb-6 pb-3 border-b border-[#D6A84F]/30 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#751D2A] font-telugu">
              {content.invitation.salutation}
            </h3>
            <BrassDiya size={26} />
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#3A2820] leading-relaxed font-telugu">
            <p>{content.invitation.p1}</p>
            <p>{content.invitation.p2}</p>
          </div>

          {/* Sacred Sanskrit Shloka / Auspicious blessing quote */}
          <div className="my-8 p-4 sm:p-6 rounded-2xl bg-[#FCF8EE] border border-[#D6A84F]/50 text-center relative">
            <Quote className="w-6 h-6 text-[#D6A84F] mx-auto mb-2 opacity-70" />
            <p className="text-sm sm:text-base font-semibold text-[#751D2A] tracking-wide font-telugu">
              {content.invitation.quote}
            </p>
            <p className="text-xs sm:text-sm text-[#523A30] mt-1 italic font-telugu">
              {content.invitation.quoteMeaning}
            </p>
          </div>

          {/* Family Signatures */}
          <div className="pt-6 border-t border-[#D6A84F]/40">
            <p className="text-xs uppercase tracking-widest text-[#B77B27] font-semibold text-center mb-4">
              {content.invitation.withBestWishes}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
              {/* Groom's Family */}
              <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/40">
                <p className="text-xs uppercase tracking-wider text-[#751D2A] font-bold">
                  {currentLang === 'te' ? 'వరుని తరపున' : 'Groom’s Family'}
                </p>
                <p className="text-sm font-semibold text-[#3A2820] mt-1 font-telugu">
                  {couple.groom.fullName[currentLang]}
                </p>
                <p className="text-xs text-[#523A30] mt-1 font-telugu leading-relaxed">
                  {couple.groom.parents[currentLang]}
                </p>
              </div>

              {/* Bride's Family */}
              <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#D6A84F]/40">
                <p className="text-xs uppercase tracking-wider text-[#751D2A] font-bold">
                  {currentLang === 'te' ? 'వధువు తరపున' : 'Bride’s Family'}
                </p>
                <p className="text-sm font-semibold text-[#3A2820] mt-1 font-telugu">
                  {couple.bride.fullName[currentLang]}
                </p>
                <p className="text-xs text-[#523A30] mt-1 font-telugu leading-relaxed">
                  {couple.bride.parents[currentLang]}
                </p>
              </div>
            </div>

            {/* Combined Family Note */}
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#751D2A]/10 text-[#751D2A] text-xs font-semibold font-telugu">
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
