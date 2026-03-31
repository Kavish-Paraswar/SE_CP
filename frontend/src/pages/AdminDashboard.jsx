import React, { useEffect, useState } from 'react';
import { Activity, CalendarRange, Shield, Users } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import SectionCard from '../components/SectionCard';
import AppointmentCard from '../components/AppointmentCard';
import RecordCard from '../components/RecordCard';
import { appointments as mockAppointments, doctors as mockDoctors, medicalRecords as mockRecords, patients as mockPatients } from '../data/mockData';
import { fetchAppointments } from '../api/appointments';
import { fetchRecords } from '../api/records';
import { fetchDoctors } from '../api/doctors';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [medicalRecords, setMedicalRecords] = useState(mockRecords);
  const [doctors, setDoctors] = useState(mockDoctors);
  const [patients] = useState(mockPatients);

  useEffect(() => {
    const load = async () => {
      try {
        const [apptData, recordData, doctorData] = await Promise.all([
          fetchAppointments(),
          fetchRecords(),
          fetchDoctors()
        ]);
        setAppointments(apptData);
        setMedicalRecords(recordData);
        setDoctors(doctorData);
      } catch (_) {
        // fallback to mock
      }
    };
    load();
  }, []);

  const stats = [
    { label: 'Patients', value: patients.length, delta: '+4.2% WoW', icon: Users },
    { label: 'Doctors', value: doctors.length, delta: 'Onboarded', icon: Shield },
    { label: 'Active appts', value: appointments.filter((a) => a.status === 'booked').length, icon: CalendarRange },
    { label: 'Records', value: medicalRecords.length, delta: 'Sync OK', icon: Activity }
  ];

  return (
    <DashboardLayout role="admin" title="Admin control" subtitle="Manage hospital load and compliance">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Live appointments">
          <div className="space-y-3">
            {appointments.slice(0, 5).map((appt) => (
              <AppointmentCard key={appt.id} appointment={appt} />
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Recent medical records">
          <div className="space-y-3">
            {medicalRecords.slice(0, 4).map((rec) => (
              <RecordCard key={rec.id} record={rec} />
            ))}
          </div>
        </SectionCard>
      </div>
    </DashboardLayout>
  );
}
