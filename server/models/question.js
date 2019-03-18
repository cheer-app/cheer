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
  }
})

module.exports = mongoose.model('question', questionSchema)
