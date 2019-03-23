const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    slackId: { type: GraphQLString },
  },
})

module.exports = UserType
