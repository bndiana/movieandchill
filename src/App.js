import React, { Component } from 'react';
import "./App.css";
// import Searchbar from './Components/Header/Searchbar';
// import LoginButton from './Components/Header/LoginButton';
import Toprating from './Components/Main-up-section/Toprating';
import Comingsoon from './Components/Main-up-section/Comingsoon';
import WeeklyTop from './Components/Main-down-section/WeeklyTop';
import Recommended from './Components/Main-down-section/Recommended';
import TheLatestReleases from './Components/Main-down-section/TheLatestReleases';
import Footer from './Components/Footer/Footer';
// import DropdownMenu from './Components/Main-up-section/DropdownMenu';
// import clapperboard from './clapperboard.svg';
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './Components/Header/NavBar'



class App extends Component {

  render(){
     return (
       <Router>
          <React.Fragment>
            <NavBar />
            <div className='movies-container'>
              <Toprating />
              < Comingsoon />
            </div>
              <WeeklyTop />
              <Recommended />             
              <TheLatestReleases />
              <Footer />              
          </React.Fragment>
       </Router>
      
  );
}
}
export default App;