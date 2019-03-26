import React from 'react';
import Header from './Header';

const App = props => {
  return (
    <div style={{ margin: 'auto' }}>
      <Header />
      {props.children}
    </div>
  );
};

export default App;
