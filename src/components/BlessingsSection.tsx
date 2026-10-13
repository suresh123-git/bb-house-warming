import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Bell, CalendarPlus, MessageCircle, Sparkles, Home } from 'lucide-react';
import { BrassDiya, BrassKalash } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface BlessingsSectionProps {
  currentLang: Language;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { couple, venue } = invitationData;
  const [bellRinging, setBellRinging] = useState(false);

  // Celebratory turmeric rice / Akshatalu & Marigold petal shower
  const triggerFlowerShower = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const count = 120;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#D49B28', '#DFB76C', '#9C4129', '#FFA500', '#FFD700', '#FFFFFF', '#E63946'],
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

  // Ring the auspicious temple bell
  const ringBell = () => {
    setBellRinging(true);
    setTimeout(() => setBellRinging(false), 900);

    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(450, audioCtx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.3);
    } catch {
      // Audio fallback
    }
  };

  // WhatsApp share generator
  const handleShareWhatsApp = () => {
    const pageUrl = window.location.href;
    const shareText = `🏡 ${couple.groom.firstName} & ${couple.bride.firstName} Gruhapravesam (Housewarming Ceremony) on 16 November 2026.\n\nఆహ్వాన పత్రికను ఇక్కడ చూడండి:\n${pageUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Add to Google Calendar
  const handleAddToCalendar = () => {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Bikas & Bhargavi's Gruhapravesam Ceremony (Housewarming)"
    )}&dates=20261116T040000Z/20261116T150000Z&details=${encodeURIComponent(
      "Gruhapravesam ceremony of Bikas Jena & Bhargavi Diddi on 16 November 2026. Welcome to Sri Nilayam!"
    )}&location=${encodeURIComponent(
      `${venue.name[currentLang]}, Andhra Pradesh`
    )}`;

    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blessings" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-transparent via-[#EFE3D0]/50 to-[#FAF6EE]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Sacred Kalash Header */}
        <div className="flex justify-center mb-4">
          <BrassKalash size={48} />
        </div>

        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.blessings.tag}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu mb-3">
          {content.blessings.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#542813] max-w-xl mx-auto leading-relaxed mb-8 font-telugu">
          {content.blessings.subtitle}
        </p>

        {/* Interactive Blessings Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {/* Shower Akshatalu Button */}
          <button
            type="button"
            onClick={triggerFlowerShower}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D49B28] via-[#DFB76C] to-[#D49B28] text-[#381A0B] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#A97A24] cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#782A15] group-hover:rotate-12 transition-transform" />
            <span className="font-telugu">{content.blessings.showerBtn}</span>
          </button>

          {/* Ring Temple Bell Button */}
          <button
            type="button"
            onClick={ringBell}
            className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#782A15] font-bold text-sm sm:text-base shadow-md hover:shadow-lg border border-[#DFB76C] cursor-pointer transition-all"
          >
            <Bell
              className={`w-5 h-5 text-[#D49B28] ${
                bellRinging ? 'animate-bell-ring' : 'group-hover:rotate-12'
              } transition-transform`}
            />
            <span className="font-telugu">{content.blessings.bellRingBtn}</span>
          </button>
        </div>

        {/* Homeowners Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#FAF6EE] border-2 border-[#DFB76C] shadow-xl text-center relative overflow-hidden">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BrassDiya size={26} />
            <Home className="w-5 h-5 text-[#782A15]" />
            <BrassDiya size={26} />
          </div>

          <p className="text-xs uppercase tracking-widest text-[#D49B28] font-bold mb-1">
            {currentLang === 'te' ? 'నూతన గృహస్థులు' : 'New Homeowners'}
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold text-[#782A15] font-serif-en mb-1">
            {couple.groom.firstName} &amp; {couple.bride.firstName}
          </h3>

          <p className="text-base sm:text-lg text-[#542813] font-telugu font-semibold mb-2">
            {couple.groom.fullName[currentLang]} &amp; {couple.bride.fullName[currentLang]}
          </p>

          <p className="text-xs sm:text-sm text-[#782A15] font-bold font-telugu mt-1">
            {couple.familySignature[currentLang]}
          </p>

          <p className="text-xs text-[#542813]/80 italic font-telugu max-w-md mx-auto mt-4">
            {content.blessings.thankYou}
          </p>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-[#DFB76C]/40 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#1EBE5D] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{content.blessings.shareWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#782A15] text-[#FAF6EE] font-semibold text-xs sm:text-sm shadow-md hover:bg-[#542813] transition-colors cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4 text-[#DFB76C]" />
              <span className="font-telugu">{content.blessings.addToCalendar}</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-xs text-[#542813]/80 space-y-1 font-telugu">
          <p>© 2026 {couple.groom.firstName} &amp; {couple.bride.firstName} • {content.footer.tagline}</p>
          <p className="italic text-[11px] text-[#A97A24]">{content.footer.builtNote}</p>
        </div>
      </div>
    </section>
  );
};
