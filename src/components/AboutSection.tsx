import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FolderOpen } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../data/adminData';

const ABOUT_HIGHLIGHTS = [
  'Consistent accuracy across high-volume spreadsheets and databases',
  'Clean, publication-ready formatting in MS Word and PDF documents',
  'Responsive communication via WhatsApp for quick revisions and updates',
  'Strict privacy safeguards for client financial, HR, and business records',
];

export default function AboutSection() {
  const [deskImgFailed, setDeskImgFailed] = useState(false);
  const [bannerImgFailed, setBannerImgFailed] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Column: Workspace Photography + Brand Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm aspect-[4/3]">
              {!deskImgFailed ? (
                <img
                  src="/src/assets/images/document_records_desk_1795674672426.jpg"
                  alt="Neatly organized executive desk with printed reports, navy file folders, and digital tablet"
                  referrerPolicy="no-referrer"
                  onError={() => setDeskImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sky-50 to-slate-100 flex flex-col items-center justify-center p-8 text-center">
                  <FolderOpen className="w-10 h-10 text-navy-900 mb-3" aria-hidden="true" />
                  <p className="font-display font-semibold text-navy-900">Organized Record Management</p>
                </div>
              )}
            </div>

            {/* Official Business Brand Graphic provided by user */}
            {!bannerImgFailed && (
              <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xs">
                <img
                  src="/assets/aistudio/Professional_Office_Admin_Assistant_Services_7b7f01ca.png"
                  alt="Office Admin Assistant Services service overview banner with WhatsApp contact 0316 0344047"
                  referrerPolicy="no-referrer"
                  onError={() => setBannerImgFailed(true)}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            )}
          </motion.div>

          {/* Right Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-sm font-semibold text-sky-700 mb-2">About Me</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance mb-5">
              Dependable Administrative Support That Keeps Your Business Organized
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-7">
              <p>
                At <strong className="font-semibold text-navy-900">Office Admin Assistant Services</strong>, I help entrepreneurs, managers, and small teams stay ahead of daily paperwork, spreadsheets, and inbox demands without the overhead of hiring full-time office staff.
              </p>
              <p>
                From meticulous data entry and complex MS Excel sheets to spotless PDF-to-Word conversions and ongoing virtual assistance, every assignment is completed with close attention to layout, accuracy, and confidentiality.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {ABOUT_HIGHLIGHTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-navy-900">Direct WhatsApp Desk:</span>{' '}
                <span className="font-mono tabular-nums">{WHATSAPP_NUMBER_DISPLAY}</span>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-navy-900 transition-colors"
              >
                <span>Message to Discuss Your Task</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
