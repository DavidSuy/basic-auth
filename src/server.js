'use strict';

const express = require('express');

const router = require('./auth/router');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  },
  app,
};
