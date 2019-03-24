import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  FormControlLabel,
  Switch,
} from '@material-ui/core'

class SingleUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      slackId: this.props.user.slackid,
      isAdmin: this.props.user.isAdmin,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <form>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="slackId"
          label="Slack ID"
          value={this.state.slackId}
          onChange={this.handleChange}
          variant="outlined"
        />
        <FormControl>
          <FormControlLabel
            control={<Switch checked={this.state.isAdmin} />}
            onChange={this.handleChange}
            labelPlacement="start"
            label="Admin"
          />
        </FormControl>
      </form>
    )
  }
}

export default SingleUserForm
