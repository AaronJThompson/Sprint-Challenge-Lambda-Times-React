import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';
// Complete this Carousel 

const StyledCarouselImage = styled.img`
  width: 100%;
  display: block;
  transition: 0.5s;
  position: absolute;
  left:0;
  transform: translateX(${props => props.offset}%);
  z-index: 0;
`;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedIndex: 0
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
      return {
        selectedIndex: index
      };
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
      return {
        selectedIndex: index
      };
    })
  }

  selectedImage = () => {
    let translateDelta = this.state.selectedIndex * 100

    return (
      this.state.images.map((img, index) => {
        return <StyledCarouselImage key={`carousel-image-${index}`} src={img} offset={(index * 100) - translateDelta} />
      })
    )
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}