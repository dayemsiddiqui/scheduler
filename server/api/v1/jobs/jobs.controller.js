const JobService = require('./../../../services/jobs/index')
exports.getJobs = (req, res, next) => {
  JobService.getJobs(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      next(err)
    })
}

exports.getOneJob = (req, res, next) => {
  JobService.getOneJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      next(err)
    })
}

exports.createJob = (req, res, next) => {
  JobService.createJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      next(err)
    })
}

exports.updateJob = (req, res, next) => {
  JobService.updateJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      next(err)
    })
}

exports.deleteJob = (req, res, next) => {
  JobService.deleteJob(req)
    .then((result) => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch((err) => {
      next(err)
    })
}
