import React, { Component } from 'react';
import './Toprating.css'

class Toprating extends Component {
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
            console.log(result)
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
      return <div>Error: dsfds</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='top-rating-container'>
          <h1 className='title-container'>Top Rating Movies</h1>
          {items.map(item => (
            <div className='render-movies' key={item._id}>
              <img src={item.Poster} alt='poster' className='poster'/>
              <p className='movie-desc' key={item._id}>
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
export default Toprating;