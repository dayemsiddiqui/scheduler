const express = require('express')
const router = express.Router()

const controller = require('./test.controller')

router.get('/', controller.index)
router.get('/protected', controller.index)

module.exports = router
