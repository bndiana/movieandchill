import React from 'react';
import './allmovies.css'
import Popup from './popup'
import { Link } from "react-router-dom";


class Allmovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      visible: 12,
      showpopUp: false,
    };
}
  componentDidMount() {
    fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999")
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
  loadMore = () => {
    this.setState((old) => {
      return { visible: old.visible + 4 }
    })
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: You have an error</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='allmovies-page-container'>
          <div className='allmovies--titlecontainer'>
            <div>
              <h1 className='title-allmovies-container'>All movies</h1>
            </div>
            <div>
              <button className='addmovie-button' onClick={this.togglePopup.bind(this)}>Add movie</button>
              {this.state.showPopup ?
                <Popup
                  closePopup={this.togglePopup.bind(this)}
                />
                :null
              }
            </div>
          </div>
          <div className='allmovies-container'>
            {this.state.items.slice(0, this.state.visible).map(item => (
              <Link to={`/movie/${item._id}`}
              key={item._id}>
              <div className='render-allmovies' key={item._id}>
                <img src={item.Poster} alt='poster' className='allmovies-poster' />
              </div>
              </Link>
            ))}
          </div>
          <div>
            <button className='loadmore-button' onClick={this.loadMore}>Load more</button>
          </div>
        </div>
      );
    }
  }
}

export default Allmovies;