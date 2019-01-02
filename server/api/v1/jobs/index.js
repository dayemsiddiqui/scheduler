const express = require('express')
const router = express.Router()
const auth = require('./../../../auth')
const controller = require('./jobs.controller')
const validationSchema = require('./validationSchema')
const { Validator } = require('express-json-validator-middleware')
const validator = new Validator({allErrors: true})
const validate = validator.validate

router.get('/', auth.required, controller.getJobs)
router.get('/:jobId', auth.required, controller.getOneJob)
router.post('/', auth.required, validate({body: validationSchema.createJobSchema}), controller.createJob)
router.put('/:jobId', auth.required, validate({body: validationSchema.updateJobSchema}), controller.updateJob)
router.delete('/:jobId', auth.required, controller.deleteJob)

module.exports = router
