import React from 'react'
import {
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
  Divider,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

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
        <Link to={{ pathname: `/users/${user.slackId}`, state: user }}>
          <Button size="small">History</Button>
        </Link>
        <Button size="small" onClick={props.toggleEdit}>
          Edit
        </Button>
      </ExpansionPanelActions>
    </div>
  )
}

export default UserDetails
