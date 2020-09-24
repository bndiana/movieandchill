import React, { Component } from 'react';
import User from './user.svg';
import {Link} from "react-router-dom";
import './Profile.css';
import LoginButton from './LoginButton'

class Profile extends Component {
    LogOut = () => {
        const logout = {
          method: "GET",
          headers: {
            "x-auth-token": localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        };
        fetch(
          'https://movies-app-siit.herokuapp.com/auth/logout',
          logout
        ).then(() =>{
            localStorage.removeItem("accessToken");
            return(
                <LoginButton />
            )
        }
   )}

    render() {
        return (
            <div className='profile-container'>
                <img src={User} alt='user' className='user-profile' />
                    <div className='links'>
                        <Link to='/Allmovies' className='first' style={{ textDecoration: "none" }}>
                            <h2>All Movies</h2>
                        </Link>
                        <Link to='/favorite' className='second' style={{ textDecoration: "none" }}>
                            <h2>Favorites</h2>
                        </Link>
                            <h2 onClick={this.LogOut} style={{cursor: "pointer"}}>LogOut</h2> 
                    </div>
            </div>
        )
    }
}
export default Profile;