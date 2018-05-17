import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Landing from '../landing';
import Welcome from '../welcome';

class App extends Component {
  state = {
    response: ''
  };


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));

    process.title = "Jaunt";
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if( response.status !== 200 ) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <p>Welcome to Jaunt!</p>

          <p><Link to="/">Home</Link></p>
          <p><Link to="/welcome">Sign In</Link></p>

          <p><Link to="/map">Go To Map</Link></p>

          <hr />
          <Route exact path="/"/>
          <Route path="/welcome" component={Welcome} />
        </div>
      </Router>
    );
  }
}

export default App;
/* EOF */