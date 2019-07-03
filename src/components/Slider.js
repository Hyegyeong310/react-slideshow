import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="slider">
        <Slide />
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}

export default Slider;
