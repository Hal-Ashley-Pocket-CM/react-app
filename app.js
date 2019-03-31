const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
var PORT = process.env.PORT || 8080;
// const routes = require('./controllers');

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

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/public/index.html'))
);

// app.get('/', (req, res) => res.send('HELLO WORLD'));
// require('./controllers/caseManagerRoutes')(app);
// require('./controllers/htmlRoutes')(app);
// app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App now listening at localhost:' + PORT);
  });
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
