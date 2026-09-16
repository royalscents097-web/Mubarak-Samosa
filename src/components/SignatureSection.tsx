import React from 'react';
import { Sparkles, Utensils, CheckCircle } from 'lucide-react';
import { IMAGES } from '../data/foodData';

export const SignatureSection: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: 'Crispy Shell',
      desc: 'Golden and perfectly fried with a blistered, flaky texture in every bite.',
    },
    {
      title: 'Flavorful Filling',
      desc: 'Prepared with balanced spices, fragrant cumin, coriander, and fresh herbs.',
    },
    {
      title: 'Freshly Served',
      desc: 'Made to be enjoyed hot straight from the fryer with signature chutneys.',
    },
  ];

  return (
    <section
      id="signature"
      aria-label="The Mubarak Samosa Signature"
      className="py-16 sm:py-24 bg-[#321A12] text-[#FFF4DF] relative overflow-hidden"
    >
      {/* Subtle radial golden glow in background */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#E86F24]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Large Food Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D99532]/40 shadow-2xl bg-[#21120D]">
              <img
                src={IMAGES.aloo}
                alt="Close-up of crispy golden samosa with blistered flaky pastry and fresh chutney"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21120D]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#321A12]/90 backdrop-blur-md border border-[#D99532]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D99532] font-bold">Signature Recipe</span>
                  <p className="font-display text-lg text-[#FFF4DF] font-bold">The Golden Crunch of Gomal</p>
                </div>
                <span className="text-2xl">🥟</span>
              </div>
            </div>
          </div>

          {/* Right: Deep Brown Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Small golden/orange decorative line */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#E86F24] to-[#D99532] rounded-full mb-6" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21120D] border border-[#D99532]/30 text-[#D99532] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E86F24]" />
              <span>THE CRAFT OF CRISPINESS</span>
            </div>

            <h2
              id="signature-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF4DF] leading-tight mb-5"
            >
              The Perfect Bite Starts With a Perfect Crunch.
            </h2>

            <p className="text-base sm:text-lg text-[#F4E4C8]/90 leading-relaxed mb-8">
              At Mubarak Samosa, we believe a great snack should be crispy on the outside,
              flavorful inside, and best enjoyed fresh and hot. That simple commitment is why our
              patrons in Gomal Bazar stop by every afternoon.
            </p>

            {/* Three Features */}
            <div className="space-y-4 w-full mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#D99532]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E86F24]/20 border border-[#E86F24]/40 flex items-center justify-center shrink-0 text-[#D99532] mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#E86F24]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#FFF4DF]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#F4E4C8]/75 mt-0.5 leading-normal">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              id="signature-cta-btn"
              href="#menu"
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E86F24] hover:bg-[#D99532] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Utensils className="w-4 h-4" />
              <span>Try Our Favorites</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
