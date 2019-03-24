import gql from 'graphql-tag'

export default gql`
  {
    allUsers {
      name
      id
      email
      isAdmin
      slackId
    }
  }
`
