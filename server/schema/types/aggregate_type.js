const graphql = require('graphql')
const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = graphql
const {KeyWordType} = require('./data_type')

const AggregateType = new GraphQLObjectType({
  name: 'aggregate',
  fields: {
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    score: { type: GraphQLFloat },
    keywords: { type: new GraphQLList(KeyWordType) },
  }
})

module.exports = AggregateType
