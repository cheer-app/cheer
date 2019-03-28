import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import requireAuth from './requireAuth';
import Users from './Users';
import Questions from './Questions';
import UserForm from './UserForm';
import QuestionForm from './QuestionForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={requireAuth(Dashboard)} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/dashboard" component={requireAuth(Dashboard)} />
      <Route path="/users" component={requireAuth(Users)} />
      <Route path="/questions" component={requireAuth(Questions)} />
      <Route path="/addUser" component={requireAuth(UserForm)} />
      <Route path="/addQuestion" component={requireAuth(QuestionForm)} />
    </Switch>
  )
}

export default withRouter(Routes)
