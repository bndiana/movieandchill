import React, { Component } from 'react';
import './Toprating.css'

class Toprating extends Component {

    constructor(){
        super();
        this.state = {
            data: false,
            item: null
        }
    }

    componentDidMount(){
        fetch('https://movies-app-siit.herokuapp.com/movies?take=10')
            .then( res => res.json())
            .then(json =>{
                console.log(json)
            this.setState({item: json, data: true })
            })
    }
  render(){

        let item= this.state;

        console.log(item)
        return(
        <div className='top-rating-container'>
             {/* <div>{this.state.item.results.Country}</div> */}
         </div>
        )

    } 

}




export default Toprating;   


// render() {
//         if (this.state.data) {
//           return <div>loading...</div>;
//         }
    
//         if (!this.state.item) {
//           return <div>didn't get a person</div>;
//         }
    
//         return (
//           <div>
//             <div>{this.state.item.results.Title}</div>
//             {/* <div>{this.state.item.name.first}</div>
//             <div>{this.state.item.name.last}</div>
//             <img src={this.state.item.picture.large} alt='poster' /> */}
//           </div>
//         );
//       }

 




    //   handleGetAllMovies = () => {
    //     fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999")
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log(json);
    //       });
    //   };
