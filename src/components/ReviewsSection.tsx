import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { REVIEWS } from '../data/foodData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Customer Reviews and Testimonials"
      className="py-16 sm:py-24 bg-[#FFF4DF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9EF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>COMMUNITY VOICES</span>
          </div>

          <h2
            id="reviews-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            What Our Customers Say
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3.5 leading-relaxed">
            The proof is in every crunch. Here is what snack lovers in Gomal Bazar share about Mubarak Samosa.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFF9EF] p-7 rounded-2xl border border-[#F4E4C8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D99532] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#8A3F18] bg-[#FFF4DF] px-2.5 py-0.5 rounded-md border border-[#D99532]/30 mb-3">
                  {rev.highlight}
                </span>

                {/* Quote */}
                <p className="text-base text-[#241712] font-medium leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-6 mt-6 border-t border-[#F4E4C8] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#321A12] text-[#FFF4DF] font-bold text-xs flex items-center justify-center font-display">
                  MS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#321A12]">{rev.author}</h4>
                  <p className="text-xs text-[#725447]">Gomal Bazar, Tank</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
