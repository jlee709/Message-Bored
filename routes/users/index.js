//jshint esversion:6

const express = require('express');
const router = express.Router();
const {users} = require('../../models');

router.get('/', (req, res) => {
  users.all().then((users) =>{
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  users.findById(req.params.id)
  .then( (user) => {
    res.json(user);
  });
});

router.post('/', (req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY");
  users.create({
    name: req.body.name
  })
  .then( (user) => {
    res.json(user);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = router;