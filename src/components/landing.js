import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Landing extends Component {

  render () {
    // TODO Design HTML for the landing
    return (
        <Router>
          <p>Welcome to Jaunt!</p>
          <p><Link path="/welcome">Sign In</Link></p>
          <p><Link path="/map"> To Map</Link></p>
        </Router>
    );
  }
}

export default Landing;