import gql from 'graphql-tag'

export default gql`
  query getUser($slackId: String!) {
    getUser(slackId: $slackId) {
      id
      name
      email
      isAdmin
      slackId
    }
  }
`
