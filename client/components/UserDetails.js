import React from 'react'
import {
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
  Divider,
} from '@material-ui/core'

function UserDetails(props) {
  const { user } = props

  return (
    <div>
      <ExpansionPanelDetails>
        <Typography>
          Email: {user.email}
          <br />
          Admin Status: {user.isAdmin ? 'Admin' : 'Not Admin'}
          <br />
          Slack ID: {user.slackId}
        </Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" onClick={props.toggleEdit}>
          Edit
        </Button>
      </ExpansionPanelActions>
    </div>
  )
}

export default UserDetails
