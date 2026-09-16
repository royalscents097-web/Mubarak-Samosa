import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg leading-tight',
    md: 'text-xl leading-tight',
    lg: 'text-2xl leading-none',
  };

  return (
    <div className="flex items-center gap-2.5 select-none group" id="brand-logo">
      {/* Original Samosa Geometric Mark */}
      <div
        className={`relative flex items-center justify-center rounded-xl p-1.5 transition-transform duration-300 group-hover:scale-105 ${
          iconSizes[size]
        } ${isDark ? 'bg-[#321A12] text-[#D99532]' : 'bg-[#FFF4DF] text-[#E86F24]'}`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Samosa golden triangle body */}
          <path
            d="M18 5L31 29C31.5 29.8 30.8 31 29.8 31H6.2C5.2 31 4.5 29.8 5 29L18 5Z"
            fill="#D99532"
            stroke={isDark ? '#FFF4DF' : '#321A12'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Inner golden fold line */}
          <path
            d="M18 9L26.5 27H9.5L18 9Z"
            fill="#E86F24"
            fillOpacity="0.85"
          />
          {/* Traditional pastry crimp line */}
          <path
            d="M18 5V30"
            stroke={isDark ? '#321A12' : '#8A3F18'}
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          {/* Subtle steam wafts */}
          <path
            d="M14 3C15 1.5 16 2.5 17 1"
            stroke="#D99532"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M19 3C20 1.5 21 2.5 22 1"
            stroke="#E86F24"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-display font-bold tracking-wider uppercase ${titleSizes[size]} ${
            isDark ? 'text-[#321A12]' : 'text-[#FFF4DF]'
          }`}
        >
          Mubarak
        </span>
        <span
          className={`font-display font-semibold tracking-widest text-xs uppercase -mt-0.5 ${
            isDark ? 'text-[#8A3F18]' : 'text-[#D99532]'
          }`}
        >
          Samosa
        </span>
        {showSubtitle && size === 'lg' && (
          <span className="text-[10px] tracking-wider text-[#725447] uppercase font-medium mt-0.5">
            Gomal Bazar • District Tank
          </span>
        )}
      </div>
    </div>
  );
};
