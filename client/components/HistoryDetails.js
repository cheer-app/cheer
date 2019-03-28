import React from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/AllResponses'

const HistoryDetails = props => {
  const { allResponses } = props.data
  return !allResponses ? (
    <div>Loading...</div>
  ) : (
    <div>
      {allResponses.map(response => {
        return (
          <div key={response.id}>
            <p>Question Text: {response.questionText}</p>
            <p>Response: {response.response}</p>
            <p>Score: {response.score}</p>
          </div>
        )
      })}
    </div>
  )
}

export default graphql(query, {
  options: ownProps => ({
    variables: { userSlackId: ownProps.user.slackId },
  }),
})(HistoryDetails)
