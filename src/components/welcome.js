import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Welcome extends Component {
  state = {
    signedIn: false
  };

  loginSuccessGoogle = (response) => {
		console.log("success");
		let localUser = {
			token: response.tokenId,
			permission: 0,
			email: response.profileObj.email,
			username: response.profileObj.email,
			profile: response.profileObj.imageUrl,
			preferences: [] // TODO get preferences from client side
		};
    fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(localUser)
    }).then((res) => {
      // TODO router change

    });
	};

	loginFailureGoogle = (response) => {
	  console.log("login failed");
	  this.setState({signedIn: false});
	};

	logout = () => {
	  const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      console.log("logged out");
      auth2.signOut().then( function cb() {
            auth2.disconnect().then(function cb() {
              this.setState({signedIn: false});
            });
          }
      )
    }
	};

  render() {
    return (
        <div>
          <GoogleLogin
              clientId="273896874134-q55haki4prpn8n6tpj9bbtggm7vjt4gs.apps.googleusercontent.com"
              buttonText="Google Login"
              onSuccess={this.loginSuccessGoogle}
              onFailure={this.loginFailureGoogle}
          />
          <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.logout}
          />
        </div>
      );
  }
}


export default Welcome;