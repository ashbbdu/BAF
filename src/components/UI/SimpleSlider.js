import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass : "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        
        <Slider {...settings}>
         
          <div className="single-header-item bg_cover">
            <img src="%PUBLIC_URL%/../assets/img/banner-1.jpeg" className="img-fluid w-100" />
          </div>
          <div className="single-header-item bg_cover">
            <img src="%PUBLIC_URL%/../assets/img/banner-2.jpeg" className="img-fluid w-100" />
          </div>
          <div className="single-header-item bg_cover">
            <img src="%PUBLIC_URL%/../assets/img/banner-3.jpeg" className="img-fluid w-100" />
          </div>
         
        </Slider>
        </div>
    
    );
  }
}