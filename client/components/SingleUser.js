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
    this.setState(prevState => ({ edit: !prevState.edit }))
  }

  render() {
    const { user } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.name}</Typography>
        </ExpansionPanelSummary>
        {this.state.edit ? (
          <SingleUserForm user={user} toggleEdit={this.toggleEdit} />
        ) : (
          <SingleUserDetails user={user} toggleEdit={this.toggleEdit} />
        )}
      </ExpansionPanel>
    )
  }
}

export default SingleUser
