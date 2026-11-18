import React from 'react';
import { motion } from 'framer-motion';

export interface BarDatum {
  label: string;
  value: number;
  color: string;
  /** Optional secondary value, drawn as a lighter shadow bar behind. */
  secondary?: number;
  secondaryColor?: string;
}

interface BarChartProps {
  data: BarDatum[];
  height?: number;
  /** Formats the value shown in the tooltip / on top of the bar. */
  format?: (v: number) => string;
  accentIndex?: number;
  accentColor?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 148,
  format = (v) => String(v),
  accentIndex = -1,
  accentColor = '#14B8A6',
}) => {
  const max = Math.max(...data.map((d) => Math.max(d.value, d.secondary ?? 0)), 1);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2 sm:gap-3" style={{ height }}>
        {data.map((d, idx) => {
          const pct = (d.value / max) * 100;
          const secPct = d.secondary ? (d.secondary / max) * 100 : 0;
          const isAccent = idx === accentIndex;

          return (
            <div key={d.label} className="relative flex-1 flex items-end justify-center gap-1 h-full group">
              {d.secondary !== undefined && (
                <div className="relative w-full max-w-[18px] h-full flex items-end">
                  <div
                    className="w-full rounded-t-xl hatch"
                    style={{ height: `${Math.max(secPct, 3)}%` }}
                  />
                </div>
              )}

              <div className="relative w-full max-w-[18px] h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(pct, 3)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.07, ease: 'easeOut' }}
                  className="w-full rounded-t-xl"
                  style={{ backgroundColor: isAccent ? accentColor : d.color }}
                />
                {/* Tooltip on hover, mirroring the reference callout */}
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <div className="whitespace-nowrap rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-700 shadow-lg border border-slate-100">
                    {d.label} · {format(d.value)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 sm:gap-3">
        {data.map((d, idx) => (
          <span
            key={d.label}
            className={`flex-1 text-center text-[10px] font-semibold truncate ${
              idx === accentIndex ? 'text-teal-600' : 'text-slate-400'
            }`}
          >
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
};
