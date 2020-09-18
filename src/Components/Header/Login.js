import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    render() {
        return (
            <div className='login'>
                <button onClick={this.handleLogin} className='login-btn'>Login</button>
            </div>
        )
    }
}
export default Login;