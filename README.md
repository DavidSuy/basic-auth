# Basic auth

Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

## Testing

install packages:
npm i

run test:
npm test

## Documentation

- Extract the authentication logic for /signin as middleware.

  - Create a new node module.
  - Interact with the headers and the users model.
  - Add the user record (if valid) to the request object and call next().
  - Call next() with an error in the event of a bad login.

- Extract the Sequelize Model into a separate module.

  - Model the user data.
  - Add a before-create hook in the model … Before we save a record:
    - Hash the plain text password given before you save a user to the database.
  - Create a method in the schema to authenticate a user using the hashed password.

- Create a module to house all of routes for the authentication system.

  - Create a POST route for /signup

    - Accepts either a JSON object or FORM Data with the keys “username” and “password”.
    - Creates a new user record in a Postgres database.
    - Returns a 201 with the created user record.

  - Create a POST route for /signin.
    - Use your basic authentication middleware to perform the actual login task.
    - router.post('/signin', basicAuth, (req,res) => {});
    - When validated, send a JSON object as the response with the following properties:
      - user: The users’ database record
