const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  response: {
    type: String,
    required: true
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = mongoose.model('response', responseSchema)
