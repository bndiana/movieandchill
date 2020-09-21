import React from 'react';
import './allmovies.css'

class Popup extends React.Component {
state = {
    title: '',
    year: '',
    runtime: '',
    genre: '',
    language: '',
    country: '',
    poster: '',
    imdbRating: '',
    imdbID: '',
    type: ''
} 
handleAddMovie = () => {
        fetch("https://movies-app-siit.herokuapp.com/movies", {
            method: "POST",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Auth-Token": localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({
              title: this.state.title ,
              year: this.state.year,
              runtime: this.state.runtime,
              genre: this.state.genre,
              language: this.state.language,
              country: this.state.country,
              poster: this.state.poster,
              imdbRating: this.state.imdbRating,
              imdbID: this.state.imdbID,
              type: this.state.type
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
}

render() {
    return (
        <div className='popup'>
                <button id='close-popup-button' onClick={this.props.closePopup}>X</button>
            <div className='inner-popup'>
            <h1 className='popup-addmovie-title'>Add movie</h1>
                <div className='addmovie-popup-container'>
                    <label>Title</label>
                    <input className="addmovie-popup-field" type="title" name='title' placeholder="title" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Year</label>
                    <input className="addmovie-popup-field" type="year" name='year' placeholder="year" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Runtime</label>
                    <input className="addmovie-popup-field" type="runtime" name='runtime' placeholder="runtime" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Genre</label>
                    <input className="addmovie-popup-field" type="genre" name='genre' placeholder="genre" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Language</label>
                    <input className="addmovie-popup-field" type="language" name='language' placeholder="language" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Country</label>
                    <input className="addmovie-popup-field" type="country" name='country' placeholder="country" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Poster</label>
                    <input className="addmovie-popup-field" type="poster" name='poster' placeholder="poster" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>imdbRating</label>
                    <input className="addmovie-popup-field" type="imdbRating" name='imdbRating' placeholder="imdbRating" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>imdbVotes</label>
                    <input className="addmovie-popup-field" type="imdbVotes" name='imdbVotes' placeholder="imdbVotes" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>imdbID</label>
                    <input className="addmovie-popup-field" type="imdbID" name='imdbID' placeholder="imdbID" ></input>
                </div>
                <div className='addmovie-popup-container'>
                    <label>Type</label>
                    <input className="addmovie-popup-field" type="type" name='type' placeholder="type" ></input>
                </div>
            </div>
            <div className='button-addmovie-popup-container'>
                <button className='button-addmovie-popup' onClick={this.handleAddMovie}> Add movie</button>
            </div>

        </div>
    );
}  
}

export default Popup;