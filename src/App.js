import React, { Component } from 'react';
import "./App.css";
import Searchbar from './Components/Header/Searchbar';
import Login from './Components/Header/Login';
import Toprating from './Components/Main-up-section/Toprating';
import Comingsoon from './Components/Main-up-section/Comingsoon';
import WeeklyTop from './Components/Main-down-section/WeeklyTop';
import Recommended from './Components/Main-down-section/Recommended';
import TheLatestReleases from './Components/Main-down-section/TheLatestReleases';
import Footer from './Components/Footer/Footer';
import DropdownMenu from './Components/Main-up-section/DropdownMenu';
import RecommendedPage from './Components/Main-down-section/RecommendedPage'
import theater from './theater.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



class App extends Component {

  render(){
     return (
       <Router>
          <React.Fragment>
            <div className='main-container'>
              <div className="App">
                <div className='img-container'>
                  <img className='theater' src={theater} alt='theater'/>
                    < DropdownMenu />
                </div>
                <Searchbar />
                <Login />
              </div>
            </div>
            <div className='movies-container'>
              <Toprating />
              <Comingsoon />
            </div>
              <WeeklyTop />
              <Recommended />
              <Route path='./Components/Main-down-section/RecommendedPage' exact component={RecommendedPage}/>               
              <TheLatestReleases />
              <Footer />              
          </React.Fragment>
       </Router>
      
  );
}
}
export default App;