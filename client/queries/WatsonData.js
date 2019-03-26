import gql from 'graphql-tag';

export default gql`
  {
    watson {
      id
      date
      sentiment {
        document {
          score
          label
        }
      }
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
