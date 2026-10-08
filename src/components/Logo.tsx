import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'vertical' | 'horizontal';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', layout = 'vertical', showTagline = true }) => {
  if (layout === 'horizontal') {
    const dim = {
      sm: { height: '36px', text: 'text-sm' },
      md: { height: '44px', text: 'text-base' },
      lg: { height: '56px', text: 'text-xl' },
    }[size];

    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Icon */}
        <div className="relative flex items-end justify-center shrink-0" style={{ height: dim.height, width: '44px' }}>
          <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,153,255,0.25)]">
            <defs>
              <linearGradient id="hBar1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0066cc" />
                <stop offset="100%" stopColor="#00aaff" />
              </linearGradient>
              <linearGradient id="hBar2" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0077ee" />
                <stop offset="100%" stopColor="#00ccff" />
              </linearGradient>
              <linearGradient id="hBar3" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#2ec4b6" />
              </linearGradient>
              <linearGradient id="hSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0044aa" />
                <stop offset="50%" stopColor="#0099ff" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
            </defs>
            <path d="M 15 65 L 35 48 L 35 85 L 15 85 Z" fill="url(#hBar1)" rx="2" />
            <path d="M 50 42 L 70 25 L 70 85 L 50 85 Z" fill="url(#hBar2)" rx="2" />
            <path d="M 85 20 L 105 5 L 105 85 L 85 85 Z" fill="url(#hBar3)" rx="2" />
            <path d="M 10 92 C 35 95, 65 90, 108 50" stroke="url(#hSweep)" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <div className={`font-black tracking-tight leading-none ${dim.text}`} style={{ color: '#041124' }}>
            Reliable
          </div>
          <div className={`font-bold tracking-tight leading-none ${dim.text} mt-1`} style={{ color: '#0099ff' }}>
            Research Services
          </div>
        </div>
      </div>
    );
  }

  // Vertical stacked layout matching original logo image exactly
  const dimensions = {
    sm: { iconWidth: '60px', iconHeight: '50px', titleSize: 'text-sm', subSize: 'text-[10px]' },
    md: { iconWidth: '80px', iconHeight: '68px', titleSize: 'text-lg', subSize: 'text-xs' },
    lg: { iconWidth: '110px', iconHeight: '92px', titleSize: 'text-2xl', subSize: 'text-sm' },
  }[size];

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className="relative flex items-end justify-center mb-2.5" style={{ width: dimensions.iconWidth, height: dimensions.iconHeight }}>
        <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,153,255,0.2)]">
          <defs>
            <linearGradient id="vBar1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0066cc" />
              <stop offset="100%" stopColor="#00aaff" />
            </linearGradient>
            <linearGradient id="vBar2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0077ee" />
              <stop offset="100%" stopColor="#00ccff" />
            </linearGradient>
            <linearGradient id="vBar3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#2ec4b6" />
            </linearGradient>
            <linearGradient id="vSweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0044aa" />
              <stop offset="50%" stopColor="#0099ff" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>
          </defs>
          <path d="M 15 65 L 35 48 L 35 85 L 15 85 Z" fill="url(#vBar1)" rx="2" />
          <path d="M 50 42 L 70 25 L 70 85 L 50 85 Z" fill="url(#vBar2)" rx="2" />
          <path d="M 85 20 L 105 5 L 105 85 L 85 85 Z" fill="url(#vBar3)" rx="2" />
          <path d="M 10 92 C 35 95, 65 90, 108 50" stroke="url(#vSweep)" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <div className={`font-black tracking-tight leading-tight ${dimensions.titleSize}`} style={{ color: '#041124' }}>
          Reliable
        </div>
        <div className={`font-bold tracking-tight leading-tight ${dimensions.titleSize} mt-0.5`} style={{ color: '#0099ff' }}>
          Research Services
        </div>

        {showTagline && (
          <div className="flex items-center gap-2 mt-2">
            <span className="w-6 h-[1px] bg-slate-400" />
            <span className={`tracking-[0.18em] uppercase font-bold text-slate-500 whitespace-nowrap ${dimensions.subSize}`}>
              RESEARCH WITH RELIABILITY
            </span>
            <span className="w-6 h-[1px] bg-slate-400" />
          </div>
        )}
      </div>
    </div>
  );
};
