import React from 'react'
import { Typography } from '@material-ui/core'

function SingleUserDetails(props) {
  const { user } = props

  return (
    <Typography>
      Email: {user.email}
      <br />
      Admin Status: {user.isAdmin}
      <br />
      Slack ID: {user.slackId}
    </Typography>
  )
}

export default SingleUserDetails
