const Response = require('../models/response')
const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);
const {getRandomDateInRange} = require('random-date-generator')

function getRandomIntInclusive() {
  return Math.floor(Math.random() * 10) + 1
}

const randomResponse = () => {
  return new Response({
    score: getRandomIntInclusive(),
    date: getRandomDateInRange((new Date(2019, 0, 1)), (new Date(2019, 1, 1))),
  })
}


let done = 0;

const numFakeResponses = 25

const exit = () => {
  mongoose.disconnect();
};

const saveHandler = (err, result) => {
  if (err) console.log(err)
  done++;
  if (done === numFakeResponses) {
    exit();
  }
}

for (let i = 0; i < numFakeResponses; i++) {
  randomResponse().save(saveHandler);
}
