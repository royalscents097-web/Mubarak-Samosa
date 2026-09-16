import React from 'react';
import { MapPin, Phone, Clock, Store, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/foodData';
import { OrderForm } from './OrderForm';
import { MenuItem } from '../types';

interface ContactSectionProps {
  preselectedItem?: MenuItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedItem }) => {
  return (
    <section
      id="contact"
      aria-label="Location and Contact Information"
      className="py-16 sm:py-24 bg-[#F4E4C8]/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <Store className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>FIND US IN GOMAL BAZAR</span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            Visit Mubarak Samosa
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3.5 leading-relaxed">
            Stop by for freshly fried hot samosas or call ahead to have your order packed and ready.
          </p>
        </div>

        {/* 2 Column Layout: Location Info & Order Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start" id="order">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Address & Phone Card */}
            <div className="bg-[#FFF4DF] p-7 sm:p-8 rounded-3xl border border-[#F4E4C8] shadow-sm">
              <h3 className="font-display text-2xl font-bold text-[#321A12] mb-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#8A3F18] mb-6">
                {BUSINESS_INFO.subtitle}
              </p>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EF] border border-[#D99532]/40 flex items-center justify-center shrink-0 text-[#8A3F18]">
                    <MapPin className="w-5 h-5 text-[#E86F24]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#725447]">
                      Location &amp; Address
                    </span>
                    <p className="text-base font-bold text-[#321A12] mt-0.5">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-[#725447] mt-0.5">
                      Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EF] border border-[#D99532]/40 flex items-center justify-center shrink-0 text-[#8A3F18]">
                    <Phone className="w-5 h-5 text-[#E86F24]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#725447]">
                      Direct Orders &amp; Hotline
                    </span>
                    <p className="text-lg font-extrabold text-[#321A12] mt-0.5 font-display tracking-wide">
                      <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="hover:text-[#E86F24] transition-colors">
                        {BUSINESS_INFO.primaryPhone}
                      </a>
                    </p>
                    <p className="text-xs text-[#725447] mt-0.5">
                      Fast takeaway &amp; fresh batch preparation
                    </p>
                  </div>
                </div>

                {/* Daily Service Hours Note (Editable) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EF] border border-[#D99532]/40 flex items-center justify-center shrink-0 text-[#8A3F18]">
                    <Clock className="w-5 h-5 text-[#E86F24]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#725447]">
                      Fresh Batch Timings
                    </span>
                    <p className="text-sm font-bold text-[#321A12] mt-0.5">
                      Morning &bull; Afternoon &bull; Evening Tea Time
                    </p>
                    <p className="text-xs text-[#725447] mt-0.5">
                      Fried fresh daily for the community
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Order CTA Button */}
              <div className="mt-8 pt-6 border-t border-[#F4E4C8]">
                <a
                  id="contact-call-btn"
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#E86F24] hover:bg-[#321A12] text-white font-bold text-base rounded-xl shadow-md transition-all duration-200 active:scale-98"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call to Order: {BUSINESS_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Local Community Card */}
            <div className="bg-[#321A12] text-[#FFF4DF] p-6 rounded-3xl border border-[#21120D] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8A3F18]/60 border border-[#D99532]/40 flex items-center justify-center shrink-0 text-[#D99532]">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#FFF4DF]">
                  Serving Gomal Bazar
                </h4>
                <p className="text-xs text-[#F4E4C8]/80 mt-0.5 leading-relaxed">
                  Friendly local service, clean preparation, and traditional tea-time snacks for District Tank.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Inquiry Form */}
          <div className="lg:col-span-7">
            <OrderForm preselectedItem={preselectedItem} />
          </div>

        </div>
      </div>
    </section>
  );
};
