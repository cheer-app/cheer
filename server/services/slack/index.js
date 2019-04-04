const router = require('express').Router()
const {
  rateButtHandler,
  yesNoButtHandler,
  startDialog,
  dialogHandler,
} = require('./actionHandlers');
require('dotenv').config();
const User = require('../../models/user');

const { WebClient } = require('@slack/client')

const { createMessageAdapter } = require('@slack/interactive-messages')
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET)

const { createEventAdapter } = require('@slack/events-api');
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

const token = process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN;

const web = new WebClient(token)

slackInteractions.action({ blockId: 'rateBlock' }, rateButtHandler);

const sendMessage = async (user, messageBlock) => {
  try {
    const res = await web.im.open({
      user: user,
    });
    await web.chat.postMessage({
      channel: res.channel.id,
      blocks: messageBlock,
    });
  } catch (err) {
    console.error(err);
  }
};

slackInteractions.action({ blockId: 'yesNoBlock' }, yesNoButtHandler);

slackInteractions.action(
  { blockId: 'textResponse', actionId: 'startDialog' },
  startDialog
);

slackInteractions.action({ callbackId: 'dialogSubmit' }, dialogHandler)

const getUsers = async () => {
  try {
    const response = await web.users.list({ token });
    return response.members.reduce((list, nextUser) => {
      if (
        nextUser.real_name !== 'Slackbot' &&
        nextUser.real_name !== 'cheerapp'
      ) {
        list.push({
          id: nextUser.id,
          realName: nextUser.real_name,
          email: nextUser.profile.email,
        });
      }
      return list;
    }, []);
  } catch (error) {
    console.error(error);
  }
};

slackEvents.on('team_join', async event => {
  try {
    const foundUser = await User.findOne({ name: event.user.real_name });
    if (foundUser) {
      foundUser.slackId = event.user.id;
      await foundUser.save();
    } else {
      let slackUsers = await getUsers();
      slackUsers = slackUsers.filter(user => user.id === event.user.id);
      await User.create({
        email: slackUsers[0].email,
        password: 'password',
        name: slackUsers[0].realName,
        slackId: slackUsers[0].id,
      });
    }
  } catch (error) {
    console.error(error);
  }
});

slackEvents.on('error', console.error);

router.use('/actions', slackInteractions.expressMiddleware());

router.use('/events', slackEvents.expressMiddleware());

module.exports = { router, web, sendMessage, getUsers };
