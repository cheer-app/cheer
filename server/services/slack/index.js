const router = require('express').Router();
const axios = require('axios');
const { yesNoBlock, textResponse } = require('./messageBlocks');
const {
  rateButtHandler,
  yesNoButtHandler,
  yesButtHandler,
  noButtHandler,
  startDialog,
  dialogHandler,
} = require('./actionHandlers');
require('dotenv').config();

const { WebClient } = require('@slack/client')
//const { RTMClient } = require('@slack/client')
const { createMessageAdapter } = require('@slack/interactive-messages')
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET)

const { createEventAdapter } = require('@slack/events-api')
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)


const token = process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN;

const web = new WebClient(token)
//const rtm = new RTMClient(token)

slackInteractions.action(
  { blockId: 'rateBlock' },
  rateButtHandler
)

// open direct message conversation and send a message
const sendMessage = async (user, messageBlock) => {
  try {
    const res = await web.im.open({
      user: user,
    })
    await web.chat.postMessage({
      channel: res.channel.id,
      blocks: messageBlock,
    });
  } catch (err) {
    console.error(err);
  }
};

slackInteractions.action(
  { blockId: 'yesNoBlock' },
  yesNoButtHandler
)

// handles text questions, initiates dialog
slackInteractions.action(
  { blockId: 'textResponse', actionId: 'startDialog' },
  startDialog
);

//handles dialog submissions
slackInteractions.action({ callbackId: 'dialogSubmit' }, dialogHandler);

// get a list of users and their slack IDs
const getUsers = async () => {
  try {
    const response = await web.users.list({ token })
    return response.members.reduce((list, nextUser) => {
      if (
        nextUser.real_name !== 'Slackbot' &&
        nextUser.real_name !== 'cheerapp'
      ) {
        list.push({ id: nextUser.id, realName: nextUser.real_name });
      }
      return list;
    }, []);
  } catch (error) {
    console.error(error);
  }
};

slackEvents.on('team_join', (event) => {
  try {
    console.log('TEAM JOIN EVENT => ', event)
  } catch (error) {
    console.error(error)
  }
})

slackEvents.on('error', console.error)

router.use('/actions', slackInteractions.expressMiddleware())

router.use('/events', slackEvents.expressMiddleware())

module.exports = { router, web, sendMessage, getUsers }

