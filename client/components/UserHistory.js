import React from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/SingleUser'
import HistoryDetails from './HistoryDetails'
import { Typography, Paper } from '@material-ui/core'
const UserHistory = props => {
  let user
  if (props.data.getUser) user = props.data.getUser[0]
  return !user ? (
    <div>loading...</div>
  ) : (
    <Paper>
      <Typography>
        <h1>{user.name}</h1>
      </Typography>
      <HistoryDetails user={user} />
    </Paper>
  )
}
export default graphql(query, {
  options: ownProps => ({
    variables: { slackId: ownProps.match.params.id },
  }),
})(UserHistory)
