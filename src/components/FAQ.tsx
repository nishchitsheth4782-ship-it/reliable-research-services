import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What services does the company offer?',
      a: 'We provide AI-assisted websites, book writing support, WhatsApp marketing solutions and small tools and automation for practical business needs.',
    },
    {
      q: 'Do you build websites for small businesses?',
      a: 'Yes. We can create practical AI-assisted websites for businesses, startups, professionals and small projects with attention to structure, usability and presentation.',
    },
    {
      q: 'Can you help with book writing?',
      a: 'Yes. We can help structure ideas, develop chapters and use AI-assisted workflows to support the writing, editing and refinement process.',
    },
    {
      q: 'Do you provide WhatsApp marketing?',
      a: 'Yes. We can help businesses plan and structure WhatsApp marketing campaigns, message preparation, and customer communication workflows.',
    },
    {
      q: 'Can you build a small custom automation tool?',
      a: 'Yes. We can create focused tools and automation for specific repetitive or everyday tasks to reduce manual work.',
    },
    {
      q: 'Who do you work with?',
      a: 'We work with startups, small and medium businesses, agencies, researchers/students working on book projects and businesses looking for practical automation.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
            AEO & FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Clear, direct answers about our services, process, and how we help businesses.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-800 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-cyan-950' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
