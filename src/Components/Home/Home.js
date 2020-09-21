import React, { Component } from 'react';
import Toprating from '../Main-up-section/Toprating';
import Comingsoon from '../Main-up-section/Comingsoon';
import WeeklyTop from '../Main-down-section/WeeklyTop';
import Recommended from '../Main-down-section/Recommended';
import TheLatestReleases from '../Main-down-section/TheLatestReleases';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FavoritePage from "../Favorites/FavoritePage";
import MovieDetails from "../MovieDetails/MovieDetails";
import GeneralSearch from "../GeneralSearch/GeneralSearch";
import './Home.css';
import AppLogin from '../Login-page/AppLogin';
import Allmovies from '../All movies/Allmovies';

export default class Home extends Component {
    render() {
        return (
            <div className='container-router'>
            <Router >
          <React.Fragment>
              <Switch>
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/favorite" component={FavoritePage} />
                <Route exact path="/search" component={GeneralSearch} />
             </Switch>
             <Route exact path='/Login' component={AppLogin} />
                <Route exact path='/AllMovies' component={Allmovies} />
            <div className='movies-container'>
              <Toprating />
              < Comingsoon />
            </div>
              <WeeklyTop />
              <Recommended />             
              <TheLatestReleases /> 
          </React.Fragment>
       </Router>
       </div>
        )
    }
}
