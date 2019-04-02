import React from 'react';
import { withRouter} from 'react-router-dom'
import Header from './Header';
import Routes from './Routes'

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  )
}

export default withRouter(App);
