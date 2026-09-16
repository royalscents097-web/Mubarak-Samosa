import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/foodData';
import { CategoryFilter } from './CategoryFilter';
import { MenuCard } from './MenuCard';
import { Sparkles, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/foodData';

interface MenuSectionProps {
  onSelectItemForOrder: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItemForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      aria-label="Our Menu and Specialties"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFF9EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DF] border border-[#D99532]/40 text-[#8A3F18] font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E86F24]" />
            <span>OUR SPECIALTIES</span>
          </div>

          <h2
            id="menu-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21120D] tracking-tight leading-tight"
          >
            Crispy Favorites, Full of Flavor.
          </h2>

          <p className="text-[#725447] text-base sm:text-lg mt-3.5 leading-relaxed">
            Simple ingredients, bold flavor, and that unmistakable crispy bite.
            Every item is fried fresh in small batches for genuine crunch.
          </p>
        </div>

        {/* Category Navigation */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onSelectForOrder={(selected) => {
                onSelectItemForOrder(selected);
                const orderEl = document.getElementById('order');
                if (orderEl) {
                  orderEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>

        {/* Quick Order Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#FFF4DF] border border-[#F4E4C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display text-lg font-bold text-[#321A12]">
              Need a custom snack box or large party order?
            </h4>
            <p className="text-sm text-[#725447]">
              Call ahead and we’ll have piping hot samosas and pakoras packed ready for you.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E86F24] hover:bg-[#321A12] text-white font-bold text-sm rounded-xl shadow-sm transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.primaryPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
