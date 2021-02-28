import React, { Component } from 'react';
import './TheMostWatched.css';
import { Link } from "react-router-dom";


class TheMostWatched extends Component {
      state = {
          error: null,
          isLoaded: false,
          items: []
        };

    componentDidMount(){
        fetch('https://movies-app-siit.herokuapp.com/movies?&take=3&skip=1')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: something went wrong!</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='top-rating-container'>
          <h1 className='title-container'>The Most Watched</h1>
          {items.map(item => (
            <div className='render-movies' key={item._id}>
               <Link
            to={`/movie/${item._id}`}
            style={{ textDecoration: "none" }}>
            <img src={item.Poster} alt='poster' className='poster'/>
          </Link>
              <p className='movie-desc-top-rating' key={item._id}>
                 <span>Title:</span> {item.Title} <br/>
                 <span>Genre:</span> {item.Genre} <br/>
                 <span>Year:</span> {item.Year} <br/>
                 <span>Language:</span> {item.Language} <br/>
                 <span>ImdbRating:</span> {item.imdbRating} 
              </p>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default TheMostWatched;