const express = require('express')
const models = require('./models')
const graphqlHTTP = require('express-graphql')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)
const schema = require('./schema/schema')
const slackServer = require('./services/slack').router
const path = require('path')

const app = express()

app.use(require('morgan')('dev'))
app.use('/slack', slackServer)
require('dotenv').config()

require('./services/mongodb')

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'aaabbbccc',
    store: new MongoStore({
      url: process.env.MONGO_URI,
      autoReconnect: true,
    }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConfig)))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
