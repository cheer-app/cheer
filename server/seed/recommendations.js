const Recommendation = require('../models/recommendation')
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

const recs = [
  new Recommendation({
    recommendation: 'Take some time off!',
  }),
  new Recommendation({
    recommendation: 'Try scheduling time to speak to your manager about this.',
  }),
  new Recommendation({
    recommendation: 'Consider speaking to HR about this.',
  }),
  new Recommendation({
    recommendation: 'Talk to HR about the gym discounts we offer!',
  }),
  new Recommendation({
    recommendation: 'Take a break and do some yoga or meditation.',
  }),
]

let done = 0;

const exit = () => {
  mongoose.disconnect();
};

const saveHandler = (err, result) => {
  if (err) console.log(err)
  done++;
  if (done === recs.length) {
    exit();
  }
}

for (let i = 0; i < recs.length; i++) {
  recs[i].save(saveHandler);
}
