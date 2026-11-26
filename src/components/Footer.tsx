import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER_DISPLAY, buildWhatsAppUrl } from '../data/adminData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'My Services', href: '#services' },
  { label: 'Why Choose Me', href: '#why-choose-me' },
  { label: 'My Skills', href: '#skills' },
  { label: 'Contact Me', href: '#contact' },
];

const FEATURED_SERVICES = [
  'Professional Data Entry',
  'MS Word Documents',
  'MS Excel Spreadsheets',
  'PDF to Word Conversion',
  'Document Formatting',
  'Virtual Assistant Services',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="font-display text-xl font-bold text-white tracking-tight inline-block"
            >
              Office Admin Assistant Services
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Your Trusted Office Admin Assistant – Professional, Reliable &amp; Affordable Services for data entry, MS Office documentation, inbox organization, and remote administrative support.
            </p>
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold text-white mb-4">Core Services</h3>
            <ul className="space-y-2.5 text-sm">
              {FEATURED_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Office Admin Assistant Services. All rights reserved.</p>
          <p>Remote Office &amp; Virtual Administrative Support · Direct WhatsApp {WHATSAPP_NUMBER_DISPLAY}</p>
        </div>
      </div>
    </footer>
  );
}
