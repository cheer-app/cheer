import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import SingleUser from './SingleUser'
import query from '../queries/AllUsers'
import { Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  grow: {
    flexGrow: 1,
    display: 'inline-block',
  },
  float: {
    float: 'right',
    display: 'inline-block',
  },
}

function Users(props) {
  const { classes } = props
  const { allUsers } = props.data
  console.log('allUsers', allUsers)

  return (
    <div>
      <span className={classes.root}>
        <h3 className={classes.grow}>Employees</h3>
        <Button className={classes.float}>Add User</Button>
      </span>
      <br />
      {!allUsers ? (
        <div>loading...</div>
      ) : (
        allUsers.map(user => {
          return <SingleUser key={user.id} user={user} />
        })
      )}
    </div>
  )
}

export default withStyles(styles)(graphql(query)(Users))
