// const express = require('express');
// const router = express.Router();
// const models = require('../models');
// const db = require('../config/database');
// const CaseManager = require('../models/CaseManager');

const path = require('path');
const db = require('../../models');

module.exports = function(app) {
  app.get('/allCms', function(req, res) {
    db.CaseManager.findAll()
      .then(cms => {
        console.log('All case managers: ', cms);
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  });
};
