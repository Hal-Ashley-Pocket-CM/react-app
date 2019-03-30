const Sequelize = require('sequelize');
// const db = require('../config/database');

module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('Message', {
    message: {
      type: Sequelize.TEXT
    },
    timeStamp: {
      type: Sequelize.DATE
    }
  });

  return Message;
};
