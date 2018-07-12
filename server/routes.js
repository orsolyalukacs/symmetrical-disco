const AuthenticationController = require('./src/controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./src/policies/AuthenticationControllerPolicy')

const SongsController = require('./src/controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // express middleware
    AuthenticationController.register) // express middleware

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.post('/songs',
    SongsController.post)
}
