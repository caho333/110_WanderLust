import React, { Component } from 'react';
import Welcome from '../Welcome';

// import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        Welcome to Jaunt!
        <Welcome />
      </div>
    );
  }
}

export default App;