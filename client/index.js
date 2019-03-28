import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Router, hashHistory, Route } from 'react-router'

import App from './components/App'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Dashboard from './components/Dashboard'
import requireAuth from './components/requireAuth'
import Users from './components/Users'
import Questions from './components/Questions'
import UserForm from './components/UserForm'
import QuestionForm from './components/QuestionForm'
import UserHistory from './components/UserHistory'

const link = new HttpLink({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id,
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
          <Route path="dashboard" component={requireAuth(Dashboard)} />
          <Route path="users" component={requireAuth(Users)} />
          <Route path="questions" component={requireAuth(Questions)} />
          <Route path="addUser" component={requireAuth(UserForm)} />
          <Route path="addQuestion" component={requireAuth(QuestionForm)} />
          <Route exact path="users/:id" component={requireAuth(UserHistory)} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
