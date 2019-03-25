const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const QuestionType = new GraphQLObjectType({
  name: 'QuestionType',
  fields: {
    id: { type: GraphQLID },
    question: { type: GraphQLString },
    category: { type: GraphQLString },
    responseType: { type: GraphQLString },
    sendDayIdx: { type: GraphQLString },
  },
})

module.exports = QuestionType
