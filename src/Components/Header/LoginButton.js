import React, { Component } from "react";
import "./LoginButton.css";

class LoginButton extends Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  };

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  render() {
    // if (json.authenticated === true){
    //     return (
    //         <div>
    //             <button>Profile</button>
    //         </div>
    //     )
    // }else{
    return (
      <div className="login">
        <button className="login-btn">Login</button>
      </div>
    );
  }
}
// }
export default LoginButton;
