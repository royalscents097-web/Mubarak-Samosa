import React from 'react';
import { Phone, Utensils, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/foodData';

export const FinalCTA: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="final-call-to-action"
      aria-label="Order Now Final Call"
      className="py-16 sm:py-24 bg-[#321A12] text-[#FFF4DF] relative overflow-hidden border-t border-[#21120D]"
    >
      {/* Subtle warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#E86F24]/15 via-[#D99532]/10 to-[#8A3F18]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#21120D] border border-[#D99532]/40 text-[#D99532] text-xs font-bold uppercase tracking-widest mb-5">
          <Flame className="w-3.5 h-3.5 text-[#E86F24]" />
          <span>FRIED HOT &bull; SERVED FRESH</span>
        </div>

        <h2
          id="final-cta-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF4DF] tracking-tight leading-tight mb-4"
        >
          One Call Away From Your Next Crispy Craving.
        </h2>

        <p className="text-base sm:text-lg text-[#F4E4C8]/90 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
          Fresh snacks. Golden crunch. Authentic flavor.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-cta-call-btn"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E86F24] hover:bg-[#D99532] text-white font-bold text-base sm:text-lg rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-white" />
            <span>Call {BUSINESS_INFO.primaryPhone}</span>
          </a>

          <a
            id="final-cta-menu-btn"
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-[#FFF4DF] font-bold text-base rounded-xl transition-colors backdrop-blur-xs"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </a>
        </div>

        <p className="text-xs text-[#F4E4C8]/60 mt-6">
          Location: Gomal Bazar, District Tank &bull; Hot takeaway orders prepared promptly
        </p>
      </div>
    </section>
  );
};
