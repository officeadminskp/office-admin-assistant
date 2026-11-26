import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Database,
  FileText,
  FileSpreadsheet,
  FileType,
  ClipboardCopy,
  Keyboard,
  AlignLeft,
  Mail,
  Globe,
  Headset,
  FolderKanban,
  Briefcase,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import {
  ADMIN_SERVICES,
  SERVICE_CATEGORIES,
  type ServiceCategory,
  type AdminService,
  buildWhatsAppUrl,
} from '../data/adminData';

const ICON_MAP: Record<AdminService['iconName'], LucideIcon> = {
  Database,
  FileText,
  FileSpreadsheet,
  FileType,
  ClipboardCopy,
  Keyboard,
  AlignLeft,
  Mail,
  Globe,
  Headset,
  FolderKanban,
  Briefcase,
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? ADMIN_SERVICES
      : ADMIN_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-sky-700 mb-2">My Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance">
              Complete Office Administrative &amp; Documentation Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Twelve specialized administrative services tailored for small businesses, executives, agencies, and busy professionals.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter administrative services"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl self-start lg:self-auto"
          >
            {SERVICE_CATEGORIES.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-sky-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName];
            const serviceWhatsAppUrl = buildWhatsAppUrl(
              `Hello! I am interested in your ${service.title} under Office Admin Assistant Services. Please share more details.`
            );

            return (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900 transition-colors duration-200 shrink-0">
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                      {service.index}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-sky-700 mb-1.5">{service.categoryLabel}</p>

                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2.5 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-slate-500">{service.deliverable}</span>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-sky-700 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span>Inquire</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
