import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { buildWhatsAppUrl, HERO_COMMITMENTS, WHATSAPP_NUMBER_DISPLAY } from '../data/adminData';

export default function HeroSection() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-sm font-semibold tracking-wide text-sky-700 mb-4">
              Dedicated Remote Office &amp; Data Administration
            </p>

            <h1 className="font-display text-[clamp(2.15rem,3.6vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-navy-900 text-balance mb-5">
              Your Trusted Office Admin Assistant – Professional, Reliable &amp; Affordable Services.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Free up your workday with accurate data entry, formatted MS Word documents, structured Excel spreadsheets, PDF conversions, and dependable virtual administrative support delivered on schedule.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-navy-900 hover:bg-sky-700 rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-navy-900 bg-white hover:bg-sky-50 border border-slate-300 hover:border-sky-400 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp {WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-500">
              <span>MS Word &amp; Excel Specialist</span>
              <span aria-hidden="true">·</span>
              <span>Fast 24h Turnaround</span>
              <span aria-hidden="true">·</span>
              <span>Confidential Handling</span>
            </div>
          </motion.div>

          {/* Right Column: Office Photography Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-navy-900 shadow-sm min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              {!heroImgFailed ? (
                <img
                  src="/src/assets/images/office_admin_workspace_1795674672078.jpg"
                  alt="Modern office administrative workspace featuring laptop with financial spreadsheets, navy notebook, and organized corporate desk"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgFailed(true)}
                  className="w-full h-full lg:h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900 flex flex-col items-center justify-center p-8 text-center text-white">
                  <FileSpreadsheet className="w-12 h-12 text-sky-300 mb-3" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">Office Admin Assistant Services</p>
                  <p className="text-sm text-sky-200 mt-1">Structured Documentation &amp; Data Management</p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HERO_COMMITMENTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-display text-2xl sm:text-3xl font-bold text-navy-900 tabular-nums">
                {item.value}
              </div>
              <div className="text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
