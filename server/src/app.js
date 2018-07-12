const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')// we assume that we have a models folder, that has an index.js file in it,
// which returns an object that has a sequelize attribute
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../routes')(app)

// connects sequelize to whatever database it is configured for,
// create tables and set up everything ready-to-go
// when syncing the database is done, we just start the server
sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on ${config.port}`)
  })
