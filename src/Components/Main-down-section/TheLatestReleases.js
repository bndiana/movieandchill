import React, { Component } from 'react';
import './TheLatestReleases.css';
import { Link } from "react-router-dom";


class TheLatestReleases extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
      };
 

  componentDidMount(){
      fetch('https://movies-app-siit.herokuapp.com/movies?&take=8&skip=25')
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
    return <div>Error: dsfds</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else { 
    console.log(items, this.props.index)
    return (
        <div>
          <h1>The Latest Released</h1>
      <div className='latest-releases-container'>
        {items.map(item => (
          <div className='render-movies-latest-releases' key={item._id}>
            <div className='movies-latest-releases'>
            <Link
            to={`/movie/${item._id}`}
            style={{ textDecoration: "none" }}>
            <img onClick={console.log('click')} src={item.Poster} alt='poster' className='poster-latest-releases'/>
          </Link>
            </div>
            <div className='p-desc-latest-releases'>
              <p className='desc-movie-latest-releases' key={item._id}>
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
export default TheLatestReleases;