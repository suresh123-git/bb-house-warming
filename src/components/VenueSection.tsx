import React, { useState } from 'react';
import { MapPin, Navigation, Info, Copy, Check, Home } from 'lucide-react';
import { BrassDiya, OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface VenueSectionProps {
  currentLang: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const { venue } = invitationData;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `${venue.name[currentLang]}, ${venue.addressLine1[currentLang]}, ${venue.addressLine2[currentLang]}, ${venue.city[currentLang]}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{content.venue.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {content.venue.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {content.venue.subtitle}
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="rounded-3xl bg-[#FAF6EE] border-2 border-[#DFB76C] shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FAF6EE] via-[#EFE3D0] to-[#FAF6EE] border-b border-[#DFB76C]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-[#9C4129] text-[#DFB76C] shrink-0 mt-0.5 shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#D49B28] uppercase tracking-wider font-telugu">
                  {currentLang === 'te' ? 'గృహ నామధేయం' : 'Home Name'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#782A15] font-telugu">
                  {venue.name[currentLang]}
                </h3>
                <p className="text-xs text-[#542813] font-telugu mt-0.5">
                  {venue.addressLine2[currentLang]}, {venue.city[currentLang]}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#D49B28]/15 text-[#A97A24] border border-[#D49B28]/30 font-telugu">
              <Info className="w-3.5 h-3.5" />
              {content.venue.statusBadge}
            </span>
          </div>

          {/* Details body */}
          <div className="p-6 sm:p-8">
            <div className="space-y-3 mb-6 text-sm text-[#542813] font-telugu">
              <p className="font-semibold text-base text-[#782A15]">
                📍 {venue.addressLine1[currentLang]}
              </p>
              {venue.landmark && (
                <p className="text-xs text-[#542813]/80 italic">
                  🧭 {venue.landmark[currentLang]}
                </p>
              )}
            </div>

            {/* Configurable Status Notice */}
            {!venue.isConfirmed && (
              <div className="p-4 rounded-2xl bg-[#EFE3D0]/60 border border-[#DFB76C]/60 flex items-start gap-3 mb-6">
                <BrassDiya size={22} className="shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#542813] leading-relaxed font-telugu">
                  {content.venue.statusNotice}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {venue.googleMapsUrl ? (
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B86C3C] hover:bg-[#A35D32] text-white font-medium text-xs sm:text-sm shadow-[0_4px_16px_rgba(184,108,60,0.3)] transition-all"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span className={currentLang === 'kn' ? 'font-kannada' : currentLang === 'te' ? 'font-telugu' : 'font-sans'}>{content.venue.directionsPending}</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8D8BF] text-[#7A6153] font-medium text-xs sm:text-sm cursor-not-allowed border border-[#DFB76C]/40"
                >
                  <Navigation className="w-4 h-4 text-[#7A6153]" />
                  <span className="font-telugu">{content.venue.directionsPending}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[#782A15] border border-[#DFB76C] text-xs sm:text-sm font-semibold hover:bg-[#EFE3D0] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#2C5E3B]" />
                    <span className="text-[#2C5E3B] font-telugu">{content.venue.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D49B28]" />
                    <span className="font-telugu">{content.venue.copyBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <OrnamentalDivider />
      </div>
    </section>
  );
};
