
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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './Components/Header/NavBar';
import FavoritePage from "./Components/Favorites/FavoritePage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import GeneralSearch from "./Components/GeneralSearch/GeneralSearch";

class App extends Component {

  render(){
     return (
       <Router>
          <React.Fragment>
              <NavBar />
              <Switch>
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/favorite" component={FavoritePage} />
                <Route exact path="/search" component={GeneralSearch} />
             </Switch>
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