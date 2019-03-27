import gql from 'graphql-tag';

export default gql`
  {
    aggregate {
      id
      date
      score
      keywords {
        count
        relevance
        text
        sentiment {
          label
          score
        }
        emotion {
          anger
          disgust
          fear
          joy
          sadness
        }
      }
    }
  }
`;
