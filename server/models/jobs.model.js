let mongoose = require('mongoose')
let Schema = mongoose.Schema

let jobSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'users'},
  title: String,
  description: String,
  cronString: String,
  webhook: String,
  customPayload: Schema.Types.Mixed,
  methodType: {
    type: String,
    enum: ['GET', 'POST', 'PUT', 'DELETE']
  },
  isActive: {type: Boolean, default: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: Date
})

module.exports = mongoose.model('jobs', jobSchema)
