import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/ATG_icon.png";
import img2 from "../images/FB_icon.png";
import img3 from "../images/Amazon_icon.png";
import img4 from "../images/Gunsberg.png";
const ImageSliderAsNav = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="clientsSection">
      <div className="quotesIcon">
        <svg
          width="130"
          height="99"
          viewBox="0 0 130 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.18"
            d="M76.0209 89.8491C70.1732 83.7582 67.251 75.3317 67.2539 64.5681C67.2539 41.1325 82.9954 19.6092 114.479 0L117.699 5.01299C95.5132 19.6017 84.4224 34.1893 84.4261 48.7766C84.4261 48.9511 84.4537 49.0951 84.4537 49.2639C91.4514 43.0886 101.099 40.9007 110.065 43.4538C119.033 46.0075 126.093 52.9539 128.81 61.8952C131.526 70.8366 129.526 80.5492 123.499 87.6808C123.173 88.1106 122.743 88.5027 122.388 88.9144C122.216 89.0969 122.058 89.2795 121.883 89.4548C121.245 90.2229 120.563 90.9532 119.841 91.642C114.358 96.5481 107.143 99.0007 98.1959 99C89.249 99 81.8574 95.9502 76.0217 89.8497L76.0209 89.8491ZM8.76475 89.8455C2.92127 83.7545 0 75.3266 0 64.5608C0 41.1326 15.74 19.6111 47.2214 8.70133e-05L50.4452 5.01605C28.7204 19.308 17.7095 33.5928 17.2582 47.8728C23.0552 43.4687 30.3632 41.5629 37.5659 42.5783C44.7681 43.5929 51.2696 47.4443 55.6309 53.28C59.9922 59.1156 61.8538 66.4532 60.8034 73.6693C60.8034 73.753 60.8171 73.8097 60.8171 73.8883C60.8171 80.8186 58.0742 86.7356 52.5884 91.6395C47.1026 96.5434 39.888 98.9938 30.9434 98.9916C22.001 98.9916 14.6072 95.9432 8.76368 89.8458L8.76475 89.8455Z"
            fill="#0500FF"
          />
        </svg>
      </div>
      <div className="sliderDiv">
        <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="clientsWord">
            <div className="col col1">
              <div className="title">A Word From Our Clients</div>
              <div className="text">
                "Everest has been an incredible partner from the jump. They
                thoughtfully brought our vision to life - from the brand, app
                design, engineering, and launch strategy."
              </div>
              <div className="clientName">
                <b>Karan Bansal</b>
                <br></br>
                Co-Founder
              </div>
            </div>
            <div className="col col2">
              <div>
                <b>Industry</b>
                <ul>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <b>Services</b>
                <ul>
                  <li>Magento to shopify</li>
                  <li>Digital Marketing</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div>
                <b>Case study</b>
                <svg
                  width="49"
                  height="8"
                  viewBox="0 0 49 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5H48V3.5H0V4.5Z"
                    fill="#0500FF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Slider>
        <Slider {...settings} asNavFor={nav1} ref={(slider) => setNav2(slider)}>
          <div>
            <img src={img1} alt="icon" />
          </div>
          <div>
            <img src={img2} alt="icon" />
          </div>
          <div>
            <img src={img3} alt="icon" />
          </div>
          <div>
            <img src={img4} alt="icon" />
          </div>
          <div>
            <img src={img4} alt="icon" />
          </div>
          <div>
            <img src={img4} alt="icon" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ImageSliderAsNav;
