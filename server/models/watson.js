const mongoose = require('mongoose')
const moment = require('moment')

const watsonSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(moment().clone().format())
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
