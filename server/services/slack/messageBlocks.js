// template for yes/no question message block

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
  return {
    callback_id: 'dialogSubmit',
    title: 'dialogResponse',
    submit_label: 'Submit',
    state: questionText,
    elements: [
      {
        type: 'textarea',
        label: 'temp Label',
        name: 'answerbox',
        placeholder: questionText,
      },
    ],
  }
}

module.exports = { yesNoBlock, textResponse, dialogBlock }
