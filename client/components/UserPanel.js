import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UserForm from './UserForm'
import UserDetails from './UserDetails'

class UserPanel extends Component {
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
          <UserForm user={user} toggleEdit={this.toggleEdit} />
        ) : (
          <UserDetails user={user} toggleEdit={this.toggleEdit} />
        )}
      </ExpansionPanel>
    )
  }
}

export default UserPanel
