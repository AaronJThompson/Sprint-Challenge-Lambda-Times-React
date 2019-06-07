import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedIndex: 3,
    }
  }
  componentDidMount(){
    this.setState({images: carouselData});
  }

  leftClick = () => {
    let index;
    if (this.state.selectedIndex === 0){
      index = this.state.images.length - 1;
    } else {
      index = this.state.selectedIndex - 1;
    }
    this.setState((state) => {
      return {selectedIndex: index};
    })
  }

  rightClick = () => {
    let index;
    if (this.state.selectedIndex === (this.state.images.length - 1)){
      index = 0;
    } else {
      index = this.state.selectedIndex + 1;
    }
    this.setState((state) => {
      return {selectedIndex: index};
    })
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selectedIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}