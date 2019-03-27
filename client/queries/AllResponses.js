import gql from 'graphql-tag'

export default gql`
  query allResponses($userSlackId: String!) {
    allResponses(userSlackId: $userSlackId) {
      id
      questionText
      response
      polarResponse
      rateResponse
      score
      userSlackId
    }
  }
`
