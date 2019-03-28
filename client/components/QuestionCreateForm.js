import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Mutation } from 'react-apollo'
import mutation from '../mutations/CreateQuestion'
import {
  TextField,
  FormControl,
  Button,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  Divider,
  InputLabel,
  OutlinedInput,
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
})

class QuestionCreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      responseType: '',
      category: '',
      sendDayIdx: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSelect(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSwitch() {
    this.setState({ isAdmin: !this.state.isAdmin })
  }

  handleSubmit(postMutation) {
    if (postMutation) {
      postMutation()
    }
    this.props.history.push('/questions')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <ExpansionPanelDetails>
        <form>
            <TextField
              id="question"
              label="Question Text:"
              value={this.state.question}
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
                value={this.state.responseType}
                onChange={this.handleSelect}
                input={<OutlinedInput name="responseType" />}
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
          <Button size="small" onClick={() => this.handleSubmit()}>
            Cancel
          </Button>
          <Mutation
           mutation={mutation}
           variables={{
              question: this.state.question,
              responseType: this.state.responseType,
              category: this.state.category,
              sendDayIdx: this.state.sendDayIdx,
           }}
         >
           {postMutation => (
             <Button
               size='small'
               color='primary'
               onClick={() => this.handleSubmit(postMutation)}
             >
               Save
             </Button>
           )}
         </Mutation>
        </ExpansionPanelActions>
      </div>
    )
  }
}

export default withStyles(styles)(QuestionCreateForm)
