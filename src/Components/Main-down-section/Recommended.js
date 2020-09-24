import React, { Component } from 'react';
import './Recommended.css';
import { Link } from "react-router-dom";


class Recommended extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
      };
 

  componentDidMount(){
      fetch('https://movies-app-siit.herokuapp.com/movies?&take=12&skip=13')
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
    console.log(items, this.props.index)
    return (
        <div>
             <h1>Recommended</h1>
      <div className='recommended-container'>
        {items.map(item => (
          <div className='render-movies-recommended' key={item._id}>
            <div className='movies-recommended'>
            <Link
            to={`/movie/${item._id}`}
            style={{ textDecoration: "none" }}>
            <img src={item.Poster} alt='poster' className='poster-recommended'/>
          </Link>
            </div>
            <div className='p-desc-recommended'>
              <p className='desc-movie-recommended' key={item._id}>
                Title: {item.Title} <br/>
                Genre: {item.Genre} 
              </p>
            </div>
          </div>
        ))}
      </div>            
        </div>

    );
  }
}
}
export default Recommended;