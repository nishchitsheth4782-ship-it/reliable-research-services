import React from 'react';
import { CheckCircle2, Zap, MessageSquare, Sliders, Target } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: 'Practical Approach',
      description: 'We focus on solving the actual requirement rather than adding unnecessary complexity.',
      icon: Target,
    },
    {
      title: 'AI Where It Helps',
      description: 'AI-assisted workflows are used where they can make the work faster or more practical.',
      icon: Zap,
    },
    {
      title: 'Clear Communication',
      description: 'Requirements, scope and deliverables should remain easy to understand at every stage.',
      icon: MessageSquare,
    },
    {
      title: 'Flexible Solutions',
      description: 'Not every business needs a large platform. Sometimes a focused solution is enough.',
      icon: Sliders,
    },
    {
      title: 'Built Around Your Need',
      description: 'Each project starts with understanding what you actually need and nothing more.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Why Work With Us
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Genuine, simple differentiators focused on your success without exaggerated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const IconComp = r.icon;
            const isLast = idx === reasons.length - 1;
            return (
              <div
                key={idx}
                className={`rounded-3xl bg-slate-900/80 border border-slate-800 p-8 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80 text-cyan-400 w-fit mb-6 shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {r.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
