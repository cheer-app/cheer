import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import requireAuth from './requireAuth';
import Users from './Users';
import Questions from './Questions';
import UserUpdateForm from './UserUpdateForm';
import UserCreateForm from './UserCreateForm';
import QuestionUpdateForm from './QuestionUpdateForm';
import QuestionCreateForm from './QuestionCreateForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={requireAuth(Dashboard)} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/dashboard" component={requireAuth(Dashboard)} />
      <Route path="/users" component={requireAuth(Users)} />
      <Route path="/questions" component={requireAuth(Questions)} />
      <Route path="/updateUser" component={requireAuth(UserUpdateForm)} />
      <Route path="/createUser" component={requireAuth(UserCreateForm)} />
      <Route path="/updateQuestion" component={requireAuth(QuestionUpdateForm)} />
      <Route path="/createQuestion" component={requireAuth(QuestionCreateForm)} />
    </Switch>
  )
}

export default withRouter(Routes)
