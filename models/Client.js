const Sequelize = require('sequelize');
// const db = require('../config/database');
module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define('Client', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    soNumber: {
      type: DataTypes.INTEGER
    },
    etrack: {
      type: DataTypes.INTEGER
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  return Client;
};
