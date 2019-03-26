require('dotenv').config()
const moment = require('moment')
const Response = require('../models/response')
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: process.env.WATSON_API_KEY,
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-11-16'
})

const callWatson = async (response, date = new Date(moment().clone().format()), question, user) => {

  const parameters = {
    "text": response,
    "features": {
      "sentiment": {}
    },
    "language": "en"
  }

  naturalLanguageUnderstanding.analyze(parameters, (err, res) => {
    if (err) console.log('Watson error: ', err)
    else {
      Response.create({
        score: res.sentiment.document.score,
        response,
        date,
        questionText: question.question,
        questionId: question._id,
        userSlackId: user.slackId,
        userId: user._id
      })
    }
  })
}

module.exports = { callWatson }
