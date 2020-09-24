import React, { Component } from 'react';
import './WeeklyTop.css';
import { Link } from "react-router-dom";

class WeeklyTop extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
      };
 

  componentDidMount(){
      fetch('https://movies-app-siit.herokuapp.com/movies?&take=4&skip=9')
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
          <h1>Weekly Top</h1>
      <div className='weekly-top-container'>
        {items.map(item => (
          <div className='render-movies-weekly-top' key={item._id}>
            <div className='movies'>
            <Link
            to={`/movie/${item._id}`}
            style={{ textDecoration: "none" }}>
            <img src={item.Poster} alt='poster' className='poster-weekly-top'/>
          </Link>
            </div>
            <div className='p-desc'>
              <p className='desc-movie-weekly' key={item._id}>
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
export default WeeklyTop;