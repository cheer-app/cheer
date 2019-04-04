import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';
import { withRouter } from 'react-router-dom';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentDidMount() {
      if (!this.props.data.loading && !this.props.data.user) {
        this.props.history.push('/login');
      }
    }

    render() {
      return this.props.data.user ? <WrappedComponent {...this.props} /> : <p>Sorry, you are not authorized to view this page.</p>
    }
  }

  return graphql(currentUserQuery)(withRouter(RequireAuth));
};
