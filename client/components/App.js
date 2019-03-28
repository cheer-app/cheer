import React from 'react';
import { withRouter} from 'react-router-dom'
import Header from './Header';
// import { hashHistory, Route, Switch } from 'react-router';
// import {default as Routes} from './Routes'
import Routes from './Routes'

// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
// import Dashboard from './Dashboard';
// import requireAuth from './requireAuth';
// import Users from './Users';
// import Questions from './Questions';
// import UserForm from './UserForm';
// import QuestionForm from './QuestionForm';
// import Account from './Account';

// class App extends React.Component {
//   // componentDidMount() {
//   //   hashHistory.push('/dashboard');
//   // }
//   render() {
//     console.log('PROPS', this.props)
//     return (
//       <div>
//         <Header />
//         {this.props.children}
//         <Routes />
//         {/* <Switch>
//           <Route exact path="/" component={requireAuth(Dashboard)} />
//           <Route path="/login" component={LoginForm} />
//           <Route path="/signup" component={SignupForm} />
//           <Route path="/dashboard" component={requireAuth(Dashboard)} />
//           <Route path="/users" component={requireAuth(Users)} />
//           <Route path="/questions" component={requireAuth(Questions)} />
//           <Route path="/user-form" component={requireAuth(UserForm)} />
//           <Route path="/question-form" component={requireAuth(QuestionForm)} />
//           <Route path="/account" component={requireAuth(Account)} />
//         </Switch> */}
//       </div>
//     );
//   }
// }

const App = (props) => {
  console.log('Props in App', props)
  return (
    <>
    <Header />
    <Routes />
    </>
  )
}

export default withRouter(App);
