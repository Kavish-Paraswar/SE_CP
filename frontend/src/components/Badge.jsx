import React from 'react';
import clsx from 'clsx';

const colors = {
  booked: 'bg-emerald-100 text-emerald-700',
  completed: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-rose-100 text-rose-700',
  pending: 'bg-amber-100 text-amber-700'
};

export default function Badge({ label, variant = 'booked' }) {
  return <span className={clsx('rounded-full px-3 py-1 text-xs font-semibold', colors[variant])}>{label}</span>;
}
