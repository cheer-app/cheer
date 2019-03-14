const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['wellness', 'engagement'],
    required: true
  },
  format: {
    type: String,
    enum: ['range', 'emoji', 'text'],
    required: true
  }
})

module.exports = mongoose.model('question', questionSchema)