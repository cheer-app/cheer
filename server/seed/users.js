const User = require('../models/user')
const { mongoConnection } = require('../services/mongodb')
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
