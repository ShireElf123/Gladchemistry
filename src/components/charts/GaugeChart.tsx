import React from 'react';
import { motion } from 'framer-motion';

interface GaugeChartProps {
  /** 0–100 */
  percent: number;
  label: string;
  caption?: string;
  /** Gradient stops for the filled arc. */
  from?: string;
  via?: string;
  to?: string;
  size?: number;
}

/**
 * Half-ring gauge, in the style of the reference dashboard's big percentage
 * card: bold rounded arc with a gradient sweep and a large number beneath.
 */
export const GaugeChart: React.FC<GaugeChartProps> = ({
  percent,
  label,
  caption,
  from = '#22C55E',
  via = '#EAB308',
  to = '#16A34A',
  size = 208,
}) => {
  const stroke = 18;
  const r = size / 2 - stroke / 2 - 4;
  const cx = size / 2;
  const cy = size / 2;

  // Half circle: 180 degrees, drawn from 180° to 360°.
  const circumference = Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  const filled = (clamped / 100) * circumference;
  const gradientId = React.useId();

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size / 2 + stroke }}>
        <svg width={size} height={size / 2 + stroke} viewBox={`0 0 ${size} ${size / 2 + stroke}`}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={from} />
              <stop offset="50%" stopColor={via} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>

          <path
            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth={stroke}
            strokeLinecap="round"
          />

          <motion.path
            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - filled }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
        </svg>

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-0.5">
          <span className="font-display font-extrabold text-4xl text-white leading-none tracking-tight">
            {Math.round(clamped)}%
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm font-bold text-white/90">{label}</p>
      {caption && <p className="text-[11px] text-white/60 mt-0.5">{caption}</p>}
    </div>
  );
};
