import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Searchbar.css';
// import ImgComponent from '../Main-up-section/ImgComponent'

class Searchbar extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }
    handleEnter = (event) => {
        if(event.key === "Enter"){
            this.props.history.push(`/search?Title=${this.state.search}`)
        }
    }

    render() {
        
        return (
             <div className='search'>
                <input type='text' value={this.state.search} onKeyUp={this.handleEnter} onChange={this.handleChange} name='text' placeholder='Search movie' className='search-bar' />
            </div>
        )
    }
}
export default withRouter(Searchbar);