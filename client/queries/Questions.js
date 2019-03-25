import gql from 'graphql-tag'

export default gql`
  {
    questions {
      id
      question
      category
      responseType
      sendDayIdx
    }
  }
`
