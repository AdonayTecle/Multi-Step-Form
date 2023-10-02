import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db';

export const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telephoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Create the table in the database
sequelize.sync();

