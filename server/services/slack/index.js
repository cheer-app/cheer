const router = require('express').Router();
const axios = require('axios');
const { yesNoBlock, textResponse } = require('./messageBlocks');
const {
  yesButtHandler,
  noButtHandler,
  startDialog,
  dialogHandler,
} = require('./actionHandlers');
require('dotenv').config();

const { WebClient } = require('@slack/client');
const { RTMClient } = require('@slack/client');
const { createMessageAdapter } = require('@slack/interactive-messages');
const slackInteractions = createMessageAdapter(
  process.env.SLACK_SIGNING_SECRET
);

router.use('/actions', slackInteractions.expressMiddleware());

const token = process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN;

const web = new WebClient(token);
const rtm = new RTMClient(token);

// open direct message conversation and send a message
const sendMessage = async (user, messageBlock) => {
  try {
    const res = await web.im.open({
      user: user,
    });
    const send = await web.chat.postMessage({
      channel: res.channel.id,
      blocks: messageBlock,
    });
  } catch (err) {
    console.error(err);
  }
};

// handles a yes answer to a yes/no question
slackInteractions.action(
  { blockId: 'yesNoBlock', actionId: 'yes_butt' },
  yesButtHandler
);

// handles a no answer to a yes/no question
slackInteractions.action(
  { blockId: 'yesNoBlock', actionId: 'no_butt' },
  noButtHandler
);

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
    const response = await web.users.list({ token });
    const userList = response.members.reduce((list, nextUser) => {
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

module.exports = { router, web };

// sendMessage('UGXQ9902U', textResponse('Whats wrong babe?'));

// getUsers()
