let NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')
let naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: '_uW9Wc3adxvGEfhlfSNECHsu3s9i60jnrYTsajGoU-Rm',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-11-16'
})

let parameters = {
  'url': 'http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver',
  'features': {
    "sentiment": {},
    "categories": {},
    "concepts": {},
    'entities': {
      'sentiment': true,
      'emotion': true,
      'limit': 25
    },
    'keywords': {
      'sentiment': true,
      'emotion': true,
      'limit': 25
    }
  }
}

naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2))
})
