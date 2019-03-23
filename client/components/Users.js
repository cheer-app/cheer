import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import SingleUser from './SingleUser'
import query from '../queries/AllUsers'

function Users(props) {
  const { allUsers } = props.data
  console.log('allUsers', allUsers)

  return (
    <div>
      {!allUsers ? (
        <h1>No Users</h1>
      ) : (
        allUsers.map(user => {
          return <SingleUser key={user.id} />
        })
      )}
    </div>
  )
}

export default graphql(query)(Users)
