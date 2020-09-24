import React, { Component } from 'react';
import TheMostWatched from '../Main-up-section/TheMostWatched';
import Comingsoon from '../Main-up-section/Comingsoon';
import WeeklyTop from '../Main-down-section/WeeklyTop';
import Recommended from '../Main-down-section/Recommended';
import TheLatestReleases from '../Main-down-section/TheLatestReleases';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='container-router'>
                <React.Fragment>
                  <div className='movies-container'>
                    <TheMostWatched />
                    < Comingsoon />
                  </div>
                    <WeeklyTop />
                    <Recommended />             
                    <TheLatestReleases /> 
                </React.Fragment>
            </div>
        )
    }
}
