import React, { useState } from 'react';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { uiContent, invitationData } from '../data/invitation';

interface GallerySectionProps {
  currentLang: Language;
}

interface GalleryItem {
  src: string;
  alt: string;
  captionKey: 'caption1' | 'caption2' | 'caption3' | 'caption4';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const content = uiContent[currentLang];
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      src: '/assets/images/couple_together.jpg',
      alt: 'Bikas and Bhargavi together',
      captionKey: 'caption1',
    },
    {
      src: '/assets/images/mandap_blessing.png',
      alt: 'Mandap sacred blessings',
      captionKey: 'caption2',
    },
    {
      src: '/assets/images/groom.jpg',
      alt: 'Bikas Jena',
      captionKey: 'caption3',
    },
    {
      src: '/assets/images/bride.jpg',
      alt: 'Bhargavi Diddi',
      captionKey: 'caption4',
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B77B27] font-semibold mb-1">
            {content.gallery.sectionTitle}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#751D2A] font-telugu">
            {currentLang === 'te' ? 'మా మధుర స్మృతులు' : 'Cherished Memories'}
          </h2>
          <p className="text-xs sm:text-sm text-[#523A30] mt-1 italic font-telugu">
            {content.gallery.sectionSubtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#FCF8EE] border border-[#D6A84F]/60 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                onError={(e) => {
                  // Fallback graceful placeholder if image is unavailable
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#751D2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="font-telugu line-clamp-2">
                    {content.gallery[item.captionKey]}
                  </span>
                  <ZoomIn className="w-4 h-4 text-[#D6A84F] shrink-0 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Wedding Website */}
        <div className="mt-8 text-center">
          <a
            href={invitationData.weddingWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] text-[#751D2A] border border-[#D6A84F] shadow-xs hover:bg-[#FCF8EE] transition-all text-xs sm:text-sm font-semibold font-telugu"
          >
            <span>{content.gallery.viewWeddingSite}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B77B27]" />
          </a>
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo Preview"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-lg w-full rounded-2xl bg-[#FFFDF9] border-2 border-[#D6A84F] p-3 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#751D2A] text-white hover:bg-[#4a1019] transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black/5">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="max-h-[70vh] w-auto object-contain mx-auto rounded-lg"
                />
              </div>

              <div className="mt-3 px-2 text-center">
                <p className="text-sm font-semibold text-[#751D2A] font-telugu">
                  {content.gallery[activePhoto.captionKey]}
                </p>
                <p className="text-xs text-[#523A30] mt-0.5">
                  Bikas &amp; Bhargavi • Gruhapravesam 2026
                </p>
              </div>
            </div>
          </div>
        )}

        <OrnamentalDivider />
      </div>
    </section>
  );
};
