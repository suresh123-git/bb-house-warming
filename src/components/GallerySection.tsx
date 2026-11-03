import React, { useState } from 'react';
import { ExternalLink, X, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { OrnamentalDivider } from './Decorations';
import type { Language } from '../data/invitation';
import { invitationData } from '../data/invitation';

interface GallerySectionProps {
  currentLang: Language;
}

interface GalleryItem {
  src: string;
  alt: string;
  title: Record<string, string>;
  desc: Record<string, string>;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      src: '/assets/images/simhadwaram.jpg',
      alt: 'The Carved Simhadwaram Entrance',
      title: {
        te: 'మంగళ సింహద్వారం',
        en: 'The Sacred Simhadwaram',
      },
      desc: {
        te: 'మామిడి తోరణాలు, ఇత్తడి గంటలతో ముస్తాబైన గడప',
        en: 'Hand-carved teak threshold adorned with mango toranam & temple bells',
      },
    },
    {
      src: '/assets/images/new_home.jpg',
      alt: 'Our New Home and Courtyard',
      title: {
        te: 'శ్రీ నిలయం ప్రాంగణం',
        en: 'Sri Nilayam Courtyard',
      },
      desc: {
        te: 'బియ్యప్పిండి ముగ్గులు, దీప కాంతులతో మా కలల నిలయం',
        en: 'Traditional courtyard decorated with rangoli muggu and deepams',
      },
    },
    {
      src: '/assets/images/couple_together.jpg',
      alt: 'Bikas & Bhargavi',
      title: {
        te: 'గృహస్థులు: బికాస్ & భార్గవి',
        en: 'Homeowners: Bikas & Bhargavi',
      },
      desc: {
        te: 'నూతన గృహంలోకి అడుగుపెడుతున్న శుభవేళ',
        en: 'Looking forward to welcoming family & friends into our home',
      },
    },
    {
      src: '/assets/images/lord_ganesha.jpg',
      alt: 'Lord Sri Ganesha Blessings',
      title: {
        te: 'వాస్తు & గణపతి ఆశీర్వాదం',
        en: 'Sacred Ganapathi Blessing',
      },
      desc: {
        te: 'అవిఘ్నంగా ప్రారంభమైన గృహప్రవేశ వేడుక',
        en: 'Invoking peace and protection for all dwelling here',
      },
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49B28]/15 text-[#A97A24] text-xs font-bold uppercase tracking-wider font-telugu mb-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{currentLang === 'te' ? 'చిత్ర మాలిక' : 'Visual Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#782A15] font-telugu">
            {currentLang === 'te' ? 'గృహ శోభ & మధుర క్షణాలు' : 'Home Glimpses & Memories'}
          </h2>
          <p className="text-xs sm:text-sm text-[#542813] mt-1 italic font-telugu">
            {currentLang === 'te'
              ? 'సింహద్వారం నుండి కలల నిలయం వరకు...'
              : 'From the sacred threshold to our cherished new beginning...'}
          </p>
        </div>

        {/* 4 Cards Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#FAF6EE] border border-[#DFB76C] shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
              />

              {/* Hover overlay with housewarming caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B140B]/90 via-[#2B140B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white text-xs">
                <span className="font-bold font-telugu text-sm text-[#DFB76C]">
                  {item.title[currentLang] || item.title.en}
                </span>
                <span className="text-[11px] font-telugu text-white/90 line-clamp-2 mt-0.5">
                  {item.desc[currentLang] || item.desc.en}
                </span>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-[#DFB76C]">
                  <ZoomIn className="w-3 h-3" />
                  <span>{currentLang === 'kn' ? 'ನೋಡಿ' : currentLang === 'te' ? 'చూడండి' : 'Enlarge'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to wedding website */}
        <div className="mt-8 text-center">
          <a
            href={invitationData.weddingWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF6EE] text-[#782A15] border border-[#DFB76C] shadow-xs hover:bg-[#EFE3D0] transition-all text-xs sm:text-sm font-semibold font-telugu"
          >
            <span>{currentLang === 'te' ? 'మా వివాహ వెబ్‌సైట్ చూడండి' : 'Visit Our Wedding Website'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D49B28]" />
          </a>
        </div>

        {/* Modal Lightbox */}
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo Preview"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-lg w-full rounded-2xl bg-[#FAF6EE] border-2 border-[#DFB76C] p-3 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#782A15] text-white hover:bg-[#542813] transition-colors"
                aria-label="Close"
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
                <h4 className="text-base font-bold text-[#782A15] font-telugu">
                  {activePhoto.title[currentLang] || activePhoto.title.en}
                </h4>
                <p className="text-xs text-[#542813] font-telugu mt-0.5">
                  {activePhoto.desc[currentLang] || activePhoto.desc.en}
                </p>
                <p className="text-[11px] text-[#D49B28] mt-1 font-semibold">
                  శ్రీ నిలయం • గృహప్రవేశం 2026
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
