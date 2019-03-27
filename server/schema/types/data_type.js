const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = graphql;

const SentimentType = new GraphQLObjectType({
  name: 'sentiment',
  fields: {
    label: { type: GraphQLString },
    score: { type: GraphQLFloat },
  },
});

const EmotionType = new GraphQLObjectType({
  name: 'emotions',
  fields: {
    anger: { type: GraphQLFloat },
    disgust: { type: GraphQLFloat },
    fear: { type: GraphQLFloat },
    joy: { type: GraphQLFloat },
    sadness: { type: GraphQLFloat },
  },
});

const KeyWordType = new GraphQLObjectType({
  name: 'keywords',
  fields: {
    count: { type: GraphQLInt },
    emotion: { type: EmotionType },
    relevance: { type: GraphQLFloat },
    sentiment: { type: SentimentType },
    text: { type: GraphQLString },
  },
});

const DocumentType = new GraphQLObjectType({
  name: 'document',
  fields: {
    document: { type: SentimentType },
  },
});

const DataType = new GraphQLObjectType({
  name: 'data',
  fields: {
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    keywords: { type: new GraphQLList(KeyWordType) },
    sentiment: { type: DocumentType },
  },
});

module.exports = DataType;
