import gql from 'graphql-tag'

export default gql`
  mutation UpdateQuestion(
    $id: String
    $question: String
    $category: String
    $sendDayIdx: String
  ) {
    updateQuestion(
      id: $id
      question: $question
      category: $category
      sendDayIdx: $sendDayIdx
    ) {
      question
      category
      sendDayIdx
    }
  }
`
