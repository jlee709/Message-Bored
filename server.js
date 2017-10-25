// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models');
// const Message = db.message;
// const Topic = db.topic;
// const User = db.user;
const sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));




const server = app.listen(PORT, () => {
  // db.sequelize.sync({force: false});
  console.log(`Server is Listening on port: ${PORT}`);
});
