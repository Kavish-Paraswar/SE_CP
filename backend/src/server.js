import dotenv from 'dotenv';
import app from './app.js';
import { sequelize } from './models/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`API running on :${PORT}`));
  } catch (err) {
    console.error('Unable to start server', err);
    process.exit(1);
  }
}

start();
