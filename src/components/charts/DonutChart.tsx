import React from 'react';
import { motion } from 'framer-motion';

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
}

const polar = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

/** Arc path for a ring segment between two angles (degrees, clockwise). */
const arcPath = (
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  start: number,
  end: number,
) => {
  const large = end - start > 180 ? 1 : 0;
  const o1 = polar(cx, cy, rOuter, start);
  const o2 = polar(cx, cy, rOuter, end);
  const i1 = polar(cx, cy, rInner, end);
  const i2 = polar(cx, cy, rInner, start);

  return [
    `M ${o1.x} ${o1.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${o2.x} ${o2.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${i2.x} ${i2.y}`,
    'Z',
  ].join(' ');
};

export const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  size = 168,
  thickness = 26,
  centerLabel,
  centerValue,
}) => {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size / 2 - 2;
  const rInner = rOuter - thickness;
  const gap = 2.2;

  let cursor = 0;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Distribution chart">
        {segments.map((seg, idx) => {
          const sweep = (seg.value / total) * 360;
          const start = cursor + gap / 2;
          const end = cursor + sweep - gap / 2;
          cursor += sweep;
          if (end <= start) return null;

          return (
            <motion.path
              key={seg.label}
              d={arcPath(cx, cy, rOuter, rInner, start, end)}
              fill={seg.color}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.12 }}
              style={{ transformOrigin: 'center' }}
            />
          );
        })}
      </svg>

      {centerValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-display font-extrabold text-2xl text-slate-900 leading-none">
            {centerValue}
          </span>
          {centerLabel && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              {centerLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

/** Percentage pills that sit on the donut ring, like the reference charts. */
export const DonutLegend: React.FC<{ segments: DonutSegment[] }> = ({ segments }) => {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {segments.map((s) => (
        <div key={s.label} className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
          <span className="text-[11px] font-semibold text-slate-500">
            {s.label}
            <span className="text-slate-400 font-normal">
              {' '}
              {Math.round((s.value / total) * 100)}%
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
