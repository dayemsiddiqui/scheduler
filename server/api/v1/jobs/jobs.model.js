let mongoose = require('mongoose')
let Schema = mongoose.Schema

let jobSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'users'},
  title: String,
  description: String,
  schedule_time: String,
  webhook: String,
  custom_payload: Schema.Types.Mixed,
  job_type: {
    type: String,
    enum: ['recurring', 'onetime']
  },
  method_type: {
    type: String,
    enum: ['GET', 'POST', 'PUT', 'DELETE']
  },
  is_active: {type: Boolean, default: true},
  created_at: {type: Date, default: Date.now()},
  update_at: Date
})

module.exports = mongoose.model('jobs', jobSchema)
