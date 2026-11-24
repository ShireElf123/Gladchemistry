import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_LIST } from '../data/brands';
import { BrandLogo } from './BrandLogo';

const LINKS = [
  { to: '/shop', label: 'Shop all' },
  { to: '/brands', label: 'The 3 brands' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact & wholesale' },
];

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--ink)' }} className="text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" aria-label="Gladchemistry home" className="inline-flex">
              <BrandLogo brand="gladchemistry" size="xl" onDark />
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60 max-w-[42ch]">
              One South African house, three brands: organic personal care, fine fragrance,
              and detergents that do the job properly.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {BRAND_LIST.map((b) => (
                <span
                  key={b.id}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-black"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: b.primaryColor }}
                  />
                  {b.name}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.16em] text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] font-bold text-white/75 hover:text-[var(--lime)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.16em] text-white/40 mb-4">
              Get in touch
            </h4>
            <ul className="space-y-2.5 text-[14px] font-semibold text-white/75">
              <li>Shop 19, Palm Springs Mall, Springs, 1559</li>
              <li>info@gladchemistry.com</li>
              <li className="text-white/50">Mon – Fri · 08:00 – 17:00</li>
              <li className="text-white/50">Sat · 09:00 – 13:00</li>
            </ul>
            <Link to="/contact" className="btn btn-sm btn-lime mt-4">
              Wholesale enquiry
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/35">
          <p>© {new Date().getFullYear()} Gladchemistry Products</p>
          <p>Made in South Africa</p>
        </div>
      </div>
    </footer>
  );
};
