import React from 'react';
import confetti from 'canvas-confetti';
import { CalendarPlus, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { BrassDiya, BrassKalash } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface BlessingsSectionProps {
  currentLang: Language;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const couple = invitationData.couple;

  // Trigger South Indian celebratory flower shower / Akshatalu (gold, turmeric, vermillion, marigold petals)
  const triggerFlowerShower = () => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const count = 120;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#D6A84F', '#B77B27', '#751D2A', '#FFA500', '#FFD700', '#FFFFFF', '#E63946'],
      shapes: ['circle', 'square'] as confetti.Shape[],
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.6),
      spread: 60,
      startVelocity: 45,
    });

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.4),
      spread: 100,
      startVelocity: 35,
      decay: 0.92,
    });
  };

  // WhatsApp share generator
  const handleShareWhatsApp = () => {
    const pageUrl = window.location.href;
    const shareText = `${content.blessings.shareMessage}\n${pageUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Add to Calendar (.ics format download & Google Calendar link)
  const handleAddToCalendar = () => {
    // Event: 16 Nov 2026 (All-day or Auspicious Gruhapravesam)
    // 20261116
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      content.blessings.calendarEventTitle
    )}&dates=20261116T040000Z/20261116T150000Z&details=${encodeURIComponent(
      content.blessings.calendarEventDesc
    )}&location=${encodeURIComponent(
      `${invitationData.venue.name[currentLang]}, Andhra Pradesh`
    )}`;

    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blessings" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-transparent via-[#FCF8EE]/60 to-[#F3E8CE]/60">
      <div className="max-w-3xl mx-auto text-center">
        {/* Sacred Kalash Header */}
        <div className="flex justify-center mb-4">
          <BrassKalash size={48} />
        </div>

        {/* Section Header */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-1">
          {content.blessings.sectionTitle}
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-telugu mb-3">
          {currentLang === 'te' ? 'శుభాశీస్సులు & ధన్యవాదాలు' : 'Blessings & Gratitude'}
        </h2>
        <p className="text-xs sm:text-sm text-[#523A30] max-w-xl mx-auto leading-relaxed mb-8 font-telugu">
          {content.blessings.thankYouNote}
        </p>

        {/* Interactive Shower Akshatalu Button */}
        <div className="mb-10">
          <button
            type="button"
            onClick={triggerFlowerShower}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D6A84F] via-[#F5D98B] to-[#D6A84F] text-[#4a1019] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#B77B27] cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#751D2A] group-hover:rotate-12 transition-transform" />
            <span className="font-telugu">{content.blessings.showerFlowerBtn}</span>
          </button>
        </div>

        {/* Closing Invitation Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#FFFDF9] border-2 border-[#D6A84F] shadow-xl text-center relative overflow-hidden">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BrassDiya size={26} />
            <Heart className="w-5 h-5 text-[#751D2A] fill-[#751D2A]" />
            <BrassDiya size={26} />
          </div>

          <p className="text-xs uppercase tracking-widest text-[#B77B27] font-medium mb-1">
            {content.blessings.signature}
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold text-[#751D2A] font-serif-en mb-1">
            {couple.groom.firstName} &amp; {couple.bride.firstName}
          </h3>

          <p className="text-base sm:text-lg text-[#523A30] font-telugu mb-2">
            {couple.groom.fullName[currentLang]} &amp; {couple.bride.fullName[currentLang]}
          </p>

          <p className="text-xs text-[#751D2A] font-semibold font-telugu mt-2">
            {couple.familySignature[currentLang]}
          </p>

          <div className="mt-8 pt-6 border-t border-[#D6A84F]/30 flex flex-wrap items-center justify-center gap-4">
            {/* WhatsApp Share Action */}
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#1EBE5D] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{content.blessings.shareWhatsAppBtn}</span>
            </button>

            {/* Calendar Reminder Button */}
            <button
              type="button"
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#751D2A] text-[#F8F0DE] font-medium text-xs sm:text-sm shadow-md hover:bg-[#4a1019] transition-colors cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4 text-[#D6A84F]" />
              <span>{content.blessings.addToCalendarBtn}</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-xs text-[#523A30]/80 space-y-1 font-telugu">
          <p>© 2026 {couple.groom.firstName} &amp; {couple.bride.firstName} • {content.footer.rights}</p>
          <p className="italic text-[11px] text-[#B77B27]">{content.footer.builtWithLove}</p>
        </div>
      </div>
    </section>
  );
};
