import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:\\sqlite\\dataform.db', // Provide the path to your SQLite database file
});

export default sequelize;
