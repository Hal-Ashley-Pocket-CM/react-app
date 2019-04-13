const express = require('express');
var bodyParser = require('body-parser');
// const path = require('path');
// const router = require('express').Router();
const Sequelize = require('sequelize');
var PORT = process.env.PORT || 8080;
// const routes = require('./routes');
// app.use(routes);
//database
const db = require('./models');
// const db = require('./config/database');
// db.authenticate()
//   .then(() => console.log('database connected...'))
//   .catch(err => console.log('Error: ' + err));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.get(function(req, res) {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
//   if (err) {
//     throw err;
//   }
// });
// app.get('/', (req, res) =>

// );

// app.get('/', (req, res) => res.send('HELLO WORLD'));
// require('./controllers/caseManagerRoutes')(app);
require('./controllers/routesA.js')(app);
// app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App now listening at localhost:' + PORT);
  });
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
