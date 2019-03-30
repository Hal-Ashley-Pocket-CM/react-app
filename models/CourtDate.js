const Sequelize = require('sequelize');
// const db = require('../config/database');
module.exports = function(sequelize, DataTypes) {
  const CourtDate = sequelize.define('CourtDate', {
    time: {
      type: Sequelize.DATE
    },
    place: {
      type: Sequelize.STRING
    }
  });

  return CourtDate;
};
