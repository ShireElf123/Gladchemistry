import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { CatalogueList } from '../components/CatalogueList';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = (searchParams.get('brand') as BrandId | 'all') || 'all';

  const [selectedBrand, setSelectedBrand] = useState<BrandId | 'all'>(initialBrand);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  useEffect(() => {
    const paramBrand = (searchParams.get('brand') as BrandId | 'all') || 'all';
    setSelectedBrand(paramBrand);
  }, [searchParams]);

  const handleBrandChange = (brand: BrandId | 'all') => {
    setSelectedBrand(brand);
    if (brand === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brand);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];
    if (selectedBrand !== 'all') {
      list = list.filter((p) => p.brand === selectedBrand);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedBrand, searchQuery, sortBy]);

  const counts = {
    all: PRODUCTS.length,
    ...Object.fromEntries(
      BRAND_LIST.map((b) => [b.id, PRODUCTS.filter((p) => p.brand === b.id).length]),
    ),
  } as Record<string, number>;

  return (
    <div>
      {/* ------------------------------------------------ page head band */}
      <section style={{ background: 'var(--lime)' }}>
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:py-16">
          <span className="eyebrow" style={{ color: 'var(--ink)' }}>
            The catalogue
          </span>
          <h1 className="display-xl mt-3" style={{ color: 'var(--ink)' }}>
            Pick your <span className="u-mark">range</span>
          </h1>
          <p
            className="mt-4 text-[16px] leading-relaxed max-w-[52ch]"
            style={{ color: 'var(--ink-soft)' }}
          >
            {PRODUCTS.length} products across personal care, fragrance and home
            cleaning. Prices are listed per item; order by WhatsApp or at the counter.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- controls */}
      <section className="mx-auto max-w-[1240px] px-5 pt-8">
        <div className="flex flex-col gap-4">
          {/* Chip row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => handleBrandChange('all')}
              className="chip"
              data-active={selectedBrand === 'all'}
            >
              All
              <span className="opacity-50 font-bold">{counts.all}</span>
            </button>
            {BRAND_LIST.map((b) => (
              <button
                key={b.id}
                onClick={() => handleBrandChange(b.id)}
                className="chip"
                data-active={selectedBrand === b.id}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ background: b.primaryColor }}
                />
                {b.name}
                <span className="opacity-50 font-bold">{counts[b.id]}</span>
              </button>
            ))}
          </div>

          {/* Search + sort */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1 sm:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the range…"
                aria-label="Search products"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-black/15 text-sm font-semibold focus:outline-none focus:border-black/40"
                style={{ color: 'var(--ink)' }}
              />
            </div>

            <label className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.12em] sm:ml-auto" style={{ color: 'var(--ink-soft)' }}>
              Sort
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-full bg-white border border-black/15 px-4 py-2.5 text-[13px] font-bold focus:outline-none"
                style={{ color: 'var(--ink)' }}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </label>
          </div>

          <p className="text-[12px] font-bold text-slate-400">
            Showing {filteredProducts.length} of {PRODUCTS.length}
            <span className="font-semibold text-slate-400">
              {' '}· prices are per item, and every line can be enquired on
            </span>
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- grid */}
      <section className="mx-auto max-w-[1240px] px-5 py-9 sm:py-12">
        {filteredProducts.length === 0 ? (
          <div className="panel px-6 py-16 text-center">
            <h2 className="display-md" style={{ color: 'var(--ink)' }}>
              Nothing matched that
            </h2>
            <p className="mt-2 text-sm text-slate-500">Try a different word or clear the filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleBrandChange('all');
              }}
              className="btn btn-ink mt-6"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <CatalogueList products={filteredProducts} />
        )}
      </section>
    </div>
  );
};
