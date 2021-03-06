import React from "react";
import './styleLoginPage.css';
import Signupimg from './sign-up.svg'

export class SignupPage extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }

    handleSignup = () => {
        if (this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.username === '' ||
            this.state.email === '' ||
            this.state.password === '') {
            alert('Please complete all fields')
            } else {
            fetch("https://movies-app-siit.herokuapp.com/auth/register", {
                method: "POST",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    localStorage.setItem("accessToken", json.accessToken);
                    if (json.authenticated === true) {
                        window.location.pathname = "/";
                    }
                    else {
                        alert(json.message)
                    }
                });
            }

    };
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value })
        // console.log(e.target.value);
    }
    handleChangeLastName = (e) => {
        this.setState({ lastName: e.target.value })
        // console.log(e.target.value);
    }
    
    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value })
        // console.log(e.target.value);
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value })
        // console.log(e.target.value);
    }
    handleChangePassword = (e) => {
        this.setState({ password: e.target.value })
        // console.log(e.target.value);
    }


    render() {
        return (
            <div className="container-loginpage" ref={this.props.containerRef}>
                <div className="title-loginpage">Sign up</div>
                <div className="content-loginpage">
                    <div className="image-container-loginpage">
                        <img id="signup-page-img" src={Signupimg} alt="SignupImg" />
                    </div>
                    <div className="Account-loginpage">
                        <div className="Account-content-login-page">
                            <label htmlFor='FirstName'>First Name</label>
                            <input id='firstName' className="field-login-page" type="FirstName" name='FirstName' placeholder="FirstName" onChange={this.handleChangeFirstName}></input>
                        </div>
                        <div className="Account-content-login-page">
                            <label htmlFor='LastName'>Last Name</label>
                            <input id='firstName' className="field-login-page" type="LastName" name='LastName' placeholder="LastName" onChange={this.handleChangeLastName}></input>
                        </div>
                        <div className="Account-content-login-page">
                            <label htmlFor='username'>Username</label>
                            <input className="field-login-page" type="Username" name='Username' placeholder="Username" onChange={this.handleChangeUsername}></input>
                        </div>
                        <div className="Account-content-login-page">
                            <label htmlFor='email'>Email</label>
                            <input className="field-login-page" type="Email" name='Email' placeholder="Email" onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className="Account-content-login-page">
                            <label htmlFor='password'>Password</label>
                            <input className="field-login-page" type="Password" name='Password' placeholder="Password" onChange={this.handleChangePassword}></input>
                        </div>
                    </div>
                </div>
                <div className="footer-button-login-page">
                    <button className="button-login-page" onClick={this.handleSignup}>Sign up</button>
                </div>
            </div>
        )
    }
}

