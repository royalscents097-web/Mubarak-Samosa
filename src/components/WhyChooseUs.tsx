import React from 'react';
import { Sparkles, ShieldCheck, Flame, PhoneCall, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Freshly Prepared',
      description: 'Food prepared with freshness and quality in mind, fried throughout the day.',
      color: 'text-[#D99532]',
    },
    {
      icon: ShieldCheck,
      title: 'Crispy Every Time',
      description: 'That unmistakable golden crunch you expect from a great Pakistani samosa.',
      color: 'text-[#E86F24]',
    },
    {
      icon: Flame,
      title: 'Authentic Flavor',
      description: 'Classic Pakistani snack flavors with balanced spices and house-made chutneys.',
      color: 'text-[#B92E20]',
    },
    {
      icon: PhoneCall,
      title: 'Easy to Order',
      description: 'Call directly and make your order quickly without waiting in long queues.',
      color: 'text-[#8A3F18]',
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Mubarak Samosa"
      className="py-16 sm:py-24 bg-[#FFF9EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>THE MUBARAK STANDARD</span>
          </div>

          <h2
            id="why-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            Why Customers Keep Coming Back
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3.5 leading-relaxed">
            From the crispiness of our handcrafted pastry to the warmth of our local service,
            here is what makes every visit special.
          </p>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFF4DF] p-6 sm:p-7 rounded-2xl border border-[#F4E4C8] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#D99532]/30 flex items-center justify-center mb-5 shadow-xs">
                    <Icon className={`w-6 h-6 ${reason.color}`} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#321A12] mb-2.5">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#725447] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-[#D99532]/40 rounded-full mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
