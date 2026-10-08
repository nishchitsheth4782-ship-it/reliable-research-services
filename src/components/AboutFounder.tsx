import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Award } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Company */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[80px] pointer-events-none" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-6">
              Practical Digital Solutions Agency
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              We are a modern digital solutions agency focused on creating practical websites, marketing solutions, books and small automation tools.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Our approach is simple: understand the requirement, structure the work, build a practical solution and deliver it clearly.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              We use modern digital and AI-assisted tools where they genuinely help improve the process, while keeping the final solution focused on the actual business need.
            </p>
          </div>

          {/* Founder */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] pointer-events-none" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50">
              Behind The Company
            </span>
            <div className="flex items-center gap-4 mt-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                NS
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Nishchit Sheth</h3>
                <p className="text-cyan-400 text-sm font-medium">Founder & Principal Strategist</p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Nishchit Sheth is the founder behind the company, with a practical interest in digital solutions, AI-assisted workflows, marketing and building useful tools for everyday business needs.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              His focus is on keeping solutions practical, understandable and useful rather than unnecessarily complicated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
