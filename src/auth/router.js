'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const { Users } = require('./models');
const basicAuthentication = require('./middleware/basic');
const err404 = require('../middleware/404');
const err500 = require('../middleware/500');

const router = express.Router();

router.get('/', (req, res) => res.send('we good'));
router.get('/users', getUsers);
router.post('/signup', signup);
router.post('/signin', basicAuthentication, signin);

router.use('*', err404);
router.use(err500);

async function signup(req, res) {
  try {
    let newUser = req.body;
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let record = await Users.create(newUser);
    res.status(201).send(record);
  } catch (err) {
    res.status(402).send('Error Creating User');
  }
}

async function signin(req, res) {
  res.status(200).send('You Gucci');
}

async function getUsers(req, res, next) {
  try {
    let response = await Users.findAll();
    res.send(response);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
