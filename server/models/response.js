const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  response: {
    type: String
  },
  score: {
    type: Number
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
})

module.exports = mongoose.model('response', responseSchema)
