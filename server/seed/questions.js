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
    format: 'text',
  }),
  new Question({
    question: 'Have you been sleeping adequately recently?',
    category: 'wellness',
    format: 'text',
  }),
  new Question({
    question: 'Do you feel you have enough leisure time?',
    category: 'wellness',
    format: 'text',
  }),
  new Question({
    question: 'Have you been adequately exercising recently?',
    category: 'wellness',
    format: 'text',
  }),
  new Question({
    question: 'Are you able to concentrate on your work?',
    category: 'wellness',
    format: 'text',
  }),
  // engagement q's
  new Question({
    question: 'Do you take pride in your work for the company?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you look forward to doing your work each day?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Have you voluntarily worked extra hours recently?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you feel your workload is appropriate?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you feel that your work is valued?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you have a good relationship with your immediate team members?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you have a good relationship with your manager?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you feel you are being appropriately challenged by your work?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you feel the company supports your professional development?',
    category: 'engagement',
    format: 'text',
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

// for (let i = 0; i < questions.length; i++) {
//   questions[i].save((err, result) => {
//     if (err) console.log(err)
//     done++;
//     if (done === questions.length) {
//       exit();
//     }
//   });
// }
