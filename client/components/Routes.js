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
import Account from './Account';

const Routes = () => {
  console.log('Routes.js')
  return (
      <Switch>
        <Route exact path="/" component={requireAuth(Dashboard)} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        <Route path="/users" component={requireAuth(Users)} />
        <Route path="/questions" component={requireAuth(Questions)} />
        <Route path="/user-form" component={requireAuth(UserForm)} />
        <Route path="/question-form" component={requireAuth(QuestionForm)} />
        <Route path="/account" component={requireAuth(Account)} />
      </Switch>
  )
}


// class Routes extends React.Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={requireAuth(Dashboard)} />
//         <Route path="/login" component={LoginForm} />
//         <Route path="/signup" component={SignupForm} />
//         <Route path="/dashboard" component={requireAuth(Dashboard)} />
//         <Route path="/users" component={requireAuth(Users)} />
//         <Route path="/questions" component={requireAuth(Questions)} />
//         <Route path="/user-form" component={requireAuth(UserForm)} />
//         <Route path="/question-form" component={requireAuth(QuestionForm)} />
//         <Route path="/account" component={requireAuth(Account)} />
//       </Switch>
//     )
//   }
// }

export default withRouter(Routes)
