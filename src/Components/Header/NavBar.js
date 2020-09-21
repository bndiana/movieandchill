import React, { Component } from 'react';
import DropdownMenu from '../Main-up-section/DropdownMenu';
import clapperboard from './clapperboard.svg';
import Searchbar from './Searchbar';
import LoginButton from './LoginButton';
import {Link} from "react-router-dom";
import "./../../App.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className='main-container'>
            <div className="App">
              <div className='img-container'>
                <img className='theater' src={clapperboard} alt='batman'/>
                <DropdownMenu />
                <Searchbar />
                <Link to='/Login' style={{ textDecoration: "none", marginTop: '20px' }}>
                  <LoginButton />                
                </Link>
               </div>
            </div>
          </div>
        )
    }
}
