import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import img1 from "../images/footer_be.png";
//import img2 from "../images/footer_dribble.png";
//import img3 from "../images/footer_facebook.png";
//import img4 from "../images/footer_google.png";
//import img5 from "../images/footer_linekdin.png";
//import img6 from "../images/footer_insta.png";
const ImageSliderAsNav = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider {...settings} asNavFor={nav1} ref={(slider) => setNav2(slider)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSliderAsNav;
