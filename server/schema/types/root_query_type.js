const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');
const DataType = require('./data_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    data: {
      type: DataType,
      resolve(parentValue, args, req) {
        return {};
      }
    }
  }
});

module.exports = RootQueryType;
