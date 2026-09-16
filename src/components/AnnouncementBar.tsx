import React from 'react';
import { Flame } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Daily announcements"
      id="top-announcement-bar"
      className="bg-[#321A12] text-[#FFF4DF] border-b border-[#21120D] py-1.5 px-4 text-xs tracking-wider"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <Flame className="w-3.5 h-3.5 text-[#E86F24] shrink-0 animate-pulse" aria-hidden="true" />
        <span className="font-semibold uppercase tracking-widest text-[11px] sm:text-xs">
          HOT &bull; FRESH &bull; CRISPY &mdash; MADE FOR EVERY CRAVING
        </span>
        <span className="hidden md:inline-block text-[#D99532]">&bull;</span>
        <span className="hidden md:inline-block text-[#F4E4C8] text-[11px]">
          Gomal Bazar, District Tank
        </span>
      </div>
    </aside>
  );
};
