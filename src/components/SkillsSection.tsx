import { motion } from 'motion/react';
import { CORE_SKILLS } from '../data/adminData';

const TOOL_STACK = [
  'Microsoft Word',
  'Microsoft Excel',
  'Adobe Acrobat & PDF Tools',
  'Google Workspace (Docs & Sheets)',
  'Google Drive & OneDrive',
  'Outlook & Gmail Organization',
  'CRM & Web Portals',
  'Data Cleaning & Quality Audit',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Summary & Software Stack */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-sky-700 mb-2">My Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance mb-4">
              Practical Proficiency Across Core Office Tools
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Backed by disciplined daily workflows in Microsoft Office, cloud storage suites, and structured verification methods to keep your records clean and searchable.
            </p>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-display text-sm font-bold text-navy-900 mb-4">
                Primary Software &amp; Platforms
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {TOOL_STACK.map((tool) => (
                  <li key={tool} className="flex items-center justify-between py-1 border-b border-slate-200/70 last:border-b-0">
                    <span>{tool}</span>
                    <span className="text-xs font-medium text-sky-700">Proficient</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 8 Quantified Skill Bars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-sky-300 transition-colors duration-200"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <span className="text-xs font-medium text-sky-700">{skill.category}</span>
                  <span className="font-mono text-sm font-semibold text-navy-900 tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-navy-900 mb-3">
                  {skill.name}
                </h3>

                {/* Progress Track */}
                <div
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency`}
                  className="w-full h-2 rounded-full bg-sky-100 overflow-hidden mb-3.5"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.08 + idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                    className="h-full rounded-full bg-gradient-to-r from-navy-900 to-sky-600"
                  />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{skill.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
