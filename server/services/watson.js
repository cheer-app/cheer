require('dotenv').config()
const router = require('express').Router()
const Response = require('../models/response')
const Watson = require('../models/watson')
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: process.env.WATSON_API_KEY,
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-11-16'
})

const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://cheer:${process.env.MONGODB_PASSWORD}@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
);

const callWatson = async () => {
  const responses = await Response.find()
  const text = responses.reduce((list, e) => {
    return e.response ? list + ' ' + e.response : list
  }, '')

  const parameters = {
    'text': text,
    'features': {
      "sentiment": {},
      "categories": {},
      "concepts": {
        'limit': 25
      },
      'entities': {
        'sentiment': true,
        'emotion': true,
        'limit': 25
      },
      'keywords': {
        'sentiment': true,
        'emotion': true,
        'limit': 25
      }
    }
  }

  naturalLanguageUnderstanding.analyze(parameters, (error, res) => {
    if (error)
      console.log('Watson error:', error)
    else {
      let { categories, concepts, keywords, sentiment }  = res
      Watson.create({ categories, concepts, keywords, sentiment }, (err, result) => {
        if (err) console.log('MongoDB error:', err)
        console.log('FULL RESULT => ', result)
      })
    }
  })
}

module.exports = { router }
