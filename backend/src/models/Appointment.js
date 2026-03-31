import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Appointment extends Model {}

Appointment.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patientId: { type: DataTypes.INTEGER, allowNull: false, field: 'patient_id' },
    doctorId: { type: DataTypes.INTEGER, allowNull: false, field: 'doctor_id' },
    appointmentDate: { type: DataTypes.DATEONLY, allowNull: false, field: 'appointment_date' },
    appointmentTime: { type: DataTypes.STRING, allowNull: false, field: 'appointment_time' },
    status: { type: DataTypes.ENUM('booked', 'completed', 'cancelled'), defaultValue: 'booked' },
    reason: { type: DataTypes.STRING }
  },
  {
    sequelize,
    modelName: 'Appointment',
    tableName: 'appointments',
    timestamps: false,
    indexes: [
      { fields: ['doctor_id'] },
      { fields: ['patient_id'] },
      { fields: ['appointment_date'] },
      { fields: ['status'] }
    ]
  }
);

export default Appointment;
