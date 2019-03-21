const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLList } = graphql;
const UserType = require('./user_type');
const DataType = require('./data_type');
const Watson = mongoose.model('watson');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    watson: {
      type: new GraphQLList(DataType),
      resolve() {
        return Watson.find({});
      }
    }
  }
});

module.exports = RootQueryType;
