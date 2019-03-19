const { web } = require('../../server')
const { dialogBlock } = require('./messageBlocks')
const axios = require('axios')
require('dotenv').config()

function yesButtHandler(payload, respond) {
  console.log(payload)
  try {
    //TODO: save the response to the database
    const message = {
      text: `You were asked ${
        payload.message.blocks[0].text.text
      } and you responded yes.`,
    }
    respond(message)
  } catch {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }

  const reply = payload.original_message
  delete reply.attachments[0].actions
  return reply
}

function noButtHandler(payload, respond) {
  console.log(payload)
  try {
    //TODO: save the response to the database
    const message = {
      text: `You were asked ${
        payload.message.blocks[0].text.text
      } and you responded no.`,
    }
    respond(message)
  } catch {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }

  // const reply = payload.original_message
  // delete reply.attachments[0].actions
  // return reply
}

async function startDialog(payload, respond) {
  console.log(payload)
  try {
    const trigId = payload.trigger_id
    const dialogData = {
      token: process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN,
      trigger_id: trigId,
      dialog: JSON.stringify(dialogBlock),
    }
    await axios.post(
      'https://slack.com/api/dialog.open',
      JSON.stringify(dialogData)
    )
    // respond(message)
  } catch {
    console.error(error)
    respond({ text: 'An error occurred while recording your response.' })
  }

  const reply = payload.original_message
  delete reply.attachments[0].actions
  return reply
}
module.exports = { yesButtHandler, noButtHandler, startDialog }
