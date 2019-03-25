import React from 'react'
import {
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
  Divider,
} from '@material-ui/core'

function QuestionDetails(props) {
  const { question } = props

  return (
    <div>
      <ExpansionPanelDetails>
        <Typography>
          Question Text: {question.question}
          <br />
          Response Type: {question.responseType}
          <br />
          Category: {question.category}
          <br />
          Scheduled Day; {question.sendDayIdx}
        </Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" onClick={props.toggleEdit}>
          Edit
        </Button>
      </ExpansionPanelActions>
    </div>
  )
}

export default QuestionDetails
