import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Welcome extends Component {
  render() {

	const loginSuccessGoogle = (response) => {
		console.log("success");
		let localUser = {
			token: response.tokenId,
			permission: 0,
			email: response.profileObj.email,
			username: response.profileObj.email,
			profile: response.profileObj.imageUrl,
			preferences: [] // TODO get preferences from client side
		};
		console.log(localUser);
		// TODO send to database
	};

	const loginFailureGoogle = (response) => {
	  console.log("login failed");
	};

	const logout = () => {
	  const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      console.log("logged out");
      auth2.signOut().then(
          auth2.disconnect().then(this.props.onLogoutSuccess)
      )
    }
	};

	return (
	    <div>
        <GoogleLogin
            clientId="273896874134-q55haki4prpn8n6tpj9bbtggm7vjt4gs.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={loginSuccessGoogle}
            onFailure={loginFailureGoogle}
        />
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
      </div>
    );
  }
}


export default Welcome;