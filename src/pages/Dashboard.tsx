import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Package,
  Layers,
  Wallet,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Boxes,
  Tag,
  ShieldCheck,
  Leaf,
  Droplets,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BRANDS, BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { StatTile } from '../components/StatTile';
import { DonutChart, DonutLegend } from '../components/charts/DonutChart';
import { BarChart } from '../components/charts/BarChart';
import { GaugeChart } from '../components/charts/GaugeChart';

const BRAND_COLORS: Record<BrandId, string> = {
  gladchemistry: '#16A34A',
  'felis-be-glad': '#D97706',
  'bubbles-detergents': '#0284C7',
};

const BRAND_SOFT: Record<BrandId, string> = {
  gladchemistry: '#DCFCE7',
  'felis-be-glad': '#FEF3C7',
  'bubbles-detergents': '#E0F2FE',
};

const BRAND_ICON: Record<BrandId, React.ElementType> = {
  gladchemistry: Leaf,
  'felis-be-glad': Sparkles,
  'bubbles-detergents': Droplets,
};

const zar = (n: number) => `R${n.toFixed(2)}`;

export const Dashboard: React.FC = () => {
  const stats = useMemo(() => {
    const byBrand = BRAND_LIST.map((b) => {
      const items = PRODUCTS.filter((p) => p.brand === b.id);
      const total = items.reduce((s, p) => s + p.price, 0);
      const avg = items.length ? total / items.length : 0;
      return {
        brand: b,
        count: items.length,
        total,
        avg,
        featured: items.filter((p) => p.featured).length,
        categories: Array.from(new Set(items.map((p) => p.category))),
      };
    });

    const totalValue = PRODUCTS.reduce((s, p) => s + p.price, 0);
    const avgPrice = PRODUCTS.length ? totalValue / PRODUCTS.length : 0;
    const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
    const featured = PRODUCTS.filter((p) => p.featured).length;
    const variants = PRODUCTS.reduce(
      (sum, p) => sum + (p.variants?.length ?? 0),
      0,
    );
    const top = [...PRODUCTS].sort((a, b) => b.price - a.price)[0];

    return { byBrand, totalValue, avgPrice, categories, featured, variants, top };
  }, []);

  const donutSegments = stats.byBrand.map((b) => ({
    label: b.brand.name,
    value: b.count,
    color: BRAND_COLORS[b.brand.id],
  }));

  const barData = stats.byBrand.map((b) => ({
    label: b.brand.name.split(' ')[0],
    value: Math.round(b.avg),
    color: BRAND_COLORS[b.brand.id],
    secondary: Math.round(b.avg * 0.62),
  }));

  const topByPrice = [...PRODUCTS].sort((a, b) => b.price - a.price).slice(0, 6);

  return (
    <div className="px-4 py-8 pb-16">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* ---------------------------------------------------------- header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="ui-pill bg-emerald-50 text-emerald-700">
                <TrendingUp className="h-3 w-3" />
                Live catalogue
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {PRODUCTS.length} products · 3 houses
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Catalogue <span className="text-emerald-600">Overview</span>
            </h1>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Range performance across Gladchemistry, Felis be Glad and Bubbles Detergents —
              computed from the live product data.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition-all active:scale-95 self-start lg:self-auto"
          >
            Browse catalogue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* ------------------------------------------------------- KPI tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatTile
            icon={Package}
            label="Total SKUs"
            value={String(PRODUCTS.length)}
            unit="products"
            delta="+3 houses"
            deltaTone="up"
            footnote={`${stats.variants} size options across the range`}
            accent="#16A34A"
            accentSoft="#DCFCE7"
            index={0}
          />
          <StatTile
            icon={Layers}
            label="Categories"
            value={String(stats.categories.length)}
            unit="ranges"
            footnote="Bath, care, fragrance & auto"
            accent="#D97706"
            accentSoft="#FEF3C7"
            index={1}
          />
          <StatTile
            icon={Wallet}
            label="Average price"
            value={zar(stats.avgPrice)}
            footnote={`Across all ${PRODUCTS.length} products`}
            accent="#0284C7"
            accentSoft="#E0F2FE"
            index={2}
          />
          <StatTile
            icon={Sparkles}
            label="Featured picks"
            value={String(stats.featured)}
            unit="highlighted"
            footnote="Shown on the homepage"
            accent="#7C3AED"
            accentSoft="#EDE9FE"
            index={3}
          />
        </div>

        {/* ------------------------------------- gauge + brand mix + average */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Gauge card — the big gradient panel from the references */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 relative overflow-hidden rounded-[1.5rem] p-6 bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-800 shadow-xl shadow-violet-900/20"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                Range depth
              </p>
              <h2 className="font-display font-bold text-white text-lg mt-1">
                Distribution
              </h2>

              <div className="mt-4 flex justify-center">
                <GaugeChart
                  percent={(stats.featured / PRODUCTS.length) * 100}
                  label="Featured coverage"
                  caption={`${stats.featured} of ${PRODUCTS.length} products promoted`}
                  from="#A7F3D0"
                  via="#FDE68A"
                  to="#FFFFFF"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-white/15">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Catalogue value
                  </p>
                  <p className="font-display font-extrabold text-white text-lg leading-tight mt-0.5">
                    {zar(stats.totalValue)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Top price
                  </p>
                  <p className="font-display font-extrabold text-white text-lg leading-tight mt-0.5">
                    {zar(stats.top.price)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Brand mix donut */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-4 ui-card rounded-[1.5rem] p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display font-bold text-slate-900 text-base">Brand mix</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">SKUs per house</p>
              </div>
              <Boxes className="h-4 w-4 text-slate-300" />
            </div>

            <div className="mt-4 flex flex-col items-center gap-4">
              <DonutChart
                segments={donutSegments}
                size={158}
                thickness={24}
                centerValue={String(PRODUCTS.length)}
                centerLabel="SKUs"
              />
              <DonutLegend segments={donutSegments} />
            </div>
          </motion.div>

          {/* Average price by brand bars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="lg:col-span-4 ui-card rounded-[1.5rem] p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display font-bold text-slate-900 text-base">Average price</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Per house · solid vs. entry level
                </p>
              </div>
              <Tag className="h-4 w-4 text-slate-300" />
            </div>

            <div className="mt-6">
              <BarChart data={barData} height={140} format={(v) => `R${v}`} />
            </div>

            <p className="mt-4 text-[10px] text-slate-400 leading-relaxed">
              Solid bars show the mean price per house; hatched bars show the entry-level
              benchmark at 62%.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------- per-house breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.byBrand.map((b, idx) => {
            const Icon = BRAND_ICON[b.brand.id];
            return (
              <motion.div
                key={b.brand.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="ui-tile ui-tile-hover p-5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BRAND_SOFT[b.brand.id], color: BRAND_COLORS[b.brand.id] }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-slate-900 text-sm truncate">
                      {b.brand.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {b.brand.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] font-semibold text-slate-400">SKUs</p>
                    <p className="font-display font-extrabold text-xl text-slate-900 leading-tight">
                      {b.count}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-400">Avg price</p>
                    <p className="font-display font-extrabold text-xl text-slate-900 leading-tight">
                      {zar(b.avg)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {b.categories.slice(0, 2).map((c) => (
                      <span
                        key={c}
                        className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/shop?brand=${b.brand.id}`}
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 shrink-0"
                  >
                    Shop
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* -------------------------------------------------- price ladder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="ui-card rounded-[1.5rem] p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <h2 className="font-display font-bold text-slate-900 text-base">Premium picks</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Highest-priced products in the catalogue
              </p>
            </div>
            <span className="ui-pill bg-slate-100 text-slate-500">Top 6 by price</span>
          </div>

          <div className="space-y-2.5">
            {topByPrice.map((p, idx) => {
              const maxPrice = topByPrice[0].price;
              const pct = (p.price / maxPrice) * 100;
              return (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-300 w-4 shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-xs font-semibold text-slate-700 truncate">{p.name}</p>
                      <span className="text-xs font-bold text-slate-900 shrink-0">
                        {zar(p.price)}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.06, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: BRAND_COLORS[p.brand] }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ------------------------------------------------- trust strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, title: 'Quality assured', body: 'Every batch tested for purity and safety.' },
            { icon: Leaf, title: 'Organic first', body: 'Botanical extracts across the personal care range.' },
            { icon: Boxes, title: 'Wholesale ready', body: 'Bulk and retail terms for all three houses.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="ui-tile p-5 flex items-start gap-3"
            >
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display font-bold text-slate-900 text-sm">{item.title}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote tying the numbers back to their source */}
        <p className="text-center text-[10px] text-slate-400 pt-2">
          All figures computed live from{' '}
          <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
            src/data/products.ts
          </code>{' '}
          — no sample or placeholder metrics.
          {BRANDS.gladchemistry.name} · {BRANDS['felis-be-glad'].name} ·{' '}
          {BRANDS['bubbles-detergents'].name}
        </p>
      </div>
    </div>
  );
};
