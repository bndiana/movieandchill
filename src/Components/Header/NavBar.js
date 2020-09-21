import React, { Component } from 'react';
import DropdownMenu from '../Main-up-section/DropdownMenu';
import clapperboard from './clapperboard.svg';
import Searchbar from './Searchbar';
import LoginButton from './LoginButton';
import axios from "axios";
import "./../../App.css";

export default class NavBar extends Component {

        constructor(props) {
            super(props);
        
            this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
          }        

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
    }

    handleLogoutClick() {
        axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then(response => {
            this.props.handleLogout();
            })
          .catch(error => {
            console.log("logout error", error);
            });
      }
    render() {
        return (
            <div className='main-container'>
            <div className="App">
              <div className='img-container'>
                <img className='theater' src={clapperboard} alt='batman'/>
                <DropdownMenu />
                <Searchbar />
                <LoginButton />
               </div>
            </div>
          </div>
        )
    }
}
