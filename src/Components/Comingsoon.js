import React, { Component } from 'react';
import './Cosmingsoon.css';
import './Slider.scss'
import ImgComponent from './ImgComponent';
import './ImgComponent.scss';
import Previous from './previous.png'
import Next from './next.png'

class  Comingsoon extends Component{
        

    state = {
        index: 0,
        x: 0
    }

    setX = (x) => {
        this.setState({x});
    }

    handleLeft = () =>{
        this.state.x === 0 ? this.setX(-100 * (2 - 1)) : this.setX( this.state.x + 100);
    }

    handleRight = () =>{
        this.state.x === -100 * (2 - 1) ? this.setX(0) : this.setX( this.state.x - 100);
        this.goToNextPage();
    }

    goToNextPage = () => {
        this.setState({index: this.state.index + 3})
    }

    render(){
        return (
            <div className='coming-soon-container'>
                <div className='slider'>
                <ImgComponent index ={this.state.index}/>
                <button id='goLeft' onClick={this.handleLeft}><img src={Previous} style={{width: '30px'}}/></button>
                <button id='goRight' onClick={this.handleRight}><img src={Next} style={{width: '30px'}}/></button>
                </div>
            </div>
        )
        }

    }
export default  Comingsoon;