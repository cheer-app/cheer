const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql

const TextResponseType = new GraphQLObjectType({
  name: 'TextResponseType',
  fields: {
    id: { type: GraphQLID },
    questionText: { type: GraphQLString },
    response: { type: GraphQLString },
    score: { type: GraphQLFloat },
    userSlackId: { type: GraphQLString },
  },
})

module.exports = TextResponseType
