import React, { useState } from 'react';
import { MapPin, Navigation, Info, Copy, Check } from 'lucide-react';
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
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-1">
            {content.venue.sectionTitle}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-telugu">
            {currentLang === 'te' ? 'నూతన గృహ ప్రవేశ వేదిక' : 'Our New Abode'}
          </h2>
          <p className="text-xs sm:text-sm text-[#523A30] mt-1 italic font-telugu">
            {content.venue.sectionSubtitle}
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="rounded-3xl bg-[#FFFDF9] border-2 border-[#D6A84F] shadow-xl overflow-hidden">
          {/* House Illustration / Image */}
          <div className="relative w-full h-64 sm:h-96 overflow-hidden bg-[#FCF8EE]">
            <img
              src="/assets/images/new_home.jpg"
              alt="Traditional South Indian house adorned with mango leaves and rangoli for Gruhapravesam"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#33221A]/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#751D2A]/90 text-[#F8F0DE] text-xs font-semibold mb-1 border border-[#D6A84F]/50">
                  {currentLang === 'te' ? 'మా కలల నిలయం' : 'Our Dream Home'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-telugu">
                  {venue.name[currentLang]}
                </h3>
              </div>
            </div>
          </div>

          {/* Venue Details Content */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#D6A84F]/40">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-[#751D2A] text-[#D6A84F] shrink-0 mt-1 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#751D2A] font-telugu">
                    {venue.name[currentLang]}
                  </h4>
                  <p className="text-sm text-[#3A2820] mt-1 font-telugu">
                    {venue.addressLine1[currentLang]}
                  </p>
                  <p className="text-xs text-[#523A30] mt-0.5 font-telugu">
                    {venue.addressLine2[currentLang]}, {venue.city[currentLang]}
                  </p>
                  {venue.landmark && (
                    <p className="text-xs text-[#B77B27] mt-1 font-telugu italic">
                      📍 {venue.landmark[currentLang]}
                    </p>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex flex-col items-start md:items-end gap-2">
                {!venue.isConfirmed ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#B77B27]/15 text-[#9E7422] border border-[#B77B27]/30 font-telugu">
                    <Info className="w-3.5 h-3.5" />
                    {content.venue.statusTag}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#386347]/10 text-[#386347]">
                    ✓ ధృవీకరించబడిన వేదిక
                  </span>
                )}
              </div>
            </div>

            {/* Configurable Status Notice */}
            {!venue.isConfirmed && (
              <div className="my-6 p-4 rounded-2xl bg-[#FCF8EE] border border-[#D6A84F]/40 flex items-start gap-3">
                <BrassDiya size={24} className="shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#523A30] leading-relaxed font-telugu">
                  {content.venue.statusNotice}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {venue.isConfirmed && venue.googleMapsUrl ? (
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#751D2A] text-[#F8F0DE] font-semibold text-sm shadow-md hover:bg-[#4a1019] transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#D6A84F]" />
                  <span>{content.venue.directionsBtn}</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5D7BE] text-[#7A6153] font-medium text-xs sm:text-sm cursor-not-allowed border border-[#D6A84F]/40"
                >
                  <Navigation className="w-4 h-4 text-[#7A6153]" />
                  <span>{content.venue.directionsPendingBtn}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FFFDF9] text-[#751D2A] border border-[#D6A84F] text-xs sm:text-sm font-medium hover:bg-[#FCF8EE] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#386347]" />
                    <span className="text-[#386347] font-semibold">{content.venue.addressCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#B77B27]" />
                    <span>{content.venue.copyAddress}</span>
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
