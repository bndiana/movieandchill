import React, { Component } from 'react';
import DropdownMenu from '../Main-up-section/DropdownMenu';
import clapperboard from './clapperboard.svg';
import Searchbar from './Searchbar';
import LoginButton from './LoginButton';
import {Link} from "react-router-dom";
// import Profile from './Profile';
import "./../../App.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className='main-container'>
            <div className="App">
              <div className='img-container'>
                <Link to='/' style={{ textDecoration: "none", marginTop: '10px' }}>
                <img className='theater' src={clapperboard} alt='batman'/>                  
                </Link>
                <DropdownMenu />
                <Searchbar />
                <Link to='/Login' style={{ textDecoration: "none", marginTop: '20px' }}>
                  <LoginButton />                
                </Link>
                {/* <Profile /> */}
               </div>
            </div>
          </div>
        )
    }
}
