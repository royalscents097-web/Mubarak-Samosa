import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/foodData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'menu', 'about', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF4DF]/95 backdrop-blur-md shadow-md border-b border-[#F4E4C8]/80 py-2.5'
          : 'bg-[#FFF9EF] border-b border-[#F4E4C8]/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="focus:outline-none focus:ring-2 focus:ring-[#E86F24] rounded-lg p-0.5"
          aria-label="Mubarak Samosa - Go to top"
        >
          <Logo variant="dark" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'text-[#321A12] bg-[#F4E4C8]'
                    : 'text-[#725447] hover:text-[#321A12] hover:bg-[#FFF4DF]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Call to Order */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="navbar-call-btn"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#E86F24] hover:bg-[#321A12] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            aria-label={`Call Mubarak Samosa at ${BUSINESS_INFO.primaryPhone}`}
          >
            <Phone className="w-4 h-4 text-white group-hover:animate-bounce shrink-0" />
            <span className="whitespace-nowrap">Call to Order</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            id="mobile-quick-call-btn"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="p-2 text-white bg-[#E86F24] rounded-lg shadow-sm active:scale-95"
            aria-label="Call Mubarak Samosa"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#321A12] bg-[#FFF4DF] hover:bg-[#F4E4C8] border border-[#F4E4C8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E86F24]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden border-t border-[#F4E4C8] bg-[#FFF4DF] px-4 pt-3 pb-6 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-2"
        >
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#E86F24] text-white'
                    : 'text-[#321A12] hover:bg-[#F4E4C8]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-[#F4E4C8]">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#321A12] text-[#FFF4DF] hover:bg-[#E86F24] font-bold rounded-xl shadow-md text-base transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-[#D99532]" />
                <span>Call to Order: {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <p className="text-center text-xs text-[#725447] mt-2 font-medium">
                Gomal Bazar, District Tank &bull; Fresh &amp; Crispy Daily
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
