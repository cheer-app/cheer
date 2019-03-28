import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
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
  Input,
  Select,
  MenuItem,
} from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200,
  },
  selectField: {
    marginLeft: 10,
    marginRight: 10,
    // width: 200,
  },
})

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
      <div className={classes.container}>
        <ExpansionPanelDetails>
          <form>
            <TextField
              id="text"
              label="Question Text:"
              value={this.state.text}
              onChange={this.handleChange}
              fullWidth
              multiline
            />
            <br />
            <FormControl>
              <InputLabel>Scheduled Day</InputLabel>
              <Select
                value={this.state.sendDayIdx}
                onChange={this.handleSelect}
                input={<Input name="sendDayIdx" />}
                className={classes.selectField}
              >
                <MenuItem value="1">Monday</MenuItem>
                <MenuItem value="2">Tuesday</MenuItem>
                <MenuItem value="3">Wednesday</MenuItem>
                <MenuItem value="4">Thursday</MenuItem>
                <MenuItem value="5">Friday</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleSelect}
                input={<Input name="category" />}
                className={classes.selectField}
              >
                <MenuItem value="wellness">Wellness</MenuItem>
                <MenuItem value="engagement">Engagement</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Response Type</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.handleSelect}
                input={<Input name="type" />}
                className={classes.selectField}
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

export default withStyles(styles)(QuestionForm)
