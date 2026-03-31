import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Doctor extends Model {}

Doctor.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, field: 'user_id' },
    specializationId: { type: DataTypes.INTEGER, allowNull: false, field: 'specialization_id' },
    qualification: { type: DataTypes.STRING },
    experienceYears: { type: DataTypes.INTEGER, field: 'experience_years' },
    consultationFee: { type: DataTypes.DECIMAL(10, 2), field: 'consultation_fee' }
  },
  { sequelize, modelName: 'Doctor', tableName: 'doctors', timestamps: false }
);

export default Doctor;
