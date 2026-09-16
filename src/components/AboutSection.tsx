import React from 'react';
import { Heart, MapPin, Coffee, Sparkles } from 'lucide-react';
import { IMAGES, BUSINESS_INFO } from '../data/foodData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Mubarak Samosa"
      className="py-16 sm:py-24 bg-[#FFF4DF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9EF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E86F24]" />
              <span>OUR STORY</span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight mb-6"
            >
              Good Food. Simple Ingredients. A Lot of Flavor.
            </h2>

            {/* Natural Body Copy from the prompt */}
            <div className="space-y-4 text-base sm:text-lg text-[#725447] leading-relaxed">
              <p>
                Mubarak Samosa brings the joy of fresh, crispy Pakistani snacks to Gomal Bazar.
                Our focus is simple: prepare delicious food, serve it fresh, and give every
                customer a reason to come back.
              </p>

              <p>
                Whether you’re grabbing a quick evening snack, ordering for friends, or enjoying
                a plate with chai, Mubarak Samosa is made for those everyday moments when only
                something crispy will do.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#F4E4C8]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFF9EF] border border-[#D99532]/50 flex items-center justify-center shrink-0 text-[#8A3F18]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#321A12]">Gomal Bazar</h4>
                  <p className="text-xs text-[#725447]">District Tank, KP</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFF9EF] border border-[#D99532]/50 flex items-center justify-center shrink-0 text-[#8A3F18]">
                  <Heart className="w-4 h-4 text-[#B92E20]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#321A12]">Traditional Spices</h4>
                  <p className="text-xs text-[#725447]">Clean &amp; pure blend</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFF9EF] border border-[#D99532]/50 flex items-center justify-center shrink-0 text-[#8A3F18]">
                  <Coffee className="w-4 h-4 text-[#8A3F18]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#321A12]">Perfect With Chai</h4>
                  <p className="text-xs text-[#725447]">The afternoon ritual</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF9EF] bg-[#321A12]">
              <img
                src={IMAGES.shop}
                alt="Atmospheric view of Mubarak Samosa local snack shop counter in Gomal Bazar"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21120D]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FFF9EF]/95 backdrop-blur-md border border-[#D99532] shadow-lg">
                <p className="font-display text-base font-bold text-[#321A12]">
                  Mubarak Samosa &bull; Gomal Bazar
                </p>
                <p className="text-xs text-[#725447] mt-0.5">
                  Serving warm, fresh fried snacks to the District Tank community.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
