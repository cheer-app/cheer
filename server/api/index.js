const router = require('express').Router()
const mongoose = require('mongoose')
const Response = mongoose.model('response')

router.get('/user/:userId/textresponses', async (req, res, next) => {
  try {
    const userResponses = await Response.find(
      { userSlackId: req.params.userId },
      'id questionText response score userSlackId',
      { limit: 5 }
    )
    const scoreData = userResponses.map(question => {
      return question.score
    })
    console.log(scoreData)
    res.send(scoreData)
  } catch (error) {
    next(error)
  }
})

module.exports = router
