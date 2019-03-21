const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const DataType = new GraphQLObjectType({
  name: 'DataType',
  fields: {
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    data: { type: GraphQLString }
  }
});

module.exports = DataType;
