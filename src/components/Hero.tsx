import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe, BookOpen, MessageSquareText, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenContact: (defaultService?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-sky-600/15 to-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Marketing & Digital Solutions Agency</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Practical Digital Solutions for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            We create practical digital solutions that help businesses, creators and professionals build, promote and simplify their everyday work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-full text-base font-extrabold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer active:scale-95 group"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-full text-base font-bold text-slate-100 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white shadow-xl shadow-black/40 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>Explore What We Offer</span>
            </button>
          </div>

          {/* Key Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-200">AI Websites</h4>
                <p className="text-[11px] text-slate-400">Modern & Usable</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-200">Book Writing</h4>
                <p className="text-[11px] text-slate-400">Structure & Draft</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-200">WhatsApp</h4>
                <p className="text-[11px] text-slate-400">Marketing & Flows</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-200">Small Tools</h4>
                <p className="text-[11px] text-slate-400">Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
