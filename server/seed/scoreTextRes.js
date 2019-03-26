const Response = require('../models/response');
const User = require('../models/user');
const { mongoConnection } = require('../services/mongodb')
const mongoose = require('mongoose');
mongoConnection.catch(error => {
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
