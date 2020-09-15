import React, { Component } from 'react';
import './ImgComponent.scss';

// export default function ImgComponent({src}) {
//     return (
//         <div className='img-slide'>
//             <img  src={src} alt='slide-img' className='img-slide'/>
//         </div>
//     )
// }

class ImgComponent extends Component {


    state = {
        error: null,
        isLoaded: false,
        items: []
      };
 

  componentDidMount(){
      fetch('https://movies-app-siit.herokuapp.com/movies?&take=20')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
render(){

  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: dsfds</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else { 
    console.log(items, this.props.index)
    return (
      <div className='coming-soon-movie-container'>
        {items.slice(this.props.index, this.props.index + 3).map(item => (
          <div className='render-movies' key={item._id}>
            <img src={item.Poster} alt='poster' className='poster'/>
            <p className='movie-desc' key={item._id}>
               Title: {item.Title} <br/>
               Genre: {item.Genre} 
            </p>
          </div>
        ))}
      </div>
    );
  }
}
}
export default ImgComponent;
