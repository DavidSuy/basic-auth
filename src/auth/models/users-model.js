'use strict';

const usersSchema = (sequelize, DataTypes) =>
  sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = usersSchema;
