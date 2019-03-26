import gql from 'graphql-tag'

export default gql`
  query sparkLineData($userId: String!) {
    textResponses(usersSlackId: $userId) {
      id
      questionText
      response
      score
      userSlackId
    }
  }
`
