import React, { Component } from 'react';
import { BrowerRouter as Router, Link, Route } from 'react-router-dom';
import Welcome from '../welcome';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));

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
        Hello World! Welcome to App container
        <p>{this.state.response}</p>

        Welcome to Jaunt!
        <Welcome />
      </div>
    );
  }
}

export default App;
/* EOF */