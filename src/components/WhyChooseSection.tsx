import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, buildWhatsAppUrl } from '../data/adminData';

export default function WhyChooseSection() {
  return (
    <section id="why-choose-me" className="py-16 sm:py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-sky-300 mb-2">Why Choose Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Built on Reliability, Precision, and Clear Communication
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Every task is treated with the care of an in-house executive assistant—without long-term employment commitments or agency delays.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl bg-navy-800/70 border border-white/10 p-6 hover:border-sky-400/50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-semibold text-sky-300 tabular-nums">
                  {item.number}
                </span>
                <ShieldCheck className="w-5 h-5 text-sky-400/80" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Call To Action Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 p-8 sm:p-10 border border-sky-400/30 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white text-balance">
              Need Professional Office Support? Let&apos;s Work Together!
            </h3>
            <p className="mt-2 text-sm sm:text-base text-sky-100 leading-relaxed">
              Send your task requirements directly on WhatsApp for a fast estimate and immediate start.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-navy-900 bg-white hover:bg-sky-50 rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Start on WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-navy-900/40 hover:bg-navy-900/70 border border-white/25 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>Send Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
