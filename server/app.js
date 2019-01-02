process.env.NODE_ENV = process.env.NODE_ENV || 'development' // production

const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/environment/index')
const errorizer = require('errorizer')
const errors = require('./errors')
var cors = require('cors')
const app = express()

mongoose.connect(config.mongo.uri, config.mongo.options)
require('./models/users.model')
require('./config/passport')

app.use(cors())

require('./config/express')(app)
require('./routes')(app)

let errorMiddleware = errorizer(errors)
app.use(errorMiddleware)

require('./config/setup')(app, config)
