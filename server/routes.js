const AuthenticationController = require('./src/controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./src/policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // express middleware
    AuthenticationController.register) // express middleware

  app.post('/login',
    AuthenticationController.login)
}
