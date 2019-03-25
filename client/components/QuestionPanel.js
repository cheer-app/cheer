import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import QuestionForm from './QuestionForm'
import QuestionDetails from './QuestionDetails'

class QuestionPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState(prevState => ({ edit: !prevState.edit }))
  }

  render() {
    const { question } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{question.question}</Typography>
        </ExpansionPanelSummary>
        {this.state.edit ? (
          <QuestionForm question={question} toggleEdit={this.toggleEdit} />
        ) : (
          <QuestionDetails question={question} toggleEdit={this.toggleEdit} />
        )}
      </ExpansionPanel>
    )
  }
}

export default QuestionPanel
