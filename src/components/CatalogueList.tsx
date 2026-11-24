import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { waLink, productEnquiry } from '../data/shop';
import { rand } from '../lib/format';

/**
 * The catalogue.
 *
 * Two kinds of line, and the difference is honest rather than cosmetic.
 *
 * A product whose photograph shows the shop's own printed artwork gets that
 * photograph. A product whose photograph shows a blank field with the words
 * typed onto it does not — that is a picture of a label that does not exist,
 * and on a page selling the product it is a claim about what arrives in the
 * box. Those eleven stand on their name, size, price and description instead,
 * which is all a catalogue actually needs.
 *
 * Each line is a `<details>` disclosure: the name reads like a menu entry and
 * opens to the picture, the size, price, the shop's description and a WhatsApp
 * enquiry. No JavaScript is required to open one, they work with the keyboard,
 * and the closed state is a scannable list of names and prices.
 */
const Line: React.FC<{ product: Product; forceOpen: boolean }> = ({ product, forceOpen }) => {
  return (
    <details
      className="group border-b border-black/10 last:border-b-0"
      open={forceOpen || undefined}
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 py-3.5 pl-1 pr-2 hover:bg-black/[0.03]">
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
          style={{ color: 'var(--ink-soft)' }}
          aria-hidden
        />

        {product.image ? (
          <img
            src={product.image}
            alt={product.fullName ?? product.name}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="h-11 w-11 shrink-0 rounded-xl border border-black/10 bg-white object-contain"
          />
        ) : (
          /* No photograph exists that shows this product's real label, so it
             gets a branded plate rather than a grey void. A dashed outline
             would read as a broken image; this reads as a decision. */
          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-[15px] font-extrabold"
            style={{ background: 'rgba(14,124,74,0.10)', color: 'var(--fern)' }}
          >
            {product.name.charAt(0)}
          </span>
        )}

        <span
          className="min-w-0 flex-1 font-display text-[17px] font-extrabold leading-tight"
          style={{ color: 'var(--ink)' }}
        >
          {product.name}
          {product.badge && (
            <span
              className="ml-2 align-middle text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full"
              style={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
              {product.badge}
            </span>
          )}
        </span>
        <span
          className="hidden shrink-0 text-[13px] font-semibold sm:block"
          style={{ color: 'var(--ink-soft)', opacity: 0.75 }}
        >
          {product.size}
        </span>
        <span
          className="shrink-0 font-display text-[17px] font-extrabold tabular-nums"
          style={{ color: 'var(--ink)' }}
        >
          {rand(product.price)}
        </span>
      </summary>

      <div className="pb-5 pl-9 pr-2">
        {product.image && (
          <img
            src={product.image}
            alt={product.fullName ?? product.name}
            loading="lazy"
            decoding="async"
            className="mt-1 mb-3 h-56 w-auto max-w-full rounded-xl border border-black/10 bg-white object-contain p-2"
          />
        )}
        <p className="text-[13px] font-bold uppercase tracking-[0.1em] sm:hidden" style={{ color: 'var(--ink-soft)' }}>
          {product.category} · {product.size}
        </p>
        <p className="mt-1 max-w-[62ch] text-[14px] leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          {product.description}
        </p>

        {product.notes && product.notes.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {product.notes.map((n) => (
              <li
                key={n}
                className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--ink-soft)' }}
              >
                {n}
              </li>
            ))}
          </ul>
        )}

        <a
          href={waLink(productEnquiry(product.name, product.size, product.price))}
          target="_blank"
          rel="noopener noreferrer"
          className="enquire mt-3"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire
        </a>
      </div>
    </details>
  );
};

export const CatalogueList: React.FC<{ products: Product[] }> = ({ products }) => {
  /* Group by category, keeping the data's own order. A category is a section,
     a product is a line. Nothing is hidden behind a tab. */
  const groups: { category: string; items: Product[] }[] = [];
  for (const product of products) {
    const last = groups[groups.length - 1];
    if (last && last.category === product.category) last.items.push(product);
    else {
      const found = groups.find((g) => g.category === product.category);
      if (found) found.items.push(product);
      else groups.push({ category: product.category, items: [product] });
    }
  }

  const [openAll, setOpenAll] = useState(false);
  const withPhoto = products.filter((p) => p.image).length;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-[12px] font-bold" style={{ color: 'var(--ink-soft)', opacity: 0.7 }}>
          Tap a name to open it · {withPhoto} of {products.length} with a photo
        </p>
        <button
          onClick={() => setOpenAll((v) => !v)}
          className="text-[12px] font-black uppercase tracking-[0.1em] underline underline-offset-4"
          style={{ color: 'var(--ink)' }}
        >
          {openAll ? 'Collapse all' : 'Open all'}
        </button>
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.category}>
            <h2
              className="eyebrow mb-1 pb-2 border-b-2"
              style={{ color: 'var(--ink)', borderColor: 'var(--lime)' }}
            >
              {group.category}
              <span className="ml-2 opacity-40">{group.items.length}</span>
            </h2>
            <div key={`${group.category}-${openAll}`}>
              {group.items.map((product) => (
                <Line key={`${product.id}-${openAll}`} product={product} forceOpen={openAll} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
