import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class MedicalRecord extends Model {}

MedicalRecord.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patientId: { type: DataTypes.INTEGER, allowNull: false, field: 'patient_id' },
    doctorId: { type: DataTypes.INTEGER, allowNull: false, field: 'doctor_id' },
    diagnosis: { type: DataTypes.STRING, allowNull: false },
    treatment: { type: DataTypes.STRING },
    notes: { type: DataTypes.TEXT },
    visitDate: { type: DataTypes.DATEONLY, field: 'visit_date', allowNull: false }
  },
  {
    sequelize,
    modelName: 'MedicalRecord',
    tableName: 'medical_records',
    timestamps: false,
    indexes: [{ fields: ['patient_id'] }, { fields: ['doctor_id'] }, { fields: ['visit_date'] }]
  }
);

export default MedicalRecord;
