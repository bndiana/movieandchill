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
    this.goToNextPageLeft()
}

handleRight = () =>{
    this.state.x === -100 * (2 - 1) ? this.setX(0) : this.setX( this.state.x - 100);
    this.goToNextPageRight();
}

goToNextPageRight = () => {
    if(this.state.index === 4){
        this.setState({index: this.state.index === 0}) 
    } else {
         this.setState({index: this.state.index + 1})
    }
}

goToNextPageLeft = () => {
    if(this.state.index >= 0){
        this.setState({index: this.state.index === 4}) 
    } else {
         this.setState({index: this.state.index - 1})
    }  
}

render(){
    return (
        <div className='coming-soon-container'>
            <h1 className='title-coming-soon'>Coming Soon</h1>
            <div className='slider'>
                <ImgComponent index ={this.state.index}/>
                <button id='goLeft' onClick={this.handleLeft}><img src={Previous} className='arrows' style={{width: '30px'}} alt='arrow'/></button>
                <button id='goRight' onClick={this.handleRight}><img src={Next} className='arrows' style={{width: '30px'}} alt='arrow'/></button>
            </div>
        </div>
        )
    }

}
export default  Comingsoon;