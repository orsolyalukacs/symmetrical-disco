// npm run seed from server folder
// drops everything in the database and reinserts it

const {
  sequelize,
  Song,
  User
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./songs.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(user => {
        Song.create(user)
      })
    )
  })
