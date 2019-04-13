// const Sequelize = require('sequelize');
// const db = require('../config/database');
'use strict';
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      }
      // recipient: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // I Need this value but it's erring out}
    },
    {
      // tableName: 'Message',
      timeStamps: false
    }
  );

  return Message;
};
