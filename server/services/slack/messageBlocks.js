// template for yes/no question message block

// REVIEW: cool cool, think I get thiss
const yesNoBlock = questionTxt => {
  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: questionTxt,
      },
    },
    {
      type: 'actions',
      block_id: 'yesNoBlock',
      elements: [
        {
          type: 'button',
          action_id: 'yes_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: 'Yes',
          },
          value: 'yes',
        },
        {
          type: 'button',
          action_id: 'no_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: 'No',
          },
          value: 'no',
        },
      ],
    },
  ]
}

const textResponse = questionText => {
  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: questionText,
      },
    },
    {
      type: 'actions',
      block_id: 'textResponse',
      elements: [
        {
          type: 'button',
          action_id: 'startDialog',
          text: {
            type: 'plain_text',
            emoji: true,
            text: 'Respond',
          },
          value: 'Respond',
        },
      ],
    },
  ]
}

const dialogBlock = questionText => {
  return [
    {
      callback_id: 'ryde-46e2b0',
      title: 'dialogResponse',
      submit_label: 'Request',
      elements: [
        {
          type: 'textarea',
          label: questionText,
          name: 'answerbox',
          placeholder: 'Please type your answer here',
        },
      ],
    },
  ]
}

module.exports = { yesNoBlock, textResponse, dialogBlock }
