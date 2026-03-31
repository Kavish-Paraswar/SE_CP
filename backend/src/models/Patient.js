import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Patient extends Model {}

Patient.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, field: 'user_id' },
    age: { type: DataTypes.INTEGER },
    gender: { type: DataTypes.STRING(20) },
    phone: { type: DataTypes.STRING(20) },
    address: { type: DataTypes.STRING },
    bloodGroup: { type: DataTypes.STRING(5), field: 'blood_group' }
  },
  { sequelize, modelName: 'Patient', tableName: 'patients', timestamps: false }
);

export default Patient;
