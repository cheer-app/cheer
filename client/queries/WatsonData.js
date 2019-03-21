import gql from 'graphql-tag';

export default gql`
{
  watson {
    id
    date
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
