import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Specialization extends Model {}

Specialization.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
  },
  { sequelize, modelName: 'Specialization', tableName: 'specializations', timestamps: false }
);

export default Specialization;
