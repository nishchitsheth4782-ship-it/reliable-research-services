import React from 'react';
import { Globe, BookOpen, MessageSquareText, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onOpenContact: (defaultService: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const services = [
    {
      id: 'ai-websites',
      number: '01',
      title: 'AI-Assisted Websites',
      description: 'Websites created with modern AI-assisted workflows, with attention to structure, content, usability and presentation.',
      suitableFor: ['Businesses', 'Startups', 'Personal brands', 'Professionals', 'Small projects'],
      ctaText: 'Discuss a Website',
      serviceName: 'AI-Assisted Website',
      icon: Globe,
      gradient: 'from-cyan-500/20 to-sky-500/5',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    },
    {
      id: 'book-writing',
      number: '02',
      title: 'Book Writing',
      description: 'Practical support for people who want to turn their ideas, knowledge or experiences into a structured book.',
      suitableFor: ['Idea development', 'Content structure', 'Chapter planning', 'AI-assisted drafting', 'Editing & presentation'],
      ctaText: 'Discuss Your Book',
      serviceName: 'Book Writing',
      icon: BookOpen,
      gradient: 'from-sky-500/20 to-blue-500/5',
      iconColor: 'text-sky-400',
      borderColor: 'border-sky-500/30 hover:border-sky-500/60',
    },
    {
      id: 'whatsapp-marketing',
      number: '03',
      title: 'WhatsApp Marketing',
      description: 'Practical WhatsApp marketing support for businesses that want to communicate with customers and prospects more effectively.',
      suitableFor: ['Campaign planning', 'Message & content prep', 'Customer workflows', 'Promotional messaging', 'Basic automation'],
      ctaText: 'Discuss WhatsApp Marketing',
      serviceName: 'WhatsApp Marketing',
      icon: MessageSquareText,
      gradient: 'from-blue-500/20 to-indigo-500/5',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    },
    {
      id: 'small-tools',
      number: '04',
      title: 'Small Tools & Automation',
      description: 'Small, practical tools designed to reduce repetitive everyday work and simplify your internal operations.',
      suitableFor: ['Simple business utilities', 'Internal workflow tools', 'Calculators & helpers', 'Repetitive-task automation', 'Custom small apps'],
      ctaText: 'Tell Us What You Need',
      serviceName: 'Small Tool / Automation',
      icon: Cpu,
      gradient: 'from-teal-500/20 to-cyan-500/5',
      iconColor: 'text-teal-400',
      borderColor: 'border-teal-500/30 hover:border-teal-500/60',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            What We Offer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Simple, practical digital solutions designed around what you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                className={`group relative rounded-3xl bg-slate-900/90 border ${svc.borderColor} p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${svc.gradient} rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100`} />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80 ${svc.iconColor} shadow-md`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-slate-700/60 group-hover:text-slate-600 transition-colors">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Suitable for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {svc.suitableFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-xl"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenContact(svc.serviceName)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
