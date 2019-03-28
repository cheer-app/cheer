import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

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
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
