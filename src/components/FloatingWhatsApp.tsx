import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/adminData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Office Admin Assistant Services"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}
