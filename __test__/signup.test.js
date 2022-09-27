'use strict';

const { app, sequelize } = require('../src/server');
const supertest = require('supertest');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const basicAuthentication = require('../src/auth/middleware/basic.js');

const request = supertest(app);

describe('Testing our signup route on POST /signup', () => {
  test('Should respond with new created user record', async () => {
    const response = await request.post('/signup').send({
      username: 'test',
      password: 'test',
    });

    // let encoded = response.body.password;

    // console.log(base64.decode(encoded));
    // let basicHeaderParts = response.body
    // let isAuth = basicAuthentication();

    // let responseEncrypted = await bcrypt.hash(response.body.password, 10);
    // console.log(responseEncrypted);

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('test');
    // expect(response.body.password).toEqual('test');
  });
});
