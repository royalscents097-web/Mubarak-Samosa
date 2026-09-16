import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/foodData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-24 bg-[#FFF9EF] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>COMMON QUESTIONS</span>
          </div>

          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3 leading-relaxed">
            Everything you need to know about our freshly made snacks, ordering, and location.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFF4DF] border-[#D99532]/60 shadow-sm'
                    : 'bg-white/60 border-[#F4E4C8] hover:border-[#D99532]/30'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E86F24] rounded-2xl"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-[#321A12] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#321A12] text-[#FFF4DF] rotate-180'
                        : 'bg-[#FFF4DF] text-[#8A3F18] border border-[#F4E4C8]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#725447] leading-relaxed border-t border-[#F4E4C8]/60 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
