import gql from 'graphql-tag'

export default gql`
  {
    allUsers {
      id
      name
      email
      isAdmin
      slackId
    }
  }
`
