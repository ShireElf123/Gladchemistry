import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export interface StatTileProps {
  icon: React.ElementType;
  label: string;
  value: string;
  /** Small qualifier shown after the value, e.g. "products". */
  unit?: string;
  /** Optional delta pill, e.g. "+23.5%". */
  delta?: string;
  deltaTone?: 'up' | 'down' | 'flat';
  footnote?: string;
  accent: string;
  accentSoft: string;
  index?: number;
}

/**
 * KPI tile in the reference style: icon chip and delta pill in a tinted header
 * wash, then label, big figure and footnote.
 */
export const StatTile: React.FC<StatTileProps> = ({
  icon: Icon,
  label,
  value,
  unit,
  delta,
  deltaTone = 'up',
  footnote,
  accent,
  accentSoft,
  index = 0,
}) => {
  const toneClass =
    deltaTone === 'up'
      ? 'bg-emerald-50 text-emerald-700'
      : deltaTone === 'down'
        ? 'bg-rose-50 text-rose-600'
        : 'bg-slate-100 text-slate-500';

  const DeltaIcon = deltaTone === 'up' ? ArrowUpRight : deltaTone === 'down' ? ArrowDownRight : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="ui-tile ui-tile-hover ui-tile-wash p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: accentSoft, color: accent }}
        >
          <Icon className="h-5 w-5" />
        </div>

        {delta && (
          <span className={`ui-pill ${toneClass}`}>
            <DeltaIcon className="h-3 w-3" />
            {delta}
          </span>
        )}
      </div>

      <p className="mt-4 text-[13px] font-semibold text-slate-500">{label}</p>

      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="font-display font-extrabold text-[26px] leading-none text-slate-900 tracking-tight">
          {value}
        </span>
        {unit && <span className="text-[11px] font-semibold text-slate-400">{unit}</span>}
      </div>

      {footnote && <p className="mt-2 text-[10px] font-medium text-slate-400">{footnote}</p>}
    </motion.div>
  );
};
