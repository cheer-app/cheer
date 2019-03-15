const Question = require('../models/question');
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

const questions = [
  new Question({
    question: 'How are you today?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'How much did you sleep last night?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Are you bored?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Are you tired?',
    category: 'engagement',
    format: 'text',
  }),
  new Question({
    question: 'Do you want to quit?',
    category: 'engagement',
    format: 'text',
  }),
];

let done = 0;
for (let i = 0; i < questions.length; i++) {
  questions[i].save((err, result) => {
    done++;
    if (done === questions.length) {
      exit();
    }
  });
}

const exit = () => {
  mongoose.disconnect();
};
