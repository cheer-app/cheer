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
// sendMessage("UGZR0EEA1", yesNoBlock("Do you think your average workload is appropriate?"))
// sendMessage("UGZR0EEA1", rateBlock("Are you able to concentrate on your work? Respond 1 to definitively disagree, 5 to definitively agree."))
