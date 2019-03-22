const Response = require('../models/response');
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

const { getRandomDateInRange } = require('random-date-generator');
const faker = require('faker');

function getRandomIntInclusive() {
  return Math.floor(Math.random() * 10) + 1;
}

const randomWordsArr = [
  'work',
  'culture',
  'values',
  'trust',
  'responsibility',
  'knowledge',
  'ability',
  'customer',
  'client',
  'manager',
  'colleague',
  'coworkers',
  'teammates',
  'strategy',
  'structure',
  'confidence',
  'diversity',
  'leadership',
  'job',
  'role',
  'position',
  'style',
  'organizational',
  'coprorate',
  'customers',
  'clients',
  'vendors',
  'quality',
  'product',
  'dead',
  'time',
  'results',
  'outcomes',
  'money',
  'profit',
  'diversity',
  'callous',
  'support',
  'development',
  'professional',
  'goals',
  'idea',
  'accomplishments',
  'achievements',
  'creativity',
  'creative',
  'anxious',
  'respect',
  'abysmal',
  'appreciate',
  'behavior',
  'healthy',
  'missing',
  'workplace',
  'environment',
  'power',
  'flexibility',
  'exciting',
  'innovative',
  'opportunity',
  'owbership',
  'freedom',
  'difference',
  'contribute',
  'ethical',
  'communnication',
  'frighten',
  'filthy',
  'dreadful',
  'lead',
  'feedback',
  'insidious',
  'manage',
  'affect',
  'effect',
  'interactions',
  'understand',
  'opinion',
  'act',
  'actions',
  'bemoan',
  'communicate',
  'ignored',
  'future',
  'feature',
  'criminal',
  'reaction',
  'react',
  'improve',
  'example',
  'satisfaction',
  'help',
  'appreciated',
  'valued',
  'performance',
  'evaluation',
  'hard',
  'overworked',
  'overtime',
  'evercise',
  'engaged',
  'training',
  'business',
  'belligerent',
  'enraged',
  'faulty',
];

const getRandomSubset = (array, count) => {
  if (typeof count !== 'number') {
    count = faker.random.number({ min: 1, max: 10 });
  } else if (count > array.length) {
    count = array.length;
  } else if (count < 0) {
    count = 0;
  }

  const arrayCopy = array.slice();
  const countToRemove = arrayCopy.length - count;
  for (let i = 0; i < countToRemove; i++) {
    const indexToRemove = faker.random.number({ max: arrayCopy.length - 1 });
    arrayCopy.splice(indexToRemove, 1);
  }

  return arrayCopy;
};

const randomResString = () => {
  return getRandomSubset(randomWordsArr).join(' ');
};

const randomResponse = () => {
  return new Response({
    score: getRandomIntInclusive(),
    date: getRandomDateInRange(new Date(2019, 0, 1), new Date(2019, 1, 1)),
    response: randomResString(),
  });
};

let done = 0;

const numFakeResponses = 100;

const exit = () => {
  mongoose.disconnect();
};

const saveHandler = (err, result) => {
  if (err) console.log(err);
  done++;
  if (done === numFakeResponses) {
    exit();
  }
};

for (let i = 0; i < numFakeResponses; i++) {
  randomResponse().save(saveHandler);
}
