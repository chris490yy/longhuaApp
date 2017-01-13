import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
// require('../../styles/navi.style.css');
require('../../../styles/headslider.style.css');
require('../../../styles/carousel.css');

var Carousel = require('nuka-carousel');
class HeadSliderComponent extends React.Component{

  constructor(){

    super();

  }

  render() {
    return (
      <Carousel dragging={true} autoplay={true}> 
          <img className="carouselImage"
          src="res/images/sh1.jpg"/>
          <img className="carouselImage"
          src="res/images/sh2.jpg"/>
          <img className="carouselImage"
          src="res/images/sh3.jpg"/>
          <img className="carouselImage"
          src="res/images/sh4.jpg"/>
          <img className="carouselImage"
          src="res/images/sh10.jpg"/>
          <img className="carouselImage"
          src="res/images/sh6.jpg"/>
          <img className="carouselImage"
          src="res/images/sh8.jpg"/>
          <img className="carouselImage"
          src="res/images/sh9.jpg"/>
          <img className="carouselImage"
          src="res/images/sh5.jpg"/>
      </Carousel>
    )
  }

}

export default HeadSliderComponent;