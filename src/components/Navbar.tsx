import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/brands', label: 'Brands' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement strip */}
      <div
        className="text-center px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em]"
        style={{ background: 'var(--lime)', color: 'var(--ink)' }}
      >
        Free delivery over R500 · Wholesale welcome
      </div>

      <header className="sticky top-0 z-40" style={{ background: 'var(--ink)' }}>
        <div className="mx-auto max-w-[1240px] px-5 h-[72px] flex items-center gap-6">
          {/* Brand mark */}
          {/* The mark, not a photograph of the mark. The JPEG that used to sit here
              was the whole logo squeezed into a 36px circle with a white plate and a
              green border, which read as a placeholder at exactly the size where a
              logo is doing the most work. */}
          <Link
            to="/"
            aria-label="Gladchemistry home"
            className="flex items-center shrink-0 group transition-transform duration-300 hover:-translate-y-px"
          >
            <BrandLogo brand="gladchemistry" size="md" onDark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 mx-auto">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[14px] font-extrabold transition-colors ${
                    isActive ? 'text-[var(--lime)]' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <button
              onClick={openCart}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-black transition-transform active:scale-95 cursor-pointer"
              style={{ background: 'var(--lime)', color: 'var(--ink)' }}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span
                  className="grid place-items-center h-5 min-w-5 px-1.5 rounded-full text-[11px] font-black"
                  style={{ background: 'var(--coral)', color: '#fff' }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-5 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-3 text-[15px] font-extrabold border-b border-white/5 last:border-0 ${
                    isActive ? 'text-[var(--lime)]' : 'text-white/85'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
