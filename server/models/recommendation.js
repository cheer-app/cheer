const mongoose = require('mongoose')

const recommendationSchema = new mongoose.Schema({
  recommendation: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('recommendation', recommendationSchema)
