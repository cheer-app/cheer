const Response = require('../models/response')
const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

const randomWordsArr = [
  'work',
  'culture',
  'trust',
  'responsibility',
  'knowledge',
  'ability',
  'client',
  'manager',
  'colleague',
  'coworkers',
  'strategy',
  'structure',
  'diversity',
  'leadership',
  'job',
  'role',
  'cruel',
  'position',
  'style',
  'organizational',
  'corporate',
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
  'imperfect',
  'profit',
  'grim',
  'diversity',
  'callous',
  'support',
  'development',
  'professional',
  'goals',
  'idea',
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
  'ownership',
  'freedom',
  'difference',
  'contribute',
  'menacing',
  'ethical',
  'communication',
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
  'performance',
  'evaluation',
  'hard',
  'overworked',
  'overtime',
  'exercise',
  'engaged',
  'training',
  'business',
  'belligerent',
  'enraged',
  'faulty',
];

const {getRandomDateInRange} = require('random-date-generator')
const faker = require('faker')
const Question = require('../models/question')

const getRandomIntInclusive = limit => Math.floor(Math.random() * limit) + 1

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
}

const randomPolarRes = () => faker.random.arrayElement(['yes', 'no'])

const randomResString = () => {
  return getRandomSubset(randomWordsArr).join(' ')
}

const randomResponse = (question) => {
  const responseConfig = {
    date: getRandomDateInRange((new Date(2019, 0, 1)), (new Date(2019, 1, 1))),
    questionText: question.question
  }
  if (question.responseType === 'polar') {
    responseConfig.polarResponse = randomPolarRes()
  } else if (question.responseType === 'rating') {
    responseConfig.rateResponse = getRandomIntInclusive(5)
  } else {
    responseConfig.response = randomResString()
  }
  return new Response(responseConfig)
}

Question.find({}, (err, result) => {
  if (err) console.log(err)
  return result
}).then(async result => {
  const responses = []

  result.forEach(question => {
    for (let i = 1; i <= getRandomIntInclusive(25); i++) {
      responses.push(randomResponse(question))
    }
  })

  responses.forEach(response => {
    response.save(err => {
      if (err) console.log(err)
    });
  })

  //mongoose.disconnect();
})

