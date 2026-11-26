import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/adminData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact Me', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-white border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-base sm:text-lg font-bold tracking-tight text-navy-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors"
        >
          Office Admin Assistant Services
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-slate-600 hover:text-navy-900 border-b-2 border-transparent hover:border-sky-600 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-navy-900 hover:bg-sky-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-sky-300" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-navy-900 hover:bg-sky-50 border border-slate-200 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-md"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-sky-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#why-choose-me"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-sky-50 transition-colors"
          >
            Why Choose Me
          </a>
          <div className="pt-3 border-t border-slate-100">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-navy-900 hover:bg-sky-700 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-sky-300" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
