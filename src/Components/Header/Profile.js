import React, { Component } from 'react';
import User from './user.svg';
import {Link} from "react-router-dom";
import './Profile.css'
// import Allmovies from '../All movies/Allmovies';
// import FavoritePage from "../Favorites/FavoritePage";

class Profile extends Component {
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
                        <Link to='logout' className='third' style={{ textDecoration: "none" }}>
                            <h2>LogOut</h2> 
                        </Link>   
                    </div>
            </div>
        )
    }
}
export default Profile;