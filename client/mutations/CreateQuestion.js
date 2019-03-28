import gql from 'graphql-tag'

export default gql`
  mutation CreateQuestion(
    $question: String
    $responseType: String
    $category: String
    $sendDayIdx: String
  ) {
    createQuestion(
      question: $question
      responseType: $responseType
      category: $category
      sendDayIdx: $sendDayIdx
    ) {
      question
      responseType
      category
      sendDayIdx
    }
  }
`
