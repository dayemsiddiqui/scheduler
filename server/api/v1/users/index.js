const express = require('express')
const router = express.Router()
const auth = require('./../../../routes/auth')
const controller = require('./user.controller')

router.post('/register', auth.optional, controller.register)
router.post('/login', auth.optional, controller.login)
module.exports = router
