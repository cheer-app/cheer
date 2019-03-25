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
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from '@material-ui/core'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.question.question,
      type: this.props.question.responseType,
      category: this.props.question.category,
      sendDayIdx: this.props.question.sendDayIdx,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleChange(event) {
    console.log('before', event.target)
    this.setState({ [event.target.id]: event.target.value })
    console.log('after', this.state)
  }

  handleSelect(event) {
    console.log('before', event.target)
    this.setState({ [event.target.name]: event.target.value })
    console.log('after', this.state)
  }

  handleSwitch() {
    console.log('before', this.state)
    this.setState({ isAdmin: !this.state.isAdmin })
    console.log('after', this.state)
  }

  render() {
    const { classes } = this.props
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
              fullWidth
              multiline
            />
            <br />
            <FormControl variant="outlined">
              <InputLabel>Scheduled Day</InputLabel>
              <Select
                value={this.state.sendDayIdx}
                onChange={this.handleSelect}
                input={<OutlinedInput name="sendDayIdx" />}
              >
                <MenuItem value="1">Monday</MenuItem>
                <MenuItem value="2">Tuesday</MenuItem>
                <MenuItem value="3">Wednesday</MenuItem>
                <MenuItem value="4">Thursday</MenuItem>
                <MenuItem value="5">Friday</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleSelect}
                input={<OutlinedInput name="category" />}
              >
                <MenuItem value="wellness">Wellness</MenuItem>
                <MenuItem value="engagement">Engagement</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel>Response Type</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.handleSelect}
                input={<OutlinedInput name="type" />}
              >
                <MenuItem value="polar">Yes/No</MenuItem>
                <MenuItem value="rating">Point Scale</MenuItem>
                <MenuItem value="text">Free Text</MenuItem>
              </Select>
            </FormControl>
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
