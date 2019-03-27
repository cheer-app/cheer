const { callWatson } = require('../services/watson')
const Response = require('../models/response')
const { mongoConnection } = require('../services/mongodb')

const seedAggregate = async () => {
  try {
    await mongoConnection
    const dates = {}
    const responses = await Response.find()

    responses.forEach(elm => {
      if (dates[elm.date]) {
        dates[elm.date] += elm.response
      } else {
        dates[elm.date] = elm.response
      }
    })

    for (date in dates) {
      if (dates[date]) {
        await callWatson(dates[date], date)
      }
    }
  } catch (err) {
    console.log(err)
  }
}
seedAggregate()
