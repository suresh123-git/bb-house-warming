import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { BrassDiya, ToranamBanner } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface OpeningScreenProps {
  currentLang: Language;
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  currentLang,
  onOpen,
  isOpen,
}) => {
  const content = uiContent[currentLang];
  const couple = invitationData.couple;

  if (isOpen) {
    // Hidden once opened, or collapsed into an accessible top banner
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Auspicious Invitation Envelope"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#F8F0DE] bg-parchment-clean overflow-y-auto"
    >
      {/* Top Toranam */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <ToranamBanner />
      </div>

      {/* Main Auspicious Card Envelope */}
      <div className="relative w-full max-w-lg my-auto rounded-3xl p-6 sm:p-10 text-center bg-[#FFFDF9] border-2 border-[#D6A84F] shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
        {/* Subtle decorative background kolam watermark */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#D6A84F]/20 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full border border-[#D6A84F]/20 pointer-events-none" />

        {/* Diyas on corners */}
        <div className="flex justify-between items-center mb-2 px-2">
          <BrassDiya size={32} />
          <div className="text-center">
            <span className="text-[#D6A84F] text-sm tracking-widest uppercase font-semibold">
              ॥ శుభకార్యం ॥
            </span>
          </div>
          <BrassDiya size={32} />
        </div>

        {/* Ganesha Artwork */}
        <div className="mx-auto my-3 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-br from-[#D6A84F] via-[#B77B27] to-[#751D2A] shadow-md">
          <img
            src="/assets/images/lord_ganesha.jpg"
            alt="Lord Sri Ganesha traditional illustration"
            className="w-full h-full object-cover rounded-xl"
            loading="eager"
          />
        </div>

        {/* Auspicious Invocations */}
        <div className="space-y-1 mb-4">
          <h2 className="text-[#751D2A] text-xl sm:text-2xl font-bold tracking-wide font-telugu">
            {content.omGanesh}
          </h2>
          <p className="text-[#B77B27] text-xs sm:text-sm font-medium tracking-widest font-telugu">
            {content.subInvocation}
          </p>
        </div>

        {/* Card Title */}
        <div className="my-4 py-2 border-y border-[#D6A84F]/40">
          <p className="text-xs uppercase tracking-widest text-[#B77B27] font-semibold">
            {currentLang === 'te' ? 'గృహప్రవేశ ఆహ్వానం' : 'Housewarming Invitation'}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#751D2A] mt-1 font-serif-en">
            {couple.groom.firstName} &amp; {couple.bride.firstName}
          </h1>
          <p className="text-sm text-[#751D2A]/80 font-telugu mt-0.5">
            {couple.groom.fullName[currentLang]} &amp; {couple.bride.fullName[currentLang]}
          </p>
          <div className="mt-2 text-xs font-semibold text-[#386347] bg-[#386347]/10 py-1 px-3 rounded-full inline-block">
            📅 {invitationData.eventDate.fullDate[currentLang]} ({invitationData.eventDate.dayOfWeek[currentLang]})
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onOpen}
            autoFocus
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#751D2A] via-[#8e2535] to-[#751D2A] text-[#F8F0DE] font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:from-[#4a1019] hover:to-[#8e2535] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#D6A84F]"
          >
            <Sparkles className="w-5 h-5 text-[#D6A84F] animate-pulse" />
            <span className={currentLang === 'te' ? 'font-telugu' : 'font-sans-en'}>
              {content.openInvitationBtn}
            </span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <p className="text-xs text-[#751D2A]/70 italic font-telugu">
            {content.tapToEnter}
          </p>
        </div>
      </div>
    </div>
  );
};
