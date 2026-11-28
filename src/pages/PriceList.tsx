import React from 'react';
import { Link } from 'react-router-dom';
import { PriceBook, PriceConflictTable } from '../components/PriceBook';
import { waLink, WA_TARGET, SHOP_WHATSAPP_DISPLAY } from '../lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export const PriceList: React.FC = () => {
  return (
    <div className="px-[5vw] pt-14 pb-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-9 max-w-[560px] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <span aria-hidden className="h-px w-7" style={{ background: 'var(--fern)' }} />
            Price list
            <span aria-hidden className="h-px w-7" style={{ background: 'var(--fern)' }} />
          </p>
          <h1
            className="mt-4 font-display text-[34px] leading-[1.02] tracking-[-0.035em] sm:text-[44px]"
            style={{ color: 'var(--ink)' }}
          >
            Names and prices, page by page.
          </h1>
          <p className="mx-auto mt-3 max-w-[46ch] text-[14px] leading-relaxed text-slate-500">
            Every house, every size — taken from the WhatsApp catalogue. Tap a page edge, or use the
            arrow keys, to turn it.
          </p>
        </div>

        <PriceBook />

        <PriceConflictTable />

        <div className="mx-auto mt-12 max-w-[560px] text-center">
          <p className="text-[13px] leading-relaxed text-slate-500">
            To order, message{' '}
            <a
              href={waLink('Hi Gladchemistry, I would like to order from the price list:')}
              target={WA_TARGET}
              rel="noopener noreferrer"
              className="font-bold underline decoration-2 underline-offset-2"
              style={{ color: 'var(--fern)' }}
            >
              {SHOP_WHATSAPP_DISPLAY}
            </a>{' '}
            with the lines you want.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <a
              href={waLink('Hi Gladchemistry, I would like to order from the price list:')}
              target={WA_TARGET}
              rel="noopener noreferrer"
              className="btn text-white inline-flex items-center gap-2"
              style={{ background: 'var(--fern)' }}
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <Link to="/shop" className="btn btn-ink">
              Shop online
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact &amp; wholesale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
