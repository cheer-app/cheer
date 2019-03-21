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

const callWatson = async () => {
  let arr = []
  const responses = await Response.find()
  responses.forEach(elm => arr.push(elm.response))
  let text = arr.join(' ')

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
  
  naturalLanguageUnderstanding.analyze(parameters, (err, res) => {
    if (err)
      console.log('Watson error:', err)
    else {
      let { categories, concepts, keywords, entities, sentiment }  = res
      Watson.create({ categories, concepts, keywords, entities, sentiment }, (err) => {
        if (err) console.log('MongoDB error:', err)
      })
    }
  })
}
callWatson()

module.exports = { router }
