import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Welcome from "./welcome";

class Landing extends Component {
  state = {
    signedIn: false
  };

  render () {
    // TODO Design HTML for the landing
    return (
        <Router>
          <div>
            <p>Welcome to Jaunt!</p>
            <p><Link to="/welcome">Sign In</Link></p>
            <p><Link to="/map">Go To Map</Link></p>
            <hr />
            <Route path="/welcome" component={Welcome}/>
          </div>
        </Router>
    );
  }
}

export default Landing;