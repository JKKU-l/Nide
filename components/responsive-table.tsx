'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  mobileCardTitleIndex?: number;
  themeColor?: 'green' | 'blue' | 'purple' | 'emerald' | 'orange' | 'amber' | 'red' | 'pink' | 'indigo' | 'teal' | 'yellow';
  className?: string;
}

export default function ResponsiveTable({
  headers,
  rows,
  mobileCardTitleIndex = 0,
  themeColor = 'green',
  className,
}: ResponsiveTableProps) {
  const colorMap = {
    green: { bg: 'bg-green-100', text: 'text-green-700', accent: 'bg-green-400', border: 'border-green-200' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', accent: 'bg-blue-400', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', accent: 'bg-purple-400', border: 'border-purple-200' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', accent: 'bg-emerald-400', border: 'border-emerald-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', accent: 'bg-orange-400', border: 'border-orange-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-700', accent: 'bg-amber-400', border: 'border-amber-200' },
    red: { bg: 'bg-red-100', text: 'text-red-700', accent: 'bg-red-400', border: 'border-red-200' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', accent: 'bg-pink-400', border: 'border-pink-200' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', accent: 'bg-indigo-400', border: 'border-indigo-200' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-700', accent: 'bg-teal-400', border: 'border-teal-200' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', accent: 'bg-yellow-400', border: 'border-yellow-200' },
  };

  const colors = colorMap[themeColor] || colorMap.green;

  return (
    <div className={cn('w-full', className)}>
      {/* Desktop View: Standard Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-white/40 shadow-sm">
        <table className="w-full bg-white/50 border-collapse">
          <thead className={colors.bg}>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="px-6 py-4 text-left text-xs md:text-sm font-bold text-slate-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/30">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-white/40 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4 text-[11px] md:text-sm text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: Cards */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
          >
            {/* Card Header (using mobileCardTitleIndex) */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
              <div className={cn('w-1.5 h-6 rounded-full', colors.accent)} />
              <h4 className="text-sm md:text-base font-bold text-slate-900">
                {row[mobileCardTitleIndex]}
              </h4>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
              {row.map((cell, j) => {
                if (j === mobileCardTitleIndex) return null;
                return (
                  <div key={j} className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {headers[j]}
                    </span>
                    <div className="text-xs md:text-sm font-medium text-slate-700">
                      {cell}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
