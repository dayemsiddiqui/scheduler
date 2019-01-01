const JobService = require('./../../../services/jobs/index')
exports.getJobs = (req, res) => {
  JobService.getJobs(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      return res.status(500).json({status: 'failed', description: err})
    })
}

exports.getOneJob = (req, res) => {
  JobService.getOneJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      return res.status(500).json({status: 'failed', description: err})
    })
}

exports.createJob = (req, res) => {
  JobService.createJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      return res.status(500).json({status: 'failed', description: err})
    })
}

exports.updateJob = (req, res) => {
  return res.status(200).json({status: 'success', payload: {}})
}

exports.deleteJob = (req, res) => {
  return res.status(200).json({status: 'success', payload: {}})
}
