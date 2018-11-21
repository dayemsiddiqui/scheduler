const express = require('express')
const router = express.Router()
const auth = require('./../../../routes/auth')
const controller = require('./test.controller')

router.get('/', controller.index)
router.get('/protected', auth.required, controller.index)

module.exports = router
