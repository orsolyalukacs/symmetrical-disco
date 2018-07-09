const Joi = require('joi') // validates diffrerent things in express

module.exports = { // creates a module which has a register method
  register (req, res, next) { // express middleware. request coming in, response sends something back
    // and next invokes the next thing in the routes path
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                <br> 
                1. It must contain ONLY the following characters: lower case, upper case,
                numerics
                <br>
                2. It must be at least 8 characters and not greater than 32 characters in length. `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}
