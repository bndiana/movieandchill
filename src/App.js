import React, { Component } from 'react';
import "./App.css";
import AppLogin from './Components/Login-page/AppLogin'
// import Allmovies from './Components/All movies/Allmovies'

class App extends Component {

  render(){
     return (
    <div className='main-container'>
      <AppLogin />
      </div>

  );
}
}
export default App;
