import gql from 'graphql-tag'

export default gql`
  mutation UpdateUser(
    $id: String
    $email: String
    $name: String
    $isAdmin: Boolean
    $slackId: String
  ) {
    updateUser(
      id: $id
      email: $email
      name: $name
      isAdmin: $isAdmin
      slackId: $slackId
    ) {
      id
      email
      name
      isAdmin
      slackId
    }
  }
`
