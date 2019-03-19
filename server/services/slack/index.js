const router = require('express').Router()
const axios = require('axios')
const { yesNoBlock, textResponse } = require('./messageBlocks')
const {
  yesButtHandler,
  noButtHandler,
  startDialog,
} = require('./actionHandlers')
require('dotenv').config()

const { WebClient } = require('@slack/client')
const { RTMClient } = require('@slack/client')
const { createMessageAdapter } = require('@slack/interactive-messages')
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET)

router.use('/actions', slackInteractions.expressMiddleware())

const token = process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN

const web = new WebClient(token)
const rtm = new RTMClient(token)

// open direct message conversation and send a message
const sendMessage = async (user, messageBlock) => {
  console.log('Im running')
  try {
    const res = await web.im.open({
      user: user,
    })
    const send = await web.chat.postMessage({
      channel: res.channel.id,
      blocks: messageBlock,
    })
  } catch (err) {
    console.error(err)
  }
}

// handles a yes answer to a yes/no question
slackInteractions.action(
  { blockId: 'yesNoBlock', actionId: 'yes_butt' },
  yesButtHandler
)

// handles a no answer to a yes/no question
slackInteractions.action(
  { blockId: 'yesNoBlock', actionId: 'no_butt' },
  noButtHandler
)

// handles text questions, initiates dialog
slackInteractions.action(
  { blockId: 'textResponse', actionId: 'startDialog' },
  startDialog
)

// get a list of users and their slack IDs
const getUsers = async () => {
  try {
    const response = await web.users.list({ token })
    const userList = response.members.reduce((list, nextUser) => {
      if (
        nextUser.real_name !== 'Slackbot' &&
        nextUser.real_name !== 'cheerapp'
      ) {
        list.push({ id: nextUser.id, realName: nextUser.real_name })
      }
      return list
    }, [])
    console.log(userList)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { router, web }

// //sets up a route to accept incoming events from the slack app
// router.post('/', (req, res, next) => {
//   try {
//     const response = JSON.parse(req.body.payload)
//     console.log(response)
//     res.sendStatus(200)
//   } catch (error) {
//     next(error)
//   }
// })

sendMessage(
  'UGXQ9902U',
  textResponse('Are you tired of seeing this question? (Coming from THE APP)')
)

// getUsers()
