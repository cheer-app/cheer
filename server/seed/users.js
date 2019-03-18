const User = require('../models/user')
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);
const faker = require('faker')

const randomUser = () => {
  return new User({
    email: faker.internet.email(),
    name: faker.name.findName(),
    department: faker.commerce.department(),
    password: 'password'
  })
}

let done = 0;

const numFakeUsers = 8

const exit = () => {
  mongoose.disconnect();
};

const saveHandler = (err, result) => {
  if (err) console.log(err)
  done++;
  if (done === numFakeUsers) {
    exit();
  }
}

for (let i = 0; i < numFakeUsers; i++) {
  randomUser().save(saveHandler);
}
