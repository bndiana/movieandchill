import React, { Component } from 'react';
import loupe from './loupe.svg';
// import './DropdownMenu.css';
import {Link} from "react-router-dom";



class DropdownMenu extends Component {

    render() {
        return (
              <div className='dropdown-links'>
                <Link to='/search' style={{ textDecoration: "none"}}>
                 <img className='menu' src={loupe} alt='loupe' style={{ textDecoration: "none", marginTop: "10px" }}/> 
                </Link>
              </div>
        )
    }
}
export default DropdownMenu;