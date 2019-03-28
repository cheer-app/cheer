import gql from 'graphql-tag'

export default gql`
  mutation UpdateQuestion(
    $id: String
    $question: String
    $responseType: String
    $category: String
    $sendDayIdx: String
  ) {
    updateQuestion(
      id: $id
      question: $question
      responseType: $responseType
      category: $category
      sendDayIdx: $sendDayIdx
    ) {
      id
      question
      responseType
      category
      sendDayIdx
    }
  }
`
