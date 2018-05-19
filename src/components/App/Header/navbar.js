import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    const defaultButtons = [
      <li className="NavButton"><a href="">Jaunt</a></li>,
      <li className="NavButton"><a href="">Search</a></li>
    ];

    const userButtons = [
      <li className="NavButton"><a href="">Create Tour</a></li>,
      <li className="NavButton"><a href="">Tour History</a></li>
    ];

    var buttons = (this.props.isLoggedIn ? defaultButtons.concat(userButtons) : defaultButtons);

    return (
      <header>
        <ul id="headerButtons">
          {buttons}
        </ul>
        <img className="ProfilePicture" src="art/raccoon.jpg" alt="profile pic" width={50} height={50}/>
        {/*profile pic*/}
        {JSON.stringify(this.props)}
      </header>
    )
  }
}

export default NavBar;
