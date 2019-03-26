const Response = require('../models/response');
const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect(
  `mongodb://cheer:${process.env.MONGODB_PASSWORD}@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`, { useNewUrlParser: true }
).catch(error => {
  console.error(error)
});
mongoose.Promise = global.Promise;

const faker = require('faker')

Response.find({ response: { $ne: undefined } }, (err, result) => {
  if (err) console.log(err)
  return result
}).then(async result => {

  const slackIds = await User.find({}, '-_id slackId')

  result.forEach(async response => {
    response.score = Math.random()
    response.userSlackId = (faker.random.arrayElement(slackIds)).slackId
    await response.save(err => {
      if (err) console.log(err)
    })
  })
})
