import React from 'react';

export default function SectionCard({ title, action, children }) {
  return (
    <section className="glass w-full rounded-3xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}
