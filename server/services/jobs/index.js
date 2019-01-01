const JobModel = require('./../../models/jobs.model')

exports.createJob = (payload) => {
  const userId = payload.user.id
  const { title, description, cronString,
    webhook, customPayload, methodType } = payload.body
  const newJob = new JobModel({
    userId,
    title,
    description,
    cronString,
    webhook,
    customPayload,
    methodType,
    isActive: true
  })

  return newJob.save()
}

exports.getJobs = async (payload) => {
  const userId = payload.user.id
  const jobs = await JobModel.find({userId})
  return jobs
}

exports.getOneJob = async (payload) => {
  const jobId = payload.params.jobId
  const job = await JobModel.findOne({_id: jobId})
  if (!job) {
    throw new Error('Job Not Found')
  }
  return job
}
