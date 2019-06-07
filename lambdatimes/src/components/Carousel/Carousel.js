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
    this.setState((state) => {
      return {selectedIndex: state.selectedIndex - 1};
    })
  }

  rightClick = () => {
    this.setState((state) => {
      return {selectedIndex: state.selectedIndex + 1};
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