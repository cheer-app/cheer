const mongoose = require('mongoose')

const watsonSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  data: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('watson', watsonSchema)
