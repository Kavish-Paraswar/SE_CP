import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Prescription extends Model {}

Prescription.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    medicalRecordId: { type: DataTypes.INTEGER, allowNull: false, field: 'medical_record_id' },
    patientId: { type: DataTypes.INTEGER, allowNull: false, field: 'patient_id' },
    doctorId: { type: DataTypes.INTEGER, allowNull: false, field: 'doctor_id' },
    medicines: { type: DataTypes.TEXT, allowNull: false },
    dosageInstructions: { type: DataTypes.STRING, allowNull: false, field: 'dosage_instructions' }
  },
  { sequelize, modelName: 'Prescription', tableName: 'prescriptions', timestamps: false }
);

export default Prescription;
