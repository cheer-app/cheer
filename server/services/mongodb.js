const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const mongoConnection = mongoose.connection
  .once('open', () => console.log('CONNECTED TO MONGODB'))
  .on('error', error => console.log('ERROR WITH MONGODB:', error));

module.exports = { mongoConnection, MONGO_URI }
