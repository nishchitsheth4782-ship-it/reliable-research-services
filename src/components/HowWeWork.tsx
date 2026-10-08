import React from 'react';
import { Search, Sliders, CheckSquare, Wrench, PackageCheck } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'We first understand what you need and what problem you are trying to solve.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Structure',
      description: 'We organize the requirement into a clear and practical approach.',
      icon: Sliders,
    },
    {
      number: '03',
      title: 'Analyse Your Need',
      description: 'We look at the details, priorities and expected outcome.',
      icon: CheckSquare,
    },
    {
      number: '04',
      title: 'Build / Improve',
      description: 'We create the solution or improve what already exists.',
      icon: Wrench,
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'We provide the completed work in a clear and usable form.',
      icon: PackageCheck,
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            How We Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A simple, transparent 5-step approach designed to deliver practical results without complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-cyan-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Step {step.number} of 05</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
