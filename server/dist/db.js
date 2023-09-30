"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'C:\\sqlite\\dataform.db', // Provide the path to your SQLite database file
});
exports.default = sequelize;
