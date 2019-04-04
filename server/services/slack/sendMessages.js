const Question = require('../../models/question')
const {sendMessage, getUsers} = require('./index')
const {yesNoBlock, textResponse, rateBlock} = require('./messageBlocks')
const moment = require('moment')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
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
  const questions = await Question.find({sendDayIdx: weekdayIdx}, '-_id -category')

  const users = await getUsers()

  users.forEach(user => {
    questions.forEach(q => {
      const blockCreator = blockTypes[q.responseType]
      sendMessage(user.id, blockCreator(q.question))
    })
  })
})()
