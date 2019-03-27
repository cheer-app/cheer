const Recommendation = require('../models/recommendation')
const { mongoConnection } = require('../services/mongodb')

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
