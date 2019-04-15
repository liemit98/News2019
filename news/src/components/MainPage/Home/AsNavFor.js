import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
          <div>
            <h3><img src="images/demo/300x250.gif" alt /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}