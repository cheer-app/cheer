const graphql = require('graphql')
const mongoose = require('mongoose')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = graphql
const UserType = require('./types/user_type')
const QuestionType = require('./types/question_type')
const AuthService = require('../services/auth')
const User = mongoose.model('user')
const Question = mongoose.model('question')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req })
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        slackId: { type: GraphQLString },
      },
      resolve(parents, { id, name, email, isAdmin, slackId }) {
        return User.findByIdAndUpdate(id, {
          $set: { name, email, isAdmin, slackId },
        })
      },
    },
    updateQuestion: {
      type: QuestionType,
      args: {
        id: { type: GraphQLString },
        question: { type: GraphQLString },
        responseType: { type: GraphQLString },
        category: { type: GraphQLString },
        sendDayIdx: { type: GraphQLString },
      },
      resolve(parents, { id, question, responseType, category, sendDayIdx }) {
        return Question.findByIdAndUpdate(id, {
          $set: {
            question,
            responseType,
            category,
            sendDayIdx,
          },
        })
      },
    },
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        slackId: { type: GraphQLString },
      },
      resolve(parents, { name, email, isAdmin, slackId }) {
        return User.create({
          $set: { name, email, isAdmin, slackId },
        })
      },
    },
    createQuestion: {
      type: QuestionType,
      args: {
        question: { type: GraphQLString },
        responseType: { type: GraphQLString },
        category: { type: GraphQLString },
        sendDayIdx: { type: GraphQLString },
      },
      resolve(parents, { question, responseType, category, sendDayIdx }) {
        return Question.create({
          $set: {
            question,
            responseType,
            category,
            sendDayIdx,
          },
        })
      },
    },
  },
})

module.exports = mutation
