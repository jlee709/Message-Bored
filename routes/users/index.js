//jshint esversion:6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const users = db.users;

router.get('/', (req, res) => {
  users.all().then((users) =>{
    console.log(users, ' ROUTER FUCKKKKKKK!');
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  users.findById(req.params.id)
  .then( (user) => {
    res.json(user);
  });
});

router.post('/register', (req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY");
  users.create({
    username: req.body.username,
    password: req.body.password
  })
  .then( (user) => {
    res.json(user);
  })
  .catch( (err) => {
    res.json(err);
  });
});

router.get('/login', (req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY");
  users.findById({
    username: req.body.username
  })
  .then( (user) => {
    res.json(user);
  })
  .catch( (err) => {
    res.json(err);
  });
});


// router.get('/logout', (req, res) => {
//   console.log(req.body, "THIS IS THE REQ BODY");
//   users.create({
//     name: req.body.name
//   })
//   .then( (user) => {
//     res.json(user);
//   })
//   .catch( (err) => {
//     res.json(err);
//   });
// });


module.exports = router;