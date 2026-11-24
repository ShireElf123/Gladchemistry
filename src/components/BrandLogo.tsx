import React from 'react';
import type { BrandId } from '../data/brands';

/* ------------------------------------------------------------------ */
/*  Brand logos                                                       */
/* ------------------------------------------------------------------ */

interface BrandLogoProps {
  brand: BrandId;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  /** Uses the reversed lock-up for dark grounds. */
  onDark?: boolean;
  /** Hides the wordmark and shows the mark alone (tight spaces). */
  markOnly?: boolean;
}

const MARK_H = { sm: 'h-6', md: 'h-8', lg: 'h-11', xl: 'h-14' } as const;
const WORD_H = { sm: 'h-[15px]', md: 'h-[19px]', lg: 'h-[26px]', xl: 'h-[34px]' } as const;
const STACK_H = { sm: 'h-14', md: 'h-[74px]', lg: 'h-24', xl: 'h-32' } as const;
const GAP = { sm: 'gap-[6px]', md: 'gap-2', lg: 'gap-[10px]', xl: 'gap-3' } as const;
/* Her lock-up is built on a wide, generous mark: the leaf is 0.72 as wide as it
   is tall, and the wordmark runs 3.2 line-heights long. Sized off her own
   artwork rather than guessed from the type. */
const WORDMARK_H = { sm: 'h-[13px]', md: 'h-[17px]', lg: 'h-[30px]', xl: 'h-[40px]' } as const;

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  size = 'md',
  className = '',
  onDark = false,
  markOnly = false,
}) => {
  if (brand === 'gladchemistry') {
    /* Her logo, exactly as she drew it.
     *
     * It is a CENTRED stack — the leaf, the wordmark and "products" all share one
     * vertical axis — so it is never re-set in live type and never re-aligned.
     * Both the artwork and its reversed variant were knocked out of her own JPEG
     * on a luminance ramp (alpha preserved), so the leaf keeps its greens and the
     * letterforms are hers to the curve. Nothing here is redrawn.
     *
     * Three forms:
     *   stack      the full lock-up, centred — anywhere there is vertical room
     *   horizontal the same pixels, rolled up — for the 72px header bar
     *   markOnly   the leaf alone
     */
    if (markOnly) {
      return (
        <img
          src={onDark ? '/images/logos/gc-mark-solid.png' : '/images/logos/gc-mark.png'}
          alt="Gladchemistry"
          className={`${MARK_H[size]} w-auto shrink-0 ${className}`}
          width={267}
          height={267}
        />
      );
    }

    if (size === 'lg' || size === 'xl') {
      /* Stacked, as she composed it: leaf above, name beneath, one axis. */
      return (
        <img
          src={onDark ? '/images/logos/gc-lockup-dark.png' : '/images/logos/gc-lockup.png'}
          alt="Gladchemistry Products"
          className={`${STACK_H[size]} w-auto ${className}`}
          width={516}
          height={388}
        />
      );
    }

    /* Header: leaf beside the name. Same artwork, rolled up so it survives a
       72px bar without shrinking the name to nothing. */
    return (
      <span className={`inline-flex items-center ${GAP[size]} ${className}`}>
        <img
          src={onDark ? '/images/logos/gc-mark-solid.png' : '/images/logos/gc-mark.png'}
          alt=""
          aria-hidden
          className={`${MARK_H[size]} w-auto shrink-0`}
          width={267}
          height={267}
        />
        <img
          src={onDark ? '/images/logos/gc-wordmark-dark.png' : '/images/logos/gc-wordmark.png'}
          alt="Gladchemistry"
          className={`${WORD_H[size]} w-auto`}
          width={516}
          height={66}
        />
      </span>
    );
  }

  if (brand === 'felis-be-glad') {
    /* Her own letterforms, untouched — the white JPEG ground has been taken out
       so the mark sits on the tinted stage instead of on a white sticker. */
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

  /* Bubbles: no supplied artwork, so the mark is drawn and the name is set in
     the display face. When she has a Bubbles logo it replaces this block. */
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
            className={`font-display font-extrabold ${size === 'lg' || size === 'xl' ? 'text-[28px]' : 'text-[19px]'}`}
            style={{ letterSpacing: '-0.035em', color: onDark ? '#fff' : '#0c2b3a' }}
          >
            Bubbles
          </span>
          <span
            className={`${size === 'lg' || size === 'xl' ? 'text-[10px]' : 'text-[8px]'} font-extrabold uppercase`}
            style={{
              letterSpacing: '0.28em',
              marginRight: '-0.28em',
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
