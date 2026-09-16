import React from 'react';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelectForOrder: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelectForOrder }) => {
  return (
    <article
      id={`menu-card-${item.id}`}
      className="group flex flex-col justify-between bg-[#FFF4DF] rounded-2xl border border-[#F4E4C8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden relative"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#321A12]">
        <img
          src={item.image}
          alt={item.altText}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 left-3 bg-[#321A12]/90 backdrop-blur-xs text-[#FFF4DF] text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#D99532]/40 shadow-xs">
            {item.badge}
          </div>
        )}

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-[#FFF9EF]/95 backdrop-blur-xs text-[#321A12] px-3 py-1.5 rounded-lg border border-[#D99532] shadow-md flex items-baseline gap-1 font-display">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A3F18]">PKR</span>
          <span className="text-lg font-bold text-[#321A12] leading-none">{item.price}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#321A12] group-hover:text-[#8A3F18] transition-colors">
              {item.name}
            </h3>
            {item.urduName && (
              <span className="text-sm font-medium text-[#8A3F18]/80 font-serif" dir="rtl">
                {item.urduName}
              </span>
            )}
          </div>

          <p className="text-sm text-[#725447] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Card Footer: Action */}
        <div className="pt-5 mt-4 border-t border-[#F4E4C8]/80 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#725447] font-semibold">
              Serving
            </span>
            <span className="text-xs font-bold text-[#321A12]">
              Fresh &amp; Hot
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectForOrder(item)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#321A12] group-hover:bg-[#E86F24] text-[#FFF4DF] hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition-colors duration-200 cursor-pointer active:scale-95"
            aria-label={`Order ${item.name} for PKR ${item.price}`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </article>
  );
};
