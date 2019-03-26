import gql from 'graphql-tag'

export default gql`
  query sparkLinesData($userSlackId: String!) {
    textResponses(userSlackId: $userSlackId) {
      id
      questionText
      response
      score
      userSlackId
    }
  }
`
