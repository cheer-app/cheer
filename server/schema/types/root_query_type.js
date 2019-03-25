const graphql = require('graphql')
const mongoose = require('mongoose')
const { GraphQLObjectType, GraphQLList } = graphql
const UserType = require('./user_type')
const DataType = require('./data_type')
const Watson = mongoose.model('watson')
const User = mongoose.model('user')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      },
    },
    allUsers: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({})
      },
    },
    watson: {
      type: new GraphQLList(DataType),
      resolve() {
        return Watson.find({})
      },
    },
    questions: {
      type: new GraphQLList(QuestionType),
      resolve() {
        return Questions.find({})
      },
    },
  },
})

module.exports = RootQueryType
