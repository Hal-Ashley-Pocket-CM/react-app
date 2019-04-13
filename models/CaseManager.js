// 'use strict';
const Sequelize = require('sequelize');
// const db = require('../config/database');
module.exports = function(sequelize, DataTypes) {
  const CaseManager = sequelize.define('CaseManager', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      validate: {
        isAlpha: true // will only allow letters
      }
    },
    lastName: {
      type: Sequelize.STRING,
      validate: {
        isAlpha: true // will only allow letters
      }
    },
    email: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      validate: {
        isEmail: true // checks for email format (foo@bar.com)
      }
    },
    phone: {
      type: Sequelize.STRING
    }
    // password: {
    //     type: Sequelize.STRING,
    //     required: true,
    // }
  });
  return CaseManager;
};
