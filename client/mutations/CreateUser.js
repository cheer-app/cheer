import gql from 'graphql-tag'

export default gql`
  mutation CreateUser(
    $email: String
    $name: String
    $isAdmin: Boolean
    $slackId: String
  ) {
    createUser(
      email: $email
      name: $name
      isAdmin: $isAdmin
      slackId: $slackId
    ) {
      email
      name
      isAdmin
      slackId
    }
  }
`
