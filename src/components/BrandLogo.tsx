import React from 'react';
import type { BrandId } from '../data/brands';

/* ------------------------------------------------------------------ */
/*  Brand logos                                                       */
/*                                                                    */
/*  Senior-dev detail: a logo is never a JPEG in a white box. The      */
/*  Gladchemistry mark is the leaf lifted out of her artwork as a      */
/*  transparent PNG, set beside the name in live type — crisp at any   */
/*  density, and it recolours to sit on the dark header or the cream   */
/*  page without a plate behind it.                                   */
/* ------------------------------------------------------------------ */

interface BrandLogoProps {
  brand: BrandId;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Renders the Gladchemistry name in white for use on the dark header. */
  onDark?: boolean;
  /** Hides the wordmark and shows the mark alone (favicons, tight spaces). */
  markOnly?: boolean;
}

const MARK_H = { sm: 'h-7', md: 'h-9', lg: 'h-14' } as const;
/* The Feliz wordmark is wider than it is tall, so it is sized by height on a
   different scale — matching cap-height to the Gladchemistry mark instead. */
const WORDMARK_H = { sm: 'h-5', md: 'h-7', lg: 'h-[42px]' } as const;
const NAME_SIZE = { sm: 'text-[15px]', md: 'text-[19px]', lg: 'text-[28px]' } as const;
/* The gap scales with the mark. A fixed 8px gap is right at 36px and visibly
   tight at 56px — this is the kind of thing that makes a lock-up look assembled
   rather than drawn. */
const GAP = { sm: 'gap-[7px]', md: 'gap-[9px]', lg: 'gap-[13px]' } as const;
const SUB_SIZE = { sm: 'text-[7px]', md: 'text-[8px]', lg: 'text-[10px]' } as const;

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  size = 'md',
  className = '',
  onDark = false,
  markOnly = false,
}) => {
  if (brand === 'gladchemistry') {
    return (
      <div className={`inline-flex items-center ${GAP[size]} ${className}`}>
        <img
          src={onDark ? '/images/logos/gc-mark-solid.png' : '/images/logos/gc-mark.png'}
          alt=""
          aria-hidden
          className={`${MARK_H[size]} shrink-0`}
          width={267}
          height={267}
          /* On ink the white body of the leaf is kept solid, so the mark reads as
             the printed emblem rather than dissolving into the header. */
          style={{ filter: onDark ? 'none' : 'drop-shadow(0 1px 1px rgba(0,0,0,.16))' }}
        />
        {!markOnly && (
          <span className="flex flex-col leading-none" style={{ paddingTop: size === 'lg' ? 2 : 1 }}>
            <span
              className={`font-display font-extrabold ${NAME_SIZE[size]}`}
              style={{ letterSpacing: '-0.035em', color: onDark ? '#fff' : '#2e3a30' }}
            >
              Glad<span style={{ color: onDark ? '#a9e07a' : '#3ea34a' }}>chemistry</span>
            </span>
            <span
              className={`${SUB_SIZE[size]} font-extrabold uppercase`}
              style={{
                letterSpacing: '0.28em',
                color: onDark ? 'rgba(255,255,255,.45)' : 'rgba(46,58,48,.45)',
              }}
            >
              products
            </span>
          </span>
        )}
      </div>
    );
  }

  if (brand === 'felis-be-glad') {
    /* Her own letterforms, untouched — but the white JPEG ground has been taken
       out so the mark sits on the tinted stage instead of on a white sticker.
       The type is her red, sampled from the artwork itself. */
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/images/logos/feliz-wordmark.png"
          alt="Feliz be Glad"
          className={`${WORDMARK_H[size]} w-auto`}
          width={648}
          height={331}
        />
      </div>
    );
  }

  /* Bubbles: no supplied artwork, so the mark is drawn, and the name is live
     type to match the Gladchemistry treatment instead of a second visual voice. */
  return (
    <div className={`inline-flex items-center ${GAP[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={`${MARK_H[size]} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="20" cy="21" r="15" fill="#0ea5e9" fillOpacity="0.16" />
        <circle cx="20" cy="21" r="11.5" fill="#0ea5e9" fillOpacity="0.30" />
        <circle cx="16.5" cy="25" r="6" fill="#38bdf8" />
        <circle cx="26" cy="16" r="4.2" fill="#a3e635" />
        <circle cx="25.5" cy="27.5" r="2.6" fill="#ffffff" fillOpacity="0.95" />
        <circle cx="14.2" cy="22.4" r="1.6" fill="#ffffff" fillOpacity="0.8" />
      </svg>
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-extrabold ${NAME_SIZE[size]}`}
            style={{ letterSpacing: '-0.035em', color: onDark ? '#fff' : '#0c2b3a' }}
          >
            Bubbles
          </span>
          <span
            className={`${SUB_SIZE[size]} font-extrabold uppercase`}
            style={{
              letterSpacing: '0.28em',
              color: onDark ? 'rgba(56,189,248,.85)' : 'rgba(12,43,58,.45)',
            }}
          >
            detergents
          </span>
        </span>
      )}
    </div>
  );
};
