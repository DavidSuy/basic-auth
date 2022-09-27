const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const usersSchema = require('./users-model');

let sequelize = new Sequelize(DATABASE_URL);

const usersModel = usersSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Users: usersModel,
};
