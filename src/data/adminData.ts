export const WHATSAPP_NUMBER_DISPLAY = '+92 316 0344047';
export const WHATSAPP_BASE_URL = 'https://wa.me/923160344047';
export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello! I am interested in your Office Admin Assistant Services. Please share more details.';

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export type ServiceCategory = 'all' | 'data' | 'documents' | 'support';

export interface AdminService {
  id: string;
  index: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  description: string;
  deliverable: string;
  iconName:
    | 'Database'
    | 'FileText'
    | 'FileSpreadsheet'
    | 'FileType'
    | 'ClipboardCopy'
    | 'Keyboard'
    | 'AlignLeft'
    | 'Mail'
    | 'Globe'
    | 'Headset'
    | 'FolderKanban'
    | 'Briefcase';
}

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services (12)' },
  { id: 'data', label: 'Data & Spreadsheets' },
  { id: 'documents', label: 'Documents & Typing' },
  { id: 'support', label: 'Virtual & Admin Support' },
];

export const ADMIN_SERVICES: AdminService[] = [
  {
    id: 'data-entry',
    index: '01',
    title: 'Professional Data Entry',
    category: 'data',
    categoryLabel: 'Data & Spreadsheets',
    description:
      'High-accuracy numeric, text, CRM, invoice, and catalog entry transferred cleanly from scanned records, PDFs, or web portals.',
    deliverable: 'Verified & error-checked datasets',
    iconName: 'Database',
  },
  {
    id: 'ms-word',
    index: '02',
    title: 'MS Word Documents',
    category: 'documents',
    categoryLabel: 'Documents & Typing',
    description:
      'Creation and editing of business letters, proposals, manuals, contracts, and executive reports with clean styles and headers.',
    deliverable: 'Editable DOCX & print-ready PDF',
    iconName: 'FileText',
  },
  {
    id: 'ms-excel',
    index: '03',
    title: 'MS Excel Spreadsheets',
    category: 'data',
    categoryLabel: 'Data & Spreadsheets',
    description:
      'Structured trackers, expense logs, inventory sheets, pivot summaries, formulas, conditional formatting, and data cleanup.',
    deliverable: 'Formula-driven XLSX workbooks',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'pdf-to-word',
    index: '04',
    title: 'PDF to Word Conversion',
    category: 'documents',
    categoryLabel: 'Documents & Typing',
    description:
      'Accurate conversion of locked, scanned, or multi-column PDFs into cleanly editable Word documents without broken layouts.',
    deliverable: '100% manual layout verification',
    iconName: 'FileType',
  },
  {
    id: 'copy-paste',
    index: '05',
    title: 'Copy Paste Services',
    category: 'data',
    categoryLabel: 'Data & Spreadsheets',
    description:
      'Fast, methodical migration of product listings, directory entries, contacts, and tabular content across files or web forms.',
    deliverable: 'Zero-skip bulk transfer',
    iconName: 'ClipboardCopy',
  },
  {
    id: 'typing-documentation',
    index: '06',
    title: 'Typing and Documentation',
    category: 'documents',
    categoryLabel: 'Documents & Typing',
    description:
      'Fast touch-typing from handwritten notes, image scans, meeting memos, and legacy printouts into digital business files.',
    deliverable: 'Proofread & structured transcripts',
    iconName: 'Keyboard',
  },
  {
    id: 'document-formatting',
    index: '07',
    title: 'Document Formatting',
    category: 'documents',
    categoryLabel: 'Documents & Typing',
    description:
      'Consistent typography, table alignment, automated table of contents, page numbering, margins, and branded templates.',
    deliverable: 'Executive-grade layout polish',
    iconName: 'AlignLeft',
  },
  {
    id: 'email-management',
    index: '08',
    title: 'Email Management',
    category: 'support',
    categoryLabel: 'Virtual & Admin Support',
    description:
      'Daily inbox sorting, priority flagging, folder rules, template replies, and follow-up tracking so nothing slips through.',
    deliverable: 'Organized inbox & priority digest',
    iconName: 'Mail',
  },
  {
    id: 'internet-research',
    index: '09',
    title: 'Internet Research',
    category: 'data',
    categoryLabel: 'Data & Spreadsheets',
    description:
      'Targeted web research for vendor lists, contact directories, market comparisons, supplier sourcing, and verified leads.',
    deliverable: 'Source-linked research sheets',
    iconName: 'Globe',
  },
  {
    id: 'virtual-assistant',
    index: '10',
    title: 'Virtual Assistant Services',
    category: 'support',
    categoryLabel: 'Virtual & Admin Support',
    description:
      'Dependable day-to-day remote operational help covering scheduling, task coordination, travel logs, and recurring workflows.',
    deliverable: 'Dedicated daily or weekly support',
    iconName: 'Headset',
  },
  {
    id: 'file-record-management',
    index: '11',
    title: 'File and Record Management',
    category: 'support',
    categoryLabel: 'Virtual & Admin Support',
    description:
      'Logical folder hierarchies, standardized file naming, archive indexing, and cloud drive cleanup across Drive and OneDrive.',
    deliverable: 'Searchable digital archive',
    iconName: 'FolderKanban',
  },
  {
    id: 'general-admin',
    index: '12',
    title: 'General Administrative Support',
    category: 'support',
    categoryLabel: 'Virtual & Admin Support',
    description:
      'Flexible back-office support for invoices, meeting minutes, form preparation, presentation cleanup, and routine office tasks.',
    deliverable: 'Tailored back-office coverage',
    iconName: 'Briefcase',
  },
];

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_ITEMS: AdvantageItem[] = [
  {
    number: '01',
    title: 'Zero-Guesswork Accuracy',
    description:
      'Every spreadsheet, converted PDF, and typed document goes through a line-by-line quality check before delivery.',
  },
  {
    number: '02',
    title: 'Strict Data Confidentiality',
    description:
      'Client invoices, contacts, HR records, and internal business files are handled privately and never shared with third parties.',
  },
  {
    number: '03',
    title: 'Reliable On-Time Delivery',
    description:
      'Clear milestone updates and fast turnaround times keep your daily office operations and urgent deadlines on track.',
  },
  {
    number: '04',
    title: 'Affordable & Flexible Rates',
    description:
      'Choose per-project quotes, hourly assistance, or ongoing monthly support tailored to your actual workload.',
  },
  {
    number: '05',
    title: 'Direct WhatsApp Access',
    description:
      'Skip slow ticket queues—message directly on WhatsApp to send files, clarify instructions, and get real-time updates.',
  },
  {
    number: '06',
    title: 'Clean, Ready-to-Use Formatting',
    description:
      'Files arrive organized with proper naming conventions, aligned tables, working Excel formulas, and consistent styling.',
  },
];

