import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DATABASE_URL, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, NODE_ENV } = process.env;

let sequelize;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'mysql',
    logging: false
  });
} else {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST || '127.0.0.1',
    port: DB_PORT || 3306,
    dialect: 'mysql',
    logging: false
  });
}

export default sequelize;
