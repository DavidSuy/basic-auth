'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users } = require('../models');

const basicAuthentication = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  console.log(basicHeaderParts);
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');
  console.log(`basicheader ${basicHeaderParts}
    encodedString ${encodedString}
    decodedString ${decodedString}
  `);

  try {
    const user = await Users.findOne({ where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    console.log(valid);

    if (valid) {
      req.body = user.dataValues;
      next();
    } else {
      throw new Error('Invalid User');
    }
  } catch (err) {
    res.status(403).send('Invalid Login');
  }
};

module.exports = basicAuthentication;
