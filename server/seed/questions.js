const Question = require('../models/question');
const mongoose = require('mongoose');
// REVIEW: where is this coming from? (is this username/password)
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

const questions = [
  //wellness q's
  new Question({
    question: 'Do you frequently need to work extra hours to meet deadlines?',
    category: 'wellness',
    responseType: 'polar',
    sendDayIdx: '4'
  }),
  new Question({
    question: 'Have you been sleeping adequately recently? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'wellness',
    responseType: 'rating',
    sendDayIdx: '1'
  }),
  new Question({
    question: 'Do you feel you have enough leisure time? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'wellness',
    responseType: 'rating',
    sendDayIdx: '5'
  }),
  new Question({
    question: 'Have you been adequately exercising recently? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'wellness',
    responseType: 'rating',
    sendDayIdx: '2'
  }),
  new Question({
    question: 'Are you able to concentrate on your work? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'wellness',
    responseType: 'rating',
    sendDayIdx: '3'
  }),
  // engagement q's
  new Question({
    question: 'Do you take pride in your work for the company? Why or why not?',
    category: 'engagement',
    sendDayIdx: '3',
    responseType: 'text'
  }),
  new Question({
    question: 'Do you look forward to doing your work each day? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'engagement',
    sendDayIdx: '2',
    responseType: 'rating'
  }),
  new Question({
    question: 'Do you think your average workload is appropriate?',
    category: 'engagement',
    sendDayIdx: '1',
    responseType: 'polar'
  }),
  new Question({
    question: 'Do you feel that your work is valued?',
    category: 'engagement',
    sendDayIdx: '4',
    responseType: 'polar'
  }),
  new Question({
    question: 'Please describe your relationship with your team members.',
    category: 'engagement',
    sendDayIdx: '5',
    responseType: 'text'
  }),
  new Question({
    question: 'Please describe your relationship with your manager.',
    category: 'engagement',
    sendDayIdx: '4',
    responseType: 'text'
  }),
  new Question({
    question: 'Do you feel you are being appropriately challenged by your work?',
    category: 'engagement',
    sendDayIdx: '2',
    responseType: 'rating'
  }),
  new Question({
    question: 'Do you feel the company supports your professional development? Respond 1 to definitively disagree, 5 to definitively agree.',
    category: 'engagement',
    sendDayIdx: '3',
    responseType: 'rating'
  }),
];

let done = 0;

const exit = () => {
  mongoose.disconnect();
};

const saveHandler = (err, result) => {
  if (err) console.log(err)
  done++;
  if (done === questions.length) {
    exit();
  }
}

for (let i = 0; i < questions.length; i++) {
  questions[i].save(saveHandler);
}
