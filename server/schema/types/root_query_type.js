const graphql = require('graphql')
const mongoose = require('mongoose')
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql
const UserType = require('./user_type')
const TextResponseType = require('./textResponse_type')
const {DataType} = require('./data_type')
const QuestionType = require('./question_type')
const AggregateType = require('./aggregate_type')
const Watson = mongoose.model('watson')
const User = mongoose.model('user')
const Question = mongoose.model('question')
const Response = mongoose.model('response')
const Aggregate = mongoose.model('aggregate')

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
    getUser: {
      type: new GraphQLList(UserType),
      args: {
        slackId: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return User.find({ ...args })
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
        return Question.find({})
      },
    },
    textResponses: {
      type: new GraphQLList(TextResponseType),
      args: {
        userSlackId: {
          type: GraphQLString,
        },
        response: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return Response.find({ ...args, response: { $ne: null } }, null, {
          limit: 5,
          sort: { date: -1 },
        })
      },
    },
    allResponses: {
      type: new GraphQLList(TextResponseType),
      args: {
        userSlackId: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return Response.find({ ...args }, null, {
          limit: 15,
          sort: { date: -1 },
        })
      },
    },
    aggregate: {
      type: new GraphQLList(AggregateType),
      resolve() {
        return Aggregate.find({})
      }
    }
  },
})

module.exports = RootQueryType
