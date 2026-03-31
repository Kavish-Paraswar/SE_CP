import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function StatCard({ label, value, delta, icon: Icon, color = 'bg-brand-100 text-brand-700' }) {
  return (
    <div className="glass flex flex-1 items-center justify-between rounded-3xl p-4">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
        {delta && (
          <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <ArrowUpRight size={14} />
            {delta}
          </p>
        )}
      </div>
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
        {Icon && <Icon size={22} />}
      </span>
    </div>
  );
}
