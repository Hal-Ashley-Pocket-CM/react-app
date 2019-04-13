const Sequelize = require('sequelize');
// const db = require('../config/database');

module.exports = function(sequelize, DataTypes) {
  const CheckIn = sequelize.define('CheckIn', {
    time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    lattitude: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.STRING
    }
  });

  return CheckIn;
};
