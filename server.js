// jshint esversion:6

const express = require('express');
const Router = express.Router();
const path = require('path');
const routes = require('./routes');

// authentication
const passport = require('passport');
const session = require('express-session');
const redis = require('connect-redis')(session); 
// const authenticatePassport = require('passport');
// authenticate^

const bodyParser = require('body-parser');
// db and db models
const db = require('./models');
const Message = db.message;
const Topic = db.topic;
const User = db.user;
// ^ db models ^
const methodOverride = require('method-override'); 
// const routes = require('./routes');
const sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;

// express initiated
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  store: new redis(),
  secret: "keyboard cat",
  resave: false,
  saveInitialized: false
}));
// app.use('/api', routes);
app.use('/api', routes);


app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});




const server = app.listen(PORT, () => {
  db.sequelize.sync({force: false});
  console.log(`Server is Listening on port: ${PORT}`);
});

//testing - remove later
module.exports = server;