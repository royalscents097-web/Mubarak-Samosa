import React from 'react';
import { MenuCategory } from '../types';

interface CategoryFilterProps {
  activeCategory: MenuCategory;
  onSelectCategory: (cat: MenuCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const categories: { id: MenuCategory; label: string; count?: number }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'samosas', label: 'Samosas' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'chaat', label: 'Chaat' },
    { id: 'drinks', label: 'Drinks' },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 my-8" id="menu-category-filter">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            id={`filter-btn-${cat.id}`}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#321A12] text-[#FFF4DF] shadow-md transform -translate-y-0.5 border border-[#321A12]'
                : 'bg-[#FFF4DF] text-[#725447] hover:text-[#321A12] hover:bg-[#F4E4C8] border border-[#F4E4C8]'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};
