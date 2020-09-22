import React, { Component } from 'react';
import loupe from './loupe.svg';
// import './DropdownMenu.css';
import {Link} from "react-router-dom";



class DropdownMenu extends Component {

    render() {
        return (
            <div className='dropdown-menu'>
               {/* <p>Advance Search</p> */}
              <div className='dropdown-links'>
                <Link to='/search' style={{ textDecoration: "none", marginTop: '15px' }}>
                 <img className='menu' src={loupe} alt='loupe'/> 
                </Link>
              </div>
            </div>
        )
    }
}
export default DropdownMenu;