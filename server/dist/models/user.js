"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// models/user.ts
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db")); // Import the Sequelize instance from db.js
exports.User = db_1.default.define('User', {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    telephoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
});
// Create the table in the database
db_1.default.sync();
