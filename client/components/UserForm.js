import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Mutation } from 'react-apollo'
import mutation from '../mutations/UpdateUser'
import { hashHistory } from 'react-router'
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
    textAlign: 'center'
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
      name: '',
      email: '',
      slackId: '',
      isAdmin: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSwitch() {
    this.setState({ isAdmin: !this.state.isAdmin })
  }

  handleSubmit(postMutation) {
    postMutation()
    hashHistory.push('/users')
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
              className={classes.textField}
            />
            <TextField
              id="slackId"
              label="Slack ID"
              value={this.state.slackId}
              onChange={this.handleChange}
              className={classes.textField}
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
          <Mutation
           mutation={mutation}
           variables={{
             email: this.state.email,
             name: this.state.name,
             isAdmin: this.state.isAdmin,
             slackId: this.state.slackId,
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

export default withStyles(styles)(UserForm)
