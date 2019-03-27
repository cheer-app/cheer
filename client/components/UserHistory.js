import React, { Component } from 'react'
import { graphql, compose, Query } from 'react-apollo'
import responses from '../queries/AllResponses'
import query from '../queries/SingleUser'
import UserDetails from './UserDetails'
import { Typography } from '@material-ui/core'

const UserHistory = props => {
  console.log(props.data)
  // const user = props.data.getUser[0]
  let user
  if (props.data.getUser) user = props.data.getUser[0]

  return !user ? (
    <div>loading...</div>
  ) : (
    <div>
      <Typography>
        Email: {user.email}
        <br />
        Admin Status: {user.isAdmin ? 'Admin' : 'Not Admin'}
        <br />
        Slack ID: {user.slackId}
      </Typography>
    </div>
  )
  // <HistoryDetails />
}
export default graphql(query, {
  options: ownProps => ({
    variables: { slackId: ownProps.params.id },
  }),
})(UserHistory)
