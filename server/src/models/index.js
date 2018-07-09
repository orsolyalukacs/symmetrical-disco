const fs = require('fs') // The Node.js file system module allow you to work with the file system on your computer
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize( // declares a sequelize object
  config.db.database,
  config.db.use,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname) // reads through a directory and gives the names for different files
  .filter((file) =>
    file !== 'index.js' // filters out index.js file, so we want every file except index.js
  )
  .forEach((file) => { // imports a file and sets it up to use it with sequelize
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
