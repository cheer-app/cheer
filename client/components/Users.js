import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import UserPanel from './UserPanel'
import query from '../queries/AllUsers'
import { Button } from '@material-ui/core'
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
    marginLeft: -12,
    marginRight: 5,
  },
}

function Users(props) {
  const { classes } = props
  const { allUsers } = props.data

  return (
    <div>
      <span className={classes.root}>
        <h3 className={classes.grow}>Employees</h3>
        <Link to='user-form'>
          <Button className={classes.float}>Add User</Button>
        </Link>
      </span>
      <br />
      {!allUsers ? (
        <div>loading...</div>
      ) : (
        allUsers.map(user => {
          return <UserPanel key={user.id} user={user} />
        })
      )}
    </div>
  )
}

export default withStyles(styles)(graphql(query)(Users))
