import React, { Component } from 'react';
import "./App.css";
// import Toprating from './Components/Main-up-section/Toprating';
// import Comingsoon from './Components/Main-up-section/Comingsoon';
// import WeeklyTop from './Components/Main-down-section/WeeklyTop';
// import Recommended from './Components/Main-down-section/Recommended';
// import TheLatestReleases from './Components/Main-down-section/TheLatestReleases';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './Components/Header/NavBar';
import FavoritePage from "./Components/Favorites/FavoritePage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import GeneralSearch from "./Components/GeneralSearch/GeneralSearch";
import Home from './Components/Home/Home';
import AppLogin from './Components/Login-page/AppLogin';
import Allmovies from './Components/All movies/Allmovies';

class App extends Component {

  render(){
     return (
       <div className='app'>
        <Router>
          <React.Fragment>
              <NavBar />
              <div className='app-body'>
              <Route exact path='/' component={Home} />
              <Switch>
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/favorite" component={FavoritePage} />
                <Route exact path="/search" component={GeneralSearch} />
                <Route exact path='/Login' component={AppLogin} />
                <Route exact path='/AllMovies' component={Allmovies} />
             </Switch>                
              </div>
              <Footer />              
          </React.Fragment>
       </Router>        
       </div>

  );
}
}
export default App;