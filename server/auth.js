const router = require('express').Router()
const {User} = require('./db')
module.exports = router

router.get('/me', (req, res, next) => {
  User.findById(req.session.userId)
    .then(user => user ? res.json(user) : res.json({}))
    .catch(next)
})

router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => {
      if (user) {
        req.session.userId = user.id
        res.json(user)
      } else {
        const err = new Error('Incorrect email or password!')
        err.status = 401
        next(err)
      }
    })
    .catch(next)
})

router.delete('/logout', (req, res, next) => {
  req.session.destroy()
  res.status(204).end()
})
