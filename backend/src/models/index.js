import sequelize from '../config/database.js';
import User from './User.js';
import Patient from './Patient.js';
import Doctor from './Doctor.js';
import Specialization from './Specialization.js';
import Appointment from './Appointment.js';
import MedicalRecord from './MedicalRecord.js';
import Prescription from './Prescription.js';
import Notification from './Notification.js';

// Associations
User.hasOne(Patient, { foreignKey: 'user_id' });
Patient.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Doctor, { foreignKey: 'user_id' });
Doctor.belongsTo(User, { foreignKey: 'user_id' });

Specialization.hasMany(Doctor, { foreignKey: 'specialization_id' });
Doctor.belongsTo(Specialization, { foreignKey: 'specialization_id' });

Patient.hasMany(Appointment, { foreignKey: 'patient_id' });
Appointment.belongsTo(Patient, { foreignKey: 'patient_id' });

Doctor.hasMany(Appointment, { foreignKey: 'doctor_id' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctor_id' });

Patient.hasMany(MedicalRecord, { foreignKey: 'patient_id' });
MedicalRecord.belongsTo(Patient, { foreignKey: 'patient_id' });

Doctor.hasMany(MedicalRecord, { foreignKey: 'doctor_id' });
MedicalRecord.belongsTo(Doctor, { foreignKey: 'doctor_id' });

MedicalRecord.hasMany(Prescription, { foreignKey: 'medical_record_id' });
Prescription.belongsTo(MedicalRecord, { foreignKey: 'medical_record_id' });

User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

export {
  sequelize,
  User,
  Patient,
  Doctor,
  Specialization,
  Appointment,
  MedicalRecord,
  Prescription,
  Notification
};
