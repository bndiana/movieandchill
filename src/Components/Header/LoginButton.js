import React, { Component } from "react";
import "./LoginButton.css";

class LoginButton extends Component {
  render() {
    return (
      <div className="login">
        <button
          className="login-btn"
          onClick={() =>
            localStorage.setItem("pathBeforeLogin", window.location.pathname)
          }
        >
          Login
        </button>
      </div>
    );
  }
}
export default LoginButton;
