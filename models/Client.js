const Sequelize = require('sequelize');
// const db = require('../config/database');
module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define('Client', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  return Client;
};
