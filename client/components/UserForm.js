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

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      slackId: this.props.user.slackId,
      isAdmin: this.props.user.isAdmin,
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
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <ExpansionPanelDetails>
          <form>
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              className={classes.textField}
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
                id="isAdmin"
                control={<Switch checked={this.state.isAdmin} />}
                onChange={this.handleSwitch}
                labelPlacement="start"
                label="Admin"
              />
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

export default withStyles(styles)(UserForm)
