import React, { Component } from 'react';
import "./App.css";
import Searchbar from './Components/Header/Searchbar';
import Login from './Components/Header/Login';
import Toprating from './Components/Main-up-section/Toprating';
import Comingsoon from './Components/Main-up-section/Comingsoon';
import theater from './theater.svg';
import menu from './menu.svg';

class App extends Component {

  render(){
     return (
      <React.Fragment>
    <div className='main-container'>
      <div className="App">
        <div className='img-container'>
          <img className='theater' src={theater} alt='theater'/>
          <img className='menu' src={menu} alt='menu'/>
        </div>
        <Searchbar />
        <Login />
      </div>
    </div>
      <div className='movies-container'>
        <Toprating />
        <Comingsoon />
      </div>
      </React.Fragment>
  );
}
}
export default App;