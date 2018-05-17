import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Landing from '../landing';

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
        <div>
          <Landing/>
        </div>
    );
  }
}

export default App;
/* EOF */