export interface SkillMetric {
  name: string;
  category: string;
  level: number;
  detail: string;
}

export const CORE_SKILLS: SkillMetric[] = [
  {
    name: 'Microsoft Excel & Data Structuring',
    category: 'Spreadsheets & Formulas',
    level: 96,
    detail: 'VLOOKUP/XLOOKUP, Pivot Tables, data cleaning, deduplication, and automated trackers.',
  },
  {
    name: 'Microsoft Word & Document Layout',
    category: 'Formatting & Styles',
    level: 98,
    detail: 'Multi-page reports, corporate templates, headers/footers, TOCs, and clean print layout.',
  },
  {
    name: 'PDF Conversion & Manual Cleanup',
    category: 'PDF to Word / Excel',
    level: 95,
    detail: 'Exact layout preservation from scanned PDFs, forms, and tabular statements.',
  },
  {
    name: 'High-Speed Touch Typing & Proofing',
    category: 'Documentation',
    level: 97,
    detail: 'Rapid transcription of handwritten notes, scans, and memos with thorough proofreading.',
  },
  {
    name: 'Inbox Triage & Email Correspondence',
    category: 'Communication',
    level: 94,
    detail: 'Priority labeling, follow-up reminders, calendar invites, and client replies.',
  },
  {
    name: 'Web Research & Data Verification',
    category: 'Research & Sourcing',
    level: 92,
    detail: 'Structured contact building, supplier research, and multi-source fact verification.',
  },
  {
    name: 'Digital Filing & Cloud Organization',
    category: 'Google Drive / OneDrive',
    level: 95,
    detail: 'Standardized naming systems, folder indexing, and permission-safe record storage.',
  },
  {
    name: 'Confidential Back-Office Coordination',
    category: 'Virtual Assistance',
    level: 96,
    detail: 'Invoice tracking, meeting notes, slide decks, and recurring administrative routines.',
  },
];

export const HERO_COMMITMENTS = [
  { value: '12', label: 'Core Office Services' },
  { value: '99.8%', label: 'Data Accuracy Standard' },
  { value: '24h', label: 'Standard Task Turnaround' },
  { value: '100%', label: 'Confidential File Handling' },
];
