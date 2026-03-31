import React from 'react';
import { ClipboardCheck, User, Stethoscope } from 'lucide-react';
import { doctors, patients } from '../data/mockData';

const doctorName = (id) => doctors.find((d) => d.id === id)?.name || 'Doctor';
const patientName = (id) => patients.find((p) => p.id === id)?.id || id;

export default function RecordCard({ record }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ClipboardCheck className="text-brand-600" size={18} />
          <p className="font-semibold text-slate-800">Visit on {record.visitDate}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">#{record.id}</span>
      </div>
      <div className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
        <p className="flex items-center gap-2">
          <User size={16} className="text-slate-500" /> Patient: {patientName(record.patientId)}
        </p>
        <p className="flex items-center gap-2">
          <Stethoscope size={16} className="text-slate-500" /> Doctor: {doctorName(record.doctorId)}
        </p>
        <p>
          <span className="font-semibold text-slate-700">Diagnosis: </span>
          {record.diagnosis}
        </p>
        <p>
          <span className="font-semibold text-slate-700">Treatment: </span>
          {record.treatment}
        </p>
      </div>
      {record.notes && <p className="mt-2 text-sm text-slate-500">Notes: {record.notes}</p>}
    </div>
  );
}
