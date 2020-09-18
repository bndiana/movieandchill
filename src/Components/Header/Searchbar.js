import React, { Component } from 'react';
import './Searchbar.css';
import ImgComponent from '../Main-up-section/ImgComponent'

class Searchbar extends Component {

    state = {
        search: ''
    }
    render() {
        // let filterMovies = this.props.items.filter(
        //     (movie) => {
        //         return movie.Title.toLowerCase().indexOf(
        //             this.state.search.toLocaleLowerCase()
        //         ) !== -1;
        //     }
        // );
        return (
             <div className='search'>
                <input type='text' value={this.state.search} name='text' placeholder='Search movie' className='search-bar' />
                {/* <ul>
                    {filterMovies.map((movie)=> {
                        return <ImgComponent movie={movie} />
                    })}
                </ul> */}
            </div>
        )
    }
}
export default Searchbar;