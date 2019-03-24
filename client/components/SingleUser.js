import React, { Component } from 'react'
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class SingleUser extends Component {
  render() {
    const { user } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Email: {user.email}
            <br />
            Admin Status: {user.isAdmin}
            <br />
            Slack ID: {user.slackId}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default SingleUser
