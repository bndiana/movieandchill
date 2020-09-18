import React, { Component } from 'react';
import menu from './menu.svg';
import ImgComponent from '../Main-up-section/ImgComponent'
import './DropdownMenu.css';
import {BrowserRouter as Router, Route} from "react-router-dom";



class DropdownMenu extends Component {

    render() {
        return (
          <Router>
            <div className='dropdown-menu'>
              <img className='menu' src={menu} alt='menu'/>
              <div className='dropdown-links' onClick='handleMenu'>
                <a href='../Main-up-section/ImgComponent' Component={ImgComponent}>Top Rating</a>
                <a href='#'>Weekly Top</a>
                <a href='#'>Recommended</a>
                <a href='#'>The Latest Released</a>               
              </div>
            </div>            
          </Router>
        )
    }
}
export default DropdownMenu;