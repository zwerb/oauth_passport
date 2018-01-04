const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/loggin', {logging: false})

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/loggin.png'
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  User
}
