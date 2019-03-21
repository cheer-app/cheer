const mongoose = require('mongoose')

const watsonSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  categories: {
    type: Array
  },
  concepts: {
    type: Array
  },
  keywords: {
    type: Array
  },
  entities: {
    type: Array
  },
  sentiment: {
      type: Object
    }
})

module.exports = mongoose.model('watson', watsonSchema)
