//jshint esversion:6

const express = require('express');
const users = express.Router();
const {user} = require('../../models');

users.get('/', (req, res) => {
  user.all().then((users) =>{
    res.json(users);
  });
});

Users.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then( (user) => {
    res.json(user);
  });
});

// Users.post('/', (req, res) => {
//   User.create({
//     name: req.body.name
//   })
//   .then( (user) => {
//     res.json(user);
//   })
//   .catch( (err) => {
//     res.json(err);
//   });
// });

module.exports = users;