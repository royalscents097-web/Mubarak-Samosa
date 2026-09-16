import React from 'react';
import { Phone, Utensils, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/foodData';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Mubarak Samosa"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-[#FFF4DF] to-[#FFF9EF] pt-8 pb-16 lg:pt-14 lg:pb-24"
    >
      {/* Subtle warm background elements */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E86F24]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#D99532]/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-4 shadow-xs"
            >
              <Flame className="w-3.5 h-3.5 text-[#E86F24]" />
              <span>MUBARAK SAMOSA &bull; GOMAL BAZAR</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#21120D] leading-[1.12] mb-5"
            >
              Crispy Goodness,<br />
              <span className="text-[#8A3F18]">Made Fresh</span> Every Day.
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#725447] leading-relaxed max-w-xl mb-8"
            >
              Golden, crispy samosas and delicious Pakistani snacks made fresh for every craving.
              Served piping hot with our signature mint &amp; tamarind chutneys in the heart of Gomal Bazar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                id="hero-order-now-btn"
                href="#order"
                onClick={scrollToOrder}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#321A12] hover:bg-[#E86F24] text-[#FFF4DF] hover:text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Order Now</span>
                <span className="text-[#D99532]">&rarr;</span>
              </a>

              <a
                id="hero-explore-menu-btn"
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFF4DF] hover:bg-[#F4E4C8] text-[#321A12] border border-[#D99532]/50 font-bold text-base rounded-xl transition-all duration-200 hover:border-[#8A3F18] text-center"
              >
                <Utensils className="w-4 h-4 text-[#8A3F18]" />
                <span>Explore Our Menu</span>
              </a>

              <a
                id="hero-call-badge"
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="sm:hidden inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#E86F24] text-white font-bold rounded-xl shadow-sm text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call: {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Compact Trust Line */}
            <div
              id="hero-trust-line"
              className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t border-[#F4E4C8] text-xs sm:text-sm font-semibold text-[#8A3F18]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E86F24]" />
                <span>Freshly Prepared</span>
              </div>
              <span className="text-[#D99532] hidden sm:inline">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D99532]" />
                <span>Crispy &amp; Hot</span>
              </div>
              <span className="text-[#D99532] hidden sm:inline">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#B92E20]" />
                <span>Local Favorite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Food Photography */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative background geometry */}
            <div
              className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#D99532]/20 via-[#E86F24]/15 to-transparent rounded-3xl transform rotate-2 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E86F24]/10 rounded-full blur-xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Hero Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF4DF] bg-[#321A12]">
              <img
                src={IMAGES.hero}
                alt="Fresh golden crispy Pakistani samosas served with fresh mint and tamarind chutneys on a rustic plate"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Floating Badge 1: Fresh & Crispy */}
              <div
                className="absolute top-4 left-4 bg-[#321A12]/90 backdrop-blur-md text-[#FFF4DF] border border-[#D99532]/40 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E86F24] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Always Fried Hot
                </span>
              </div>

              {/* Floating Badge 2: Local Specialty */}
              <div
                className="absolute bottom-4 right-4 bg-[#FFF4DF]/95 backdrop-blur-md text-[#321A12] border border-[#D99532] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E86F24] text-white flex items-center justify-center font-bold text-xs">
                  PKR
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-[#725447] uppercase leading-none">Starting At</span>
                  <span className="text-sm font-extrabold text-[#321A12] leading-tight">PKR 40 / Piece</span>
                </div>
              </div>
            </div>

            {/* Subtle spice dot decorations */}
            <div className="hidden sm:flex absolute -left-4 -bottom-4 gap-1.5 pointer-events-none opacity-40">
              <span className="w-2 h-2 rounded-full bg-[#E86F24]" />
              <span className="w-2 h-2 rounded-full bg-[#D99532]" />
              <span className="w-2 h-2 rounded-full bg-[#8A3F18]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
