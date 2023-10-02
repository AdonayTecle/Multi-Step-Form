import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const databasePath = process.env.DATABASE_PATH;

if (!databasePath) {
  throw new Error('DATABASE_PATH is not defined in the .env file.');
}

console.log('Database Path:', databasePath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath,
});

export default sequelize;
