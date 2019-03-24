import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Divider,
  Button,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import SingleUserDetails from './SingleUserDetails'
import SingleUserForm from './SingleUserForm'
import SingleUserDetails from './SingleUserDetails'

class SingleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const { user } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.state.edit ? (
            <SingleUserForm user={user} />
          ) : (
            <SingleUserDetails user={user} />
          )}
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {!this.state.edit ? (
            <div>
              <Button size="small" onClick={this.toggleEdit}>
                Edit
              </Button>
            </div>
          ) : (
            <div>
              <Button size="small" onClick={this.toggleEdit}>
                Cancel
              </Button>
              <Button size="small" color="primary">
                Save
              </Button>
            </div>
          )}
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}

export default SingleUser
