import React, { Component } from 'react';
import NavBar from './Header/navbar';
import HomePage from './homePage';

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
        <NavBar isLoggedIn={true} />
        <HomePage />

        Express Api
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
