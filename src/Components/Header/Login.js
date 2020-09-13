import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    // handleLogin = () => {
    //     fetch("https://movies-app-siit.herokuapp.com/auth/login", {
    //       method: "POST",
    //       mode: "cors",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         username: "mouse",
    //         password: "cat",
    //       }),
    //     })
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log(json);
    //         localStorage.setItem("accessToken", json.accessToken);
    //       });
    //   };

    render() {
        return (
            <div className='login'>
                <button onClick={this.handleLogin} className='login-btn'>Login</button>
            </div>
        )
    }
}
export default Login;