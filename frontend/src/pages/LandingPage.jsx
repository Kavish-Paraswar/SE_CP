import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, ShieldCheck, Stethoscope, LineChart, Sparkles, Activity } from 'lucide-react';
import Brand from '../components/Brand';

const features = [
  {
    icon: CalendarClock,
    title: 'Instant bookings',
    text: 'Patients pick the exact slot they need with automatic reminders.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    text: 'JWT auth, hashed passwords, and role-based guardrails everywhere.'
  },
  {
    icon: Stethoscope,
    title: 'Doctor-first tools',
    text: 'Manage schedules, notes, prescriptions, and visits from one view.'
  },
  {
    icon: LineChart,
    title: 'Admin insights',
    text: 'Real-time occupancy, cancellations, and revenue-ready exports.'
  }
];

const timeline = [
  { title: 'Book', detail: 'Patients pick slot & doctor', color: 'bg-brand-50 text-brand-700' },
  { title: 'Visit', detail: 'Doctor notes & prescriptions', color: 'bg-slate-900 text-white' },
  { title: 'Follow-up', detail: 'Automated reminders + reports', color: 'bg-amber-100 text-amber-800' }
];

export default function LandingPage() {
  const liveOccupancy = 42 + Math.floor(Math.random() * 18);
  const onTime = 92 + Math.floor(Math.random() * 5);
  return (
    <div className="min-h-screen gradient text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Brand />
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/login" className="rounded-xl px-4 py-2 font-semibold text-slate-700">
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-slate-800"
          >
            Create account
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="grid items-center gap-10 rounded-4xl bg-white/80 p-10 shadow-soft backdrop-blur-xl lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Smart Hospital Suite
            </p>
            <h1 className="font-display text-4xl leading-tight lg:text-5xl">
              Manage appointments, records, and teams with one modern workspace.
            </h1>
            <p className="text-lg text-slate-600">
              Built for hospital operations: patients self-serve bookings, doctors stay on schedule, admins get clean
              reports. Secure, fast, and ready for production.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/register"
                className="rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
              >
                Get started
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                View dashboards <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">24/7</p>
                <p>Booking availability</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">99.9%</p>
                <p>Uptime ready</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">HIPAA-lite</p>
                <p>Secure defaults</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-brand-100 to-slate-100 blur-3xl" />
            <div className="relative rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Today's load</p>
                  <p className="text-3xl font-semibold text-slate-900">{liveOccupancy} visits</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Live</span>
              </div>
              <div className="mt-6 space-y-3">
                {['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics'].map((dept) => (
                  <div key={dept} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-3">
                    <div>
                      <p className="font-semibold text-slate-800">{dept}</p>
                      <p className="text-xs text-slate-500">Avg wait: 08m</p>
                    </div>
                    <p className="text-sm font-semibold text-brand-700">On time</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
                    <Sparkles size={14} /> SLA
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{onTime}% on-time</p>
                  <p className="text-xs text-slate-500">Rolling last 24h</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-3 text-white floating">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-brand-100">
                    <Activity size={14} /> Uptime
                  </p>
                  <p className="mt-1 text-xl font-semibold">99.97%</p>
                  <p className="text-xs text-brand-50/80">APIs & notifications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <item.icon size={20} />
              </span>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl bg-white/80 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Flow</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">One continuous care journey</h3>
              <p className="text-sm text-slate-500 max-w-xl">
                Every touchpoint stays in sync: bookings, doctor notes, prescriptions, and admin reports. Built to plug into email/SMS now and EHR later.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {timeline.map((step) => (
                <div key={step.title} className={`rounded-2xl ${step.color} px-4 py-5 shadow-soft`}>
                  <p className="text-xs uppercase tracking-wide font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white/80 py-4 text-center text-sm text-slate-500">
        Smart Hospital Appointment &amp; Record Management System — crafted for reliable care delivery.
      </footer>
    </div>
  );
}
