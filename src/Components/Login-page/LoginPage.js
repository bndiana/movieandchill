import React from "react";
import './styleLoginPage.css';
import Loginimg from './login.svg';

export class LoginPage extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleLogin = () => {
        if (this.state.username === '' ||
            this.state.password === '' ) {
            alert('Please complete all fields')
        } else {
            fetch("https://movies-app-siit.herokuapp.com/auth/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    localStorage.setItem("accessToken", json.accessToken);
                    if (json.authenticated === true)
                    window.location.pathname = "/Home";
                    else
                        alert(json.message)
                });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value })
        //console.log(e.target.value);
    }
    handleChangePassword = (e) => {
        this.setState({ password: e.target.value })
        //console.log(e.target.value)
    }
    render() {
        return (
            <div className="container-loginpage" ref={this.props.containerRef}>
                <div className="title-loginpage">Login</div>
                <div className="content-loginpage">
                    <div className="image-container-loginpage">
                        <img id='login-page-img' src={Loginimg} alt="loginpage" />
                    </div>
                    <div className="Account-loginpage" onSubmit={this.handleSubmit}>
                        <div className="Account-content-login-page">
                            <label htmlFor='username'>Username</label>
                            <input className="field-login-page" type="text" name='Username' placeholder="Username" onChange={this.handleChangeUsername}></input>
                        </div>
                        <div className="Account-content-login-page">
                            <label htmlFor='password'>Password</label>
                            <input className="field-login-page" type="Password" name='Password' placeholder="Password" onChange={this.handleChangePassword}></input>
                        </div>
                    </div>
                </div>
                <div className="footer-button-login-page">
                    <button className="button-login-page" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        );
    }
}



