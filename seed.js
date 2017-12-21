const {db, User} = require('./server/db')

db.sync({force: true})
  .then(() => {
    return User.create({
      email: 'cody@email.com',
      password: '12345',
      imageUrl: '/cody.png'
    })
  })
  .then(() => {
    console.log(`
      Seed success!
    `)
    db.close()
  })
  .catch((err) => {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  })
