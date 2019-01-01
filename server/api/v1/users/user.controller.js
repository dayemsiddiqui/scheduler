const logger = require('../../../components/logger')
const TAG = '/api/v1/users/index.js'
const Users = require('../../../models/users.model')
const passport = require('passport')

exports.register = function (req, res, next) {
  logger.serverLog(TAG, 'User registeration called')
  const { body: { user } } = req

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    })
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    })
  }

  const finalUser = new Users(user)

  finalUser.setPassword(user.password)

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }))
    .catch((err) => res.json({ error: err }))
}

exports.login = function (req, res, next) {
  const { body: { user } } = req

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    })
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    })
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) {
      return next(err)
    }

    if (passportUser) {
      const user = passportUser
      user.token = passportUser.generateJWT()

      return res.json({ user: user.toAuthJSON() })
    }

    return res.status(400).json({ info })
  })(req, res, next)
}
