import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  Divider,
} from '@material-ui/core'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.question.question,
      type: this.props.question.type,
      category: this.props.question.category,
      sendDayIdx: this.props.question.sendDayIdx,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleChange(event) {
    console.log('before', this.state)
    this.setState({ [event.target.id]: event.target.value })
    console.log('after', this.state)
  }

  handleSwitch() {
    console.log('before', this.state)
    this.setState({ isAdmin: !this.state.isAdmin })
    console.log('after', this.state)
  }

  render() {
    return (
      <div>
        <ExpansionPanelDetails>
          <form>
            <TextField
              id="text"
              label="Question Text:"
              value={this.state.text}
              onChange={this.handleChange}
              variant="outlined"
            />
            <TextField
              id="type"
              label="Type"
              value={this.state.type}
              onChange={this.handleChange}
              variant="outlined"
            />
            <TextField
              id="category"
              label="Category"
              value={this.state.slackId}
              onChange={this.handleChange}
              variant="outlined"
            />
            <TextField
              id="scheduleDayIdx"
              label="Scheduled Day"
              value={this.state.sendDayIdx}
              onChange={this.handleChange}
              variant="outlined"
            />
          </form>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" onClick={this.props.toggleEdit}>
            Cancel
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </div>
    )
  }
}

export default QuestionForm
