const { dialogBlock } = require('./messageBlocks')
const qs = require('qs')
const axios = require('axios')
require('dotenv').config()
const Response = require('../../models/response')
const User = require('../../models/user')
const {naturalLanguageUnderstanding} = require('../watson')

async function rateButtHandler(payload, respond) {
  try {
    await new Response({
      rateResponse: Number(payload.actions[0].value),
      questionText: payload.message.blocks[0].text.text,
      userSlackId: payload.user.id,
    }).save()
    const message = {
      text: `You were asked: '${payload.message.blocks[0].text.text}' and you responded '${payload.actions[0].value}'.`,
    }
    respond(message)
  } catch (error) {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }
}

async function yesNoButtHandler(payload, respond) {
  try {
    await new Response({
      polarResponse: payload.actions[0].value,
      questionText: payload.message.blocks[0].text.text,
      userSlackId: payload.user.id,
    }).save()
    const message = {
      text: `You were asked: ${
        payload.message.blocks[0].text.text
      } and you responded ${payload.actions[0].value}.`,
    }
    respond(message)
  } catch (error) {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }
}

async function startDialog(payload, respond) {
  try {
    const originalQuestion = payload.message.blocks[0].text.text
    const dialogForm = JSON.stringify(dialogBlock(originalQuestion))
    const dialogData = {
      token: process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN,
      trigger_id: payload.trigger_id,
      dialog: dialogForm,
    }
    await axios.post(
      'https://slack.com/api/dialog.open',
      qs.stringify(dialogData)
    )
    respond({ text: originalQuestion })
  } catch (error) {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }
}

async function dialogHandler(payload, respond) {
  try {

    await new Response({
      questionText: payload.state,
      userSlackId: payload.user.id,
      response: payload.submission.answerbox,
    }).save()
    const message = {
      text: `Thank you for your submission`,
    }
    respond(message)
  } catch (error) {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }
}

module.exports = { rateButtHandler, yesNoButtHandler, startDialog, dialogHandler }
