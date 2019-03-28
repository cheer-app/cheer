import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';
import { withRouter } from 'react-router-dom';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        nextProps.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(withRouter(RequireAuth));
};
