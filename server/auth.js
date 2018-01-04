const router = require('express').Router()
const {User} = require('./db')
module.exports = router

router.use('/google', require('./oauth'))

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findById(req.user)
    res.json(user || {})
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (user) {
      req.login(user, (err) => err ? next(err) : res.json(user))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/logout', (req, res, next) => {
  req.logout()
  res.status(204).end()
})
