import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, Mail, Building, User, HelpCircle } from 'lucide-react';

interface ContactProps {
  defaultService?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ defaultService = 'AI-Assisted Website', isOpenModal = false, onCloseModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: '',
  });

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address (e.g. you@company.com).');
      return;
    }

    // Phone / WhatsApp validation (at least 7 digits or valid format)
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (phoneClean.length < 7) {
      setErrorMessage('Please enter a valid phone or WhatsApp number (at least 7 digits).');
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`New Enquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Service: ${formData.service}\n\n` +
      `Requirement Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:nishchitsheth4782@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  const formContent = (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600/15 via-sky-600/10 to-transparent blur-[100px] pointer-events-none" />

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Enquiry Received!</h3>
          <p className="text-slate-300 max-w-md mx-auto mb-8 text-sm sm:text-base">
            Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Nishchit Sheth and our team will review your requirement and get in touch with you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', company: '', service: 'AI-Assisted Website', message: '' });
              if (isOpenModal && onCloseModal) onCloseModal();
            }}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all cursor-pointer"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-3">
              Have an Idea? Let's Talk.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Tell us what you need. Whether it's a website, WhatsApp marketing, a book project or a small automation tool, start with a simple conversation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-800/80 text-rose-300 text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  WhatsApp / Phone <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Company / Organization <span className="text-slate-500">(Optional)</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                What do you need help with? <span className="text-cyan-400">*</span>
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="AI-Assisted Website">AI-Assisted Website</option>
                <option value="Book Writing">Book Writing</option>
                <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                <option value="Small Tool / Automation">Small Tool / Automation</option>
                <option value="Something Else">Something Else</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Tell us a little about your requirement <span className="text-cyan-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your goals, timeline, or current challenges..."
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-950/40 transition-all cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                <Send className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919979955963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            ✕
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
