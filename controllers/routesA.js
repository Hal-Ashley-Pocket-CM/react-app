const db = require('../models');
var CaseManagers = db.CaseManagers,
  CheckIn = db.CheckIn,
  Client = db.Client,
  CourtDate = db.CourtDate,
  Message = db.Message;

module.exports = app => {
  //store sent message from case manager
  app.post('/api/msg', function(req, res) {
    console.log(req.body);
    Message.create({
      message: req.body.message,
      recipient: req.body.recipient
    }).then(function(response) {
      console.log(response);
    });
  });
};
