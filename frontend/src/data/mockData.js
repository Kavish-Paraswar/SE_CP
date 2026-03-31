import dayjs from 'dayjs';

export const specializations = [
  { id: 1, name: 'Cardiology' },
  { id: 2, name: 'Neurology' },
  { id: 3, name: 'Pediatrics' },
  { id: 4, name: 'Orthopedics' },
  { id: 5, name: 'Dermatology' },
  { id: 6, name: 'General Medicine' }
];

export const users = [
  { id: 1, name: 'Ananya Sharma', email: 'ananya.sharma@example.com', role: 'patient', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ananya+Sharma' },
  { id: 2, name: 'Dr. Asha Iyer', email: 'asha.iyer@example.com', role: 'doctor', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Asha+Iyer' },
  { id: 3, name: 'Dr. Arjun Mehta', email: 'arjun.mehta@example.com', role: 'doctor', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Arjun+Mehta' },
  { id: 4, name: 'Admin Priya', email: 'admin@example.com', role: 'admin', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Admin+Priya' },
  { id: 5, name: 'Ravi Kumar', email: 'ravi.kumar@example.com', role: 'patient', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ravi+Kumar' }
];

export const doctors = [
  {
    id: 1,
    userId: 2,
    name: 'Dr. Asha Iyer',
    specializationId: 1,
    qualification: 'MD, DM (Cardiology)',
    experienceYears: 14,
    consultationFee: 1800,
    rating: 4.8,
    nextAvailable: dayjs().add(1, 'day').hour(10).minute(30).format('YYYY-MM-DD HH:mm')
  },
  {
    id: 2,
    userId: 3,
    name: 'Dr. Arjun Mehta',
    specializationId: 3,
    qualification: 'MD (Pediatrics)',
    experienceYears: 9,
    consultationFee: 1200,
    rating: 4.6,
    nextAvailable: dayjs().add(2, 'day').hour(9).minute(0).format('YYYY-MM-DD HH:mm')
  },
  {
    id: 3,
    userId: 6,
    name: 'Dr. Neeraj Nair',
    specializationId: 2,
    qualification: 'DM (Neurology)',
    experienceYears: 11,
    consultationFee: 1600,
    rating: 4.7,
    nextAvailable: dayjs().add(1, 'day').hour(14).minute(0).format('YYYY-MM-DD HH:mm')
  }
];

export const patients = [
  { id: 1, userId: 1, age: 32, gender: 'Female', phone: '+91 98765 12345', address: 'Bengaluru, KA', bloodGroup: 'A+' },
  { id: 2, userId: 5, age: 41, gender: 'Male', phone: '+91 98111 22334', address: 'Mumbai, MH', bloodGroup: 'O-' }
];

export const appointments = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    appointmentDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    appointmentTime: '10:30',
    status: 'booked',
    reason: 'Chest discomfort after commute'
  },
  {
    id: 2,
    patientId: 1,
    doctorId: 2,
    appointmentDate: dayjs().subtract(3, 'day').format('YYYY-MM-DD'),
    appointmentTime: '15:00',
    status: 'completed',
    reason: 'Child vaccination follow-up'
  },
  {
    id: 3,
    patientId: 2,
    doctorId: 3,
    appointmentDate: dayjs().add(2, 'day').format('YYYY-MM-DD'),
    appointmentTime: '09:30',
    status: 'booked',
    reason: 'Migraine follow-up after travel'
  }
];

export const medicalRecords = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    diagnosis: 'Mild angina',
    treatment: 'Lifestyle changes, beta blockers',
    notes: 'Schedule TMT at next visit',
    visitDate: dayjs().subtract(20, 'day').format('YYYY-MM-DD')
  },
  {
    id: 2,
    patientId: 1,
    doctorId: 2,
    diagnosis: 'Seasonal allergy',
    treatment: 'Antihistamines',
    notes: 'Monitor response; follow-up in 2 weeks',
    visitDate: dayjs().subtract(5, 'day').format('YYYY-MM-DD')
  },
  {
    id: 3,
    patientId: 2,
    doctorId: 3,
    diagnosis: 'Chronic migraine',
    treatment: 'Prophylactic therapy',
    notes: 'Track triggers and sleep routine',
    visitDate: dayjs().subtract(10, 'day').format('YYYY-MM-DD')
  }
];

export const prescriptions = [
  {
    id: 1,
    medicalRecordId: 1,
    patientId: 1,
    doctorId: 1,
    medicines: 'Metoprolol 50mg',
    dosageInstructions: '1 tablet twice daily after meals'
  },
  {
    id: 2,
    medicalRecordId: 3,
    patientId: 2,
    doctorId: 3,
    medicines: 'Topiramate 25mg',
    dosageInstructions: '1 tablet at night for 7 days'
  }
];

export const notifications = [
  { id: 1, userId: 1, title: 'Appointment reminder', message: 'Cardiology visit tomorrow at 10:30 AM', type: 'appointment', isRead: false },
  { id: 2, userId: 2, title: 'New patient record', message: 'Migraine follow-up added to your list', type: 'record', isRead: false },
  { id: 3, userId: 4, title: 'Weekly report', message: 'Download scheduled utilization report', type: 'report', isRead: true }
];
