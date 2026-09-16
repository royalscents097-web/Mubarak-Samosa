import React from 'react';
import { Phone, Utensils, Flame, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/foodData';

export const SpecialOfferSection: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="special-offer"
      aria-label="Order Hotline and Special Offer"
      className="py-14 sm:py-18 bg-gradient-to-r from-[#E86F24] via-[#D99532] to-[#E86F24] text-white relative overflow-hidden shadow-inner"
    >
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFF4DF 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#321A12]/30 backdrop-blur-xs border border-white/20 text-[#FFF4DF] font-bold text-xs uppercase tracking-widest mb-4">
          <Flame className="w-3.5 h-3.5 text-[#FFF4DF] animate-bounce" />
          <span>CALL &bull; ORDER &bull; ENJOY</span>
        </div>

        <h2
          id="offer-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF9EF] tracking-tight leading-tight mb-4"
        >
          Craving Something Crispy?
        </h2>

        <p className="text-base sm:text-lg text-[#FFF4DF]/95 max-w-2xl mx-auto leading-relaxed mb-8">
          Fresh samosas, tasty snacks, and bold Pakistani flavors are just a call away.
          Have them fried golden and ready for pickup in Gomal Bazar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="offer-call-btn"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#321A12] hover:bg-[#21120D] text-[#FFF4DF] font-bold text-base sm:text-lg rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-[#D99532]" />
            <span>Call {BUSINESS_INFO.primaryPhone}</span>
          </a>

          <a
            id="offer-menu-btn"
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/15 hover:bg-white/25 text-white border border-white/40 font-bold text-base rounded-xl transition-colors backdrop-blur-xs"
          >
            <Utensils className="w-4 h-4" />
            <span>View Menu</span>
          </a>
        </div>

        <p className="text-xs text-[#FFF4DF]/80 mt-5 font-medium">
          Hot pickup available at Gomal Bazar, District Tank &bull; Call {BUSINESS_INFO.primaryPhone}
        </p>
      </div>
    </section>
  );
};
