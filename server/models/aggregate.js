const mongoose = require('mongoose')
const moment = require('moment')

const aggregateSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(moment().clone().format())
  },
  score: {
    type: Number
  },
  keywords: {
    type: Array
  }
})

module.exports = mongoose.model('aggregate', aggregateSchema)
