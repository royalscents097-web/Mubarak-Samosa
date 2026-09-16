import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/foodData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Camera, ArrowUpRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      aria-label="Food Photography Gallery"
      className="py-16 sm:py-24 bg-[#FFF9EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>AUTHENTIC FOOD GALLERY</span>
          </div>

          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            Made to Make You Hungry.
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3.5 leading-relaxed">
            A close-up look at our freshly fried samosas, crispy pakoras, savory rolls, and homemade chutneys.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#321A12] border border-[#F4E4C8] shadow-sm hover:shadow-xl transition-all duration-300 ${
                item.span ? item.span : ''
              }`}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View ${item.title} photo`}
            >
              <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Warm Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21120D]/85 via-[#21120D]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D99532]">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#FFF4DF] leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  {/* Elegant Arrow */}
                  <div className="w-8 h-8 rounded-lg bg-[#E86F24] text-white flex items-center justify-center shrink-0 transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#D99532] transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
