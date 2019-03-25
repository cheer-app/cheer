const rateBlock = questionTxt => {
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
      block_id: 'rateBlock',
      elements: [
        {
          type: 'button',
          action_id: 'rate_1_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '1',
          },
          value: '1',
        },
        {
          type: 'button',
          action_id: 'rate_2_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '2',
          },
          value: '2',
        },
        {
          type: 'button',
          action_id: 'rate_3_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '3',
          },
          value: '3',
        },
        {
          type: 'button',
          action_id: 'rate_4_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '4',
          },
          value: '4',
        },
        {
          type: 'button',
          action_id: 'rate_5_butt',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '5',
          },
          value: '5',
        },
      ],
    },
  ]
}

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

module.exports = { rateBlock, yesNoBlock, textResponse, dialogBlock }
