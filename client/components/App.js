import React from 'react';
import Header from './Header';
import { hashHistory } from 'react-router';

class App extends React.Component {
  componentDidMount() {
    hashHistory.push('/dashboard');
  }
  render() {
    console.log(hashHistory);
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
