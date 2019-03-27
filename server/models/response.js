const mongoose = require('mongoose')
const moment = require('moment')

const responseSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(moment().clone().format())
  },
  response: {
    type: String
  },
  polarResponse: {
    type: String
  },
  rateResponse: {
    type: Number
  },
  score: {
    type: Number
  },
  questionText: {
    type: String
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  userSlackId: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('response', responseSchema)
