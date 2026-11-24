import React from 'react';
import type { BrandId } from '../data/brands';

interface BrandLogoProps {
  brand: BrandId;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  size = 'md',
  className = '',
}) => {
  const heightMap = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
  };

  if (brand === 'gladchemistry') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src="/images/gladchemistry-logo.jpg"
          alt="Gladchemistry Products Logo"
          className={`${heightMap[size]} w-auto rounded-lg object-contain bg-white p-0.5 shadow-sm border border-emerald-100`}
        />
      </div>
    );
  }

  if (brand === 'felis-be-glad') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {/* Her actual logo, supplied 24 Nov. Replaces the invented star mark. */}
        <img
          src="/images/feliz-logo.jpg"
          alt="Feliz be Glad"
          className={`${heightMap[size]} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 44 44"
        className={`${heightMap[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="44" height="44" rx="12" fill="#0284C7" />
        <circle cx="17" cy="24" r="7" fill="#38BDF8" stroke="white" strokeWidth="2" />
        <circle cx="28" cy="17" r="5" fill="#A3E635" stroke="white" strokeWidth="2" />
        <circle cx="29" cy="29" r="3.5" fill="white" fillOpacity="0.9" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-tight text-sky-950 text-base">
          BUBBLES
        </span>
        <span className="text-[10px] uppercase tracking-[0.16em] text-sky-600 font-bold">
          Detergents
        </span>
      </div>
    </div>
  );
};
