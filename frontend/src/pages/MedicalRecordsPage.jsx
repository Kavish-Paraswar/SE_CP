import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import SectionCard from '../components/SectionCard';
import RecordCard from '../components/RecordCard';
import { useAuth } from '../state/AuthContext';
import { fetchRecords } from '../api/records';

export default function MedicalRecordsPage() {
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchRecords({
        patientId: user?.role === 'patient' ? user?.patientId : undefined,
        doctorId: user?.role === 'doctor' ? user?.doctorId : undefined,
        date: date || undefined
      });
      setRecords(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load records');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, user?.id]);

  const filtered = useMemo(() => {
    return records.filter((rec) => {
      if (query && !`${rec.diagnosis} ${rec.treatment} ${rec.notes}`.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [query, records]);

  return (
    <DashboardLayout
      role={user?.role || 'patient'}
      title="Medical records"
      subtitle="Secure, role-based access to visit notes and prescriptions"
    >
      <SectionCard
        title="Search & filter"
        action={<span className="text-xs text-slate-500">{filtered.length} visible</span>}
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <label className="text-sm text-slate-600">
            Keyword
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Diagnosis, treatment, note..."
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
          </label>
          <label className="text-sm text-slate-600">
            Visit date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
          </label>
        </div>
      </SectionCard>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {loading ? (
          <p className="text-sm text-slate-500">Loading records...</p>
        ) : error ? (
          <p className="text-sm text-rose-600">{error}</p>
        ) : (
          <>
            {filtered.map((rec) => (
              <RecordCard key={rec.id} record={rec} />
            ))}
            {filtered.length === 0 && <p className="text-sm text-slate-500">No records match the filters.</p>}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
