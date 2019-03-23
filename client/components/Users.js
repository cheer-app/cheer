import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import SingleUser from './SingleUser'
import query from '../queries/AllUsers'

function Users(props) {
  const { allUsers } = props.data
  console.log('allUsers', allUsers)

  return (
    <div>
      <h1>Users</h1>
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

export default graphql(query)(Users)
