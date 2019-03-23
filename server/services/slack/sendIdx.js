const Question = require('../../models/question')
const {sendMessage, getUsers} = require('./index')
const {yesNoBlock, textResponse, rateBlock} = require('./messageBlocks')
const moment = require('moment')
const mongoose = require('mongoose')
const MONGOPASS = process.env.MONGODB_PASSWORD
const MONGO_URI =
`mongodb://cheer:${MONGOPASS}@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('CONNECTED TO MONGODB'))
  .on('error', error => console.log('ERROR WITH MONGODB:', error));

(async function cronCallback() {
  const blockTypes = {
    polar: yesNoBlock,
    rating: rateBlock,
    text: textResponse
  }
  const weekdayIdx = (new Date(moment().clone().format())).getDay()
  const questions = await Question.find({ sendDayIdx: weekdayIdx }, '-_id -category')

  const fakeQuestions = [ // remove once schema updated
    {
      responseType: 'rating',
      question: 'Will this work?'
    }
  ]

  const users = await getUsers()

  users.forEach(user => {
    fakeQuestions.forEach(q => { // change to real questions once schema is updated
      const blockCreator = blockTypes[q.responseType]
      sendMessage(user.id, blockCreator(q.question))
    })
  })
})()
