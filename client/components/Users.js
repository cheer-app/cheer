import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import UserPanel from './UserPanel'
import query from '../queries/AllUsers'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

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
  console.log('allUser', props.data)

  const data = [
    {
      id: '5c9a8a11995d2437f5d0b2c6',
      questionText: 'Please describe your relationship with your team members.',
      response:
        'Amazon was so unhelpful that the HR representative who was forced to deliver the news broke down crying and then quit over it',
      score: -0.973225,
      userSlackId: 'UGXQ9902U',
    },
    {
      id: '5c9a8a11995d2437f5d0b2f2',
      questionText: 'Please describe your relationship with your team members.',
      response:
        'Someone parked his car for many years on the employee parking lot',
      score: 0,
      userSlackId: 'UGXQ9902U',
    },
    {
      id: '5c9a8aca5f898938a1a33310',
      questionText: 'Please describe your relationship with your manager.',
      response: 'Your development environment is in the cloud',
      score: 0,
      userSlackId: 'UGXQ9902U',
    },
    {
      id: '5c9a8aca5f898938a1a3330b',
      questionText: 'Please describe your relationship with your team members.',
      response:
        'The Christmas gift went from a nice bundle of cash to a coveted phone to a cheap phone to simply a donation to a charity of your choice',
      score: 0.990245,
      userSlackId: 'UGXQ9902U',
    },
    {
      id: '5c9a8a11995d2437f5d0b2aa',
      questionText:
        'Do you take pride in your work for the company? Why or why not?',
      response: 'They are the pride of a lot of true engineers',
      score: 0.911405,
      userSlackId: 'UGXQ9902U',
    },
  ]

  return (
    <div>
      <span className={classes.root}>
        <h3 className={classes.grow}>Users</h3>
        <Link to="user-form">
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
