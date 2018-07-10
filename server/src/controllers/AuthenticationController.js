const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
    // email already exists
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
    // res.send({
    //   message: `Hello ${req.body.email}! Your user was registered. Have fun!`
    // })
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      console.log(password, user.password)
      console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({ // 403 Forbidden - authentication error.
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
      // const userJson = user.toJSON()
      // res.send({
      //   user: userJson
      // })
    } catch (err) {
      res.status(500).send({ // 500 Internal Server error.
        error: 'An error has occured trying to log.'
      })
    }
  }
}
