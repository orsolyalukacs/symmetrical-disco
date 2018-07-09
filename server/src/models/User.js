module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })

// custom logic and linking to easily put new users.
// user.js exports a function that takes sequelize and DataTypes
// sequelize defines a new model - first attribute is the name of the model = User
// stores user-related information
// returns a user model
