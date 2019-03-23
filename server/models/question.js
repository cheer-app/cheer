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
  sendDayIdx: {
    type: String,
    enum: ['0', '1', '2', '3', '4', '5', '6']
  },
  responseType: {
    type: String,
    enum: ['polar', 'rating', 'text']
  }
})

module.exports = mongoose.model('question', questionSchema)
