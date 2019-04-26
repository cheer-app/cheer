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

// (async function cronCallback() {
//   const blockTypes = {
//     polar: yesNoBlock,
//     rating: rateBlock,
//     text: textResponse
//   }
//   const weekdayIdx = (new Date(moment().clone().format())).getDay()
//   const questions = await Question.find({}, '-_id -category') // search by weekdayIdx during the week!

//   const users = await getUsers()

//   users.forEach(user => {
//     questions.slice(0, 3).forEach(q => { // change to all questions when not testing
//       const blockCreator = blockTypes[q.responseType]
//       sendMessage(user.id, blockCreator(q.question))
//     })
//   })
// })()

// sendMessage("UGZR0EEA1", textResponse("Please describe your relationship with your manager."))
sendMessage("UH13RM45U", yesNoBlock("Do you think your average workload is appropriate?"))
// sendMessage("UGZR0EEA1", rateBlock("Are you able to concentrate on your work? Respond 1 to definitively disagree, 5 to definitively agree."))
