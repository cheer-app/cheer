const express = require('express')
const models = require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportConfig = require('./services/auth')
const MongoStore = require('connect-mongo')(session)
const schema = require('./schema/schema')
const slackServer = require('./services/slack').router
// const { createMessageAdapter } = require('@slack/interactive-messages')
require('dotenv').config()

//Creates Slack middleware to receiving actions
// const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET)

// const dotenv = require('dotenv')
// dotenv.config();
// console.log('PROCESS.ENV: ', process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL)
// Create a new Express application
const app = express()

// Replace with your mongoLab URI
// REVIEW: :point-up:
const MONGO_URI =
  'mongodb://cheer:cheer2019@cluster0-shard-00-00-t8jw8.mongodb.net:27017,cluster0-shard-00-01-t8jw8.mongodb.net:27017,cluster0-shard-00-02-t8jw8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise

// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))

// Configures express to use sessions. This places an encrypted identifier
// on the users cookie. When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    store: new MongoStore({
      url: MONGO_URI,
      autoReconnect: true,
    }),
  })
)

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize())
app.use(passport.session())

// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

// // Use this to make use of the POST route
// app.use('/slack', require('./services/slack'))

// Use this to make use of the method from the slack interactive messages package
app.use('/slack', slackServer)

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  try {
    const response = req.body.channel
    console.log(response)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

console.log('BEFORE WATSON REQUIRE')

// REVIEW: how is watson?
// app.use('/watson', require('./services/watson'))

console.log('AFTER WATSON REQUIRE')

// Webpack runs as a middleware. If any request comes in for the root route ('/')
// Webpack will respond with the output of the webpack process: an HTML file and
// a single bundle.js output of all of our client side Javascript
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConfig)))

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
