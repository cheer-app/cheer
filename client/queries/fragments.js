import gql from 'graphql-tag'

export default gql`
  fragment UserData on UserType {
    name
    email
    isAdmin
    slackId
  }
`
