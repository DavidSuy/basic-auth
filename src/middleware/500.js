'use strict';

function err500(err, req, res, next) {
  console.log(err);
  res.status(500).send('err');
}

module.exports = err500;
