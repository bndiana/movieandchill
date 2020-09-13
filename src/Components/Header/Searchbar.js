import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    render() {
        return (
             <div className='search'>
                <input type='text' name='text' placeholder='Search movie' className='search-bar' />
            </div>
        )
    }
}
export default Searchbar;