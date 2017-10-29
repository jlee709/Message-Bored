// jshint esversion:6
const express = require('express');
const Topics = express.Router();
const db  = require('../../models');
const Topic = db.topics;
const User= db.users;

Topics.get('/', (req, res) => {
  Topic.all({
    include: [
      {
        model: User,
        // as: 'Creator'
      }
    ]
  })
  .then( (topics) => {
    res.json(topics);
  });
});

Topics.get('/:id', (req, res) => {
  Topic.find({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        // as: 'Creator'
      }
    ]
  })
  .then( (topic) => {
    res.json(topic);
  });
});

Topics.post('/', (req, res) => {
  console.log(req.body);
  Topic.create({
    userId: req.body.userId,
    title: req.body.title,

  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Topics.put('/:id', (req, res) => {
  Topic.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then( (topic) => {
    return Topic.find( {
      where: {
        id: req.params.id
      }
    });
  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = Topics;