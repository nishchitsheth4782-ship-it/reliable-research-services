import React from 'react';
import { Rocket, Building2, Layers, GraduationCap, Cog, Check } from 'lucide-react';

interface WhoWeHelpProps {
  onOpenContact: (defaultService?: string) => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenContact }) => {
  const audiences = [
    {
      title: 'Startups',
      description: 'For startups that need a professional digital presence or a practical tool to support an early-stage idea.',
      icon: Rocket,
      accent: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      badgeColor: 'text-cyan-400 bg-cyan-950/60',
    },
    {
      title: 'Small & Medium Businesses',
      description: 'For businesses looking to improve their online presence, customer communication or everyday workflows.',
      icon: Building2,
      accent: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/30',
      badgeColor: 'text-blue-400 bg-blue-950/60',
    },
    {
      title: 'Agencies',
      description: 'For agencies that need additional digital execution or small tools for their projects.',
      icon: Layers,
      accent: 'from-sky-500/20 to-cyan-500/20',
      borderColor: 'border-sky-500/30',
      badgeColor: 'text-sky-400 bg-sky-950/60',
    },
    {
      title: 'Researchers & Students',
      description: 'For people who want practical support with book creation and publication-related projects.',
      icon: GraduationCap,
      accent: 'from-teal-500/20 to-emerald-500/20',
      borderColor: 'border-teal-500/30',
      badgeColor: 'text-teal-400 bg-teal-950/60',
    },
    {
      title: 'Businesses Needing Everyday Automation',
      description: 'For businesses that have repetitive tasks and want a small, focused tool or automation to make the work easier.',
      icon: Cog,
      accent: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-500/30',
      badgeColor: 'text-indigo-400 bg-indigo-950/60',
    },
  ];

  return (
    <section id="who-we-help" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
            Target Audience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Who We Help
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We work with people and businesses looking for practical digital solutions without unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, index) => {
            const IconComp = aud.icon;
            const isLast = index === audiences.length - 1;
            return (
              <div
                key={index}
                className={`rounded-3xl bg-slate-900/80 border ${aud.borderColor} p-8 shadow-xl flex flex-col justify-between hover:bg-slate-900 transition-all duration-300 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80 text-cyan-400 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      Client Profile
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {aud.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {aud.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact()}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-4 border-t border-slate-800 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
