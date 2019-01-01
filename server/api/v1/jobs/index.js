const express = require('express')
const router = express.Router()
const auth = require('./../../../auth')
const controller = require('./jobs.controller')

router.get('/', auth.required, controller.getJobs)
router.get('/:jobId', auth.required, controller.getOneJob)
router.post('/', auth.required, controller.createJob)
router.put('/:jobId', auth.required, controller.updateJob)
router.delete('/:jobId', auth.required, controller.deleteJob)

module.exports = router
