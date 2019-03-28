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
      id
      question
      responseType
      category
      sendDayIdx
    }
  }
`
