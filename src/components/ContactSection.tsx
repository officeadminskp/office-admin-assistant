import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, CheckCircle2, Clock, Phone, Globe2 } from 'lucide-react';
import {
  ADMIN_SERVICES,
  WHATSAPP_NUMBER_DISPLAY,
  buildWhatsAppUrl,
} from '../data/adminData';

interface FormState {
  name: string;
  contact: string;
  service: string;
  details: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  details?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    contact: '',
    service: ADMIN_SERVICES[0].title,
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const contactTrimmed = form.contact.trim();
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactTrimmed);
    const phoneLike = /^[+\d\s()-]{7,}$/.test(contactTrimmed);
    if (!contactTrimmed || (!emailLike && !phoneLike)) {
      nextErrors.contact = 'Please enter a valid email address or phone / WhatsApp number.';
    }
    if (!form.details.trim() || form.details.trim().length < 10) {
      nextErrors.details = 'Please describe your task or file requirements (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const formattedWhatsAppInquiry = buildWhatsAppUrl(
    `Hello! I am interested in your Office Admin Assistant Services.\n\nName: ${
      form.name.trim() || 'Client'
    }\nContact: ${form.contact.trim() || 'Provided via form'}\nService Needed: ${
      form.service
    }\nProject Details: ${form.details.trim() || 'Please share more details.'}`
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-sm font-semibold text-sky-700 mb-2">Contact Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 text-balance">
            Need Professional Office Support? Let&apos;s Work Together!
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach out directly on WhatsApp for the fastest response, or submit your project requirements below to prepare an instant WhatsApp brief.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct WhatsApp & Workflow Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-navy-900 text-white p-7 sm:p-8 border border-navy-800">
              <p className="text-xs font-semibold tracking-wide text-sky-300 mb-2">
                Direct WhatsApp Support
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Have spreadsheets, PDFs, or daily admin tasks ready to go? Start a direct WhatsApp conversation to confirm pricing and turnaround time.
              </p>

              <div className="space-y-3.5 text-sm text-slate-200 mb-7">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sky-300 shrink-0" aria-hidden="true" />
                  <span className="font-mono tabular-nums font-medium">{WHATSAPP_NUMBER_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-300 shrink-0" aria-hidden="true" />
                  <span>Fast replies Monday – Saturday · Flexible time zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-4 h-4 text-sky-300 shrink-0" aria-hidden="true" />
                  <span>Remote services available worldwide</span>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors duration-150"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <h3 className="font-display text-base font-bold text-navy-900 mb-4">
                How We Work Together
              </h3>
              <ol className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-sky-700 mt-0.5 tabular-nums">
                    01.
                  </span>
                  <span>Send your task details or sample files via WhatsApp or the form.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-sky-700 mt-0.5 tabular-nums">
                    02.
                  </span>
                  <span>Receive a clear timeline and affordable fixed or hourly quote.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-sky-700 mt-0.5 tabular-nums">
                    03.
                  </span>
                  <span>Get verified, cleanly formatted files delivered right on schedule.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-6 text-center space-y-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                  <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    Inquiry Ready to Send
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-navy-900">{form.name}</strong>. Your inquiry for{' '}
                    <strong className="text-navy-900">{form.service}</strong> has been prepared. Click below to send it directly to my WhatsApp desk for immediate attention.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={formattedWhatsAppInquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    <span>Send Inquiry on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        contact: '',
                        service: ADMIN_SERVICES[0].title,
                        details: '',
                      });
                    }}
                    className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Edit or Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    Request Administrative Support
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill in your task overview below and connect instantly via WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Your Name <span className="text-sky-700">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Ahmed"
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-slate-300 focus:border-sky-600'
                      }`}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-info"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Email or WhatsApp Number <span className="text-sky-700">*</span>
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      value={form.contact}
                      onChange={(e) => {
                        setForm({ ...form, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: undefined });
                      }}
                      placeholder="name@company.com or +92 300..."
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors ${
                        errors.contact
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-slate-300 focus:border-sky-600'
                      }`}
                    />
                    {errors.contact && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-sky-600 transition-colors"
                  >
                    {ADMIN_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.index}. {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Task Details &amp; Deadline <span className="text-sky-700">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => {
                      setForm({ ...form, details: e.target.value });
                      if (errors.details) setErrors({ ...errors, details: undefined });
                    }}
                    placeholder="Briefly describe your files, page/row count, formatting requirements, and target deadline..."
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors resize-y ${
                      errors.details
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-slate-300 focus:border-sky-600'
                    }`}
                  />
                  {errors.details && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.details}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-navy-900 hover:bg-sky-700 rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Prepare &amp; Submit Inquiry</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-navy-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Quick WhatsApp Message</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
