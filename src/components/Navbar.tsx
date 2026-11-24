import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { waLink } from '../data/shop';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Catalogue' },
  { to: '/brands', label: 'Brands' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement strip */}
      <div
        className="text-center px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em]"
        style={{ background: 'var(--lime)', color: 'var(--ink)' }}
      >
        Shop 19, Palm Springs Mall · Springs · Wholesale welcome
      </div>

      <header className="sticky top-0 z-40" style={{ background: 'var(--ink)' }}>
        <div className="mx-auto max-w-[1240px] px-5 h-[72px] flex items-center gap-6">
          {/* Brand mark */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/images/gladchemistry-logo.jpg"
              alt="Gladchemistry"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20 transition-transform group-hover:scale-105"
            />
            <span
              className="font-display font-extrabold text-[19px] tracking-tight text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Gladchemistry
            </span>
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
            <a
              href={waLink("Hello Gladchemistry — I'd like to ask about a product.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-black transition-transform active:scale-95"
              style={{ background: 'var(--lime)', color: 'var(--ink)' }}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

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
