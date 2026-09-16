import React, { useState } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/foodData';
import { Phone, MapPin, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openPrivacy = () => {
    setModalContent({
      title: 'Privacy Policy',
      content:
        'Mubarak Samosa respects the privacy of our valued customers. Any customer details (such as names and phone numbers submitted for order inquiries) are used solely to confirm orders and communicate pickup status. We never sell, share, or disclose customer contact details to third parties.',
    });
  };

  const openTerms = () => {
    setModalContent({
      title: 'Terms of Service',
      content:
        'All food items from Mubarak Samosa are freshly prepared and subject to daily batch availability. Prices and availability are clearly displayed in Pakistani Rupees (PKR) and may be updated periodically to reflect fresh market ingredients.',
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#21120D] text-[#FFF4DF] pt-14 pb-8 border-t border-black/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo variant="light" size="lg" showSubtitle={false} />
            
            <p className="font-display text-lg text-[#D99532] font-semibold mt-3 tracking-wide">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-sm text-[#F4E4C8]/70 mt-2 max-w-sm leading-relaxed">
              Serving Gomal Bazar and District Tank with hot, freshly fried authentic Pakistani
              samosas, crispy pakoras, and traditional tea-time snacks.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-base uppercase tracking-widest text-[#D99532] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#F4E4C8]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-base uppercase tracking-widest text-[#D99532] mb-4">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-sm text-[#F4E4C8]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86F24] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}, Khyber Pakhtunkhwa</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E86F24] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="font-bold text-white hover:text-[#D99532] transition-colors"
                  >
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E86F24] hover:bg-[#D99532] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Order via Phone</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4E4C8]/60">
          <p>
            &copy; {BUSINESS_INFO.year} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={openPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={openTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-[#FFF9EF] text-[#241712] max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-[#F4E4C8] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FFF4DF] hover:bg-[#F4E4C8] text-[#321A12] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-2xl font-bold text-[#321A12] mb-3">
              {modalContent.title}
            </h3>
            <p className="text-sm text-[#725447] leading-relaxed">
              {modalContent.content}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};
