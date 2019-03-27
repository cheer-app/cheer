const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql

const TextResponseType = new GraphQLObjectType({
  name: 'TextResponseType',
  fields: {
    id: { type: GraphQLID },
    questionText: { type: GraphQLString },
    response: { type: GraphQLString },
    polarResponse: { type: GraphQLString },
    rateResponse: { type: GraphQLFloat },
    score: { type: GraphQLFloat },
    userSlackId: { type: GraphQLString },
  },
})

module.exports = TextResponseType
