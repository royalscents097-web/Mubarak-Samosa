import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { MenuSection } from './components/MenuSection';
import { SignatureSection } from './components/SignatureSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MenuItem } from './types';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/foodData';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleSelectMenuItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#241712] font-sans selection:bg-[#E86F24] selection:text-white">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1" id="main-content">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Quick Trust Strip */}
        <TrustStrip />

        {/* 5. Featured Menu & Category Filter */}
        <MenuSection onSelectItemForOrder={handleSelectMenuItem} />

        {/* 6. Signature Food Split Section */}
        <SignatureSection />

        {/* 7. Editorial About Story */}
        <AboutSection />

        {/* 8. Food Photography Gallery & Lightbox */}
        <GallerySection />

        {/* 9. Special Offer Promotional Banner */}
        <SpecialOfferSection />

        {/* 10. Why Choose Us (4 Pillars) */}
        <WhyChooseUs />

        {/* 11. Customer Testimonials */}
        <ReviewsSection />

        {/* 12. Location & Order Inquiry Form */}
        <ContactSection preselectedItem={selectedMenuItem} />

        {/* 13. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 14. Final Conversion Call to Action */}
        <FinalCTA />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Floating Call Button for mobile ease */}
      <aside
        aria-label="Quick contact hotline"
        className="fixed bottom-5 right-5 z-30 sm:hidden"
      >
        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex items-center gap-2 px-4 py-3 bg-[#E86F24] text-white rounded-full shadow-2xl font-bold text-xs tracking-wider uppercase border-2 border-[#FFF9EF] active:scale-95 transition-transform"
          aria-label="Direct call Mubarak Samosa"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call: {BUSINESS_INFO.primaryPhone}</span>
        </a>
      </aside>
    </div>
  );
}
