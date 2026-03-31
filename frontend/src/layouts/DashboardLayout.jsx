import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function DashboardLayout({ role, title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-100 gradient">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <Sidebar role={role} />
        <main className="flex-1 space-y-4">
          <TopBar title={title} subtitle={subtitle} />
          {children}
        </main>
      </div>
    </div>
  );
}
