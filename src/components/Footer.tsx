import React from 'react';
import { Logo } from './Logo';
import { Mail, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-2xl border border-slate-200 inline-block">
              <Logo size="md" layout="vertical" showTagline={true} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Marketing & Digital Solutions Agency. Practical digital solutions, AI-assisted websites, book writing, WhatsApp marketing, and automation tools.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>nishchitsheth4782@gmail.com</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'What We Offer', 'Who We Help', 'How We Work'].map((item, idx) => {
                const id = ['hero', 'services', 'who-we-help', 'how-we-work'][idx];
                return (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Founder', 'FAQ', 'Contact'].map((item, idx) => {
                const id = ['about', 'about', 'faq', 'contact'][idx];
                return (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: We respect your privacy and protect all enquiry data.'); }} className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Practical solutions delivered with clear scope and mutual agreement.'); }} className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Reliable Research Services. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-full transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
