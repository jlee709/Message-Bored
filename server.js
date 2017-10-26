// jshint esversion:6
const express = require('express');
const Router = express.Router();
const routes = require('./routes');
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

app.use(bodyParser.json());
app.use(express.static('public'));
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