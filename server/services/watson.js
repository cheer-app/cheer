require('dotenv').config()
const moment = require('moment')
const Response = require('../models/response')
const Aggregate = require('../models/watson')
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: process.env.WATSON_API_KEY,
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-11-16'
})

const callWatson = (response, date = new Date(moment().clone().format()), question, user) => {
  const parameters = {
    "text": response,
    "features": {
      "sentiment": {},
      "keywords": {
        "sentiment": true,
        "emotion": true,
        "limit": 25
      }
    }
  }

  naturalLanguageUnderstanding.analyze(parameters, async (err, res) => {
    if (!res) return

    if (question && user) {
      Response.create({
        score: res.sentiment.document.score,
        response,
        date,
        questionText: question.question,
        questionId: question._id,
        userSlackId: user.slackId,
        userId: user._id
      })
    } else {
      Aggregate.create({
        score: res.sentiment.document.score,
        keywords: res.keywords,
        date
      })
    }
  })
}

module.exports = { callWatson }
