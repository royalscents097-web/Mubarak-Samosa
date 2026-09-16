import React from 'react';
import { Sparkles, Flame, HeartHandshake, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: 'FRESH DAILY',
      subtitle: 'Prepared fresh for you',
    },
    {
      icon: Flame,
      title: 'CRISPY & HOT',
      subtitle: 'Served at its best',
    },
    {
      icon: HeartHandshake,
      title: 'AUTHENTIC TASTE',
      subtitle: 'Classic Pakistani flavors',
    },
    {
      icon: MapPin,
      title: 'LOCAL FAVORITE',
      subtitle: 'Serving Gomal Bazar',
    },
  ];

  return (
    <section
      id="quick-trust-strip"
      aria-label="Quality and Freshness Guarantees"
      className="bg-[#321A12] text-[#FFF4DF] border-y border-[#21120D] py-6 sm:py-7 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-2 rounded-xl transition-colors hover:bg-white/5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#8A3F18]/60 border border-[#D99532]/30 flex items-center justify-center shrink-0 text-[#D99532] shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-[#FFF4DF]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F4E4C8]/80 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
