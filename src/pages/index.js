import * as React from "react";
import Layout from "../components/Layout";
import serviceImg from "../images/service_img.png";
import arrow from "../images/Arrow 2.png";
import videoPoster from "../images/videoSectionImg.png";
import "../styles/HomePage.css";
import ImageSliderAsNav from "../components/Slickslider";

// styles

// data
//const links = [
//  {
//    text: "Tutorial",
//    url: "https://www.gatsbyjs.com/docs/tutorial/",
//    description:
//      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//    color: "#E95800",
//  },
//  {
//    text: "How to Guides",
//    url: "https://www.gatsbyjs.com/docs/how-to/",
//    description:
//      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//    color: "#1099A8",
//  },
//  {
//    text: "Reference Guides",
//    url: "https://www.gatsbyjs.com/docs/reference/",
//    description:
//      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//    color: "#BC027F",
//  },
//  {
//    text: "Conceptual Guides",
//    url: "https://www.gatsbyjs.com/docs/conceptual/",
//    description:
//      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//    color: "#0D96F2",
//  },
//  {
//    text: "Plugin Library",
//    url: "https://www.gatsbyjs.com/plugins",
//    description:
//      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//    color: "#8EB814",
//  },
//  {
//    text: "Build and Host",
//    url: "https://www.gatsbyjs.com/cloud",
//    badge: true,
//    description:
//      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//    color: "#663399",
//  },
//];

// markup
const IndexPage = () => {
  return (
    <>
      <Layout showHeader={true} showFooter={true}>
        <ImageSliderAsNav />
        <section className="hero_section">
          <div className="container">
            <div className="hero_sec_flex">
              <div className="hero_section_text">
                <h1>
                  <span>
                    <strong>CueBlocks</strong> is<br></br>
                  </span>
                  <span>
                    an <strong> eCommerce </strong>agency <br></br>
                  </span>
                  <span>
                    for <strong>nutrition brands </strong>
                  </span>
                </h1>
                <p>
                  committed to <strong>going beyond</strong>
                </p>
              </div>
            </div>
            <div className="hero_section_bottom container">
              <div className="ecommerce_button">
                <a href="#abc">
                  <span> Lets Talk</span>
                  <br></br>
                  <span>
                    eCommerce <img src={arrow} alt="arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <svg
              width="8"
              height="37"
              viewBox="0 0 8 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 36.3536C3.84171 36.5488 4.15829 36.5488 4.35355 36.3536L7.53554 33.1716C7.7308 32.9763 7.7308 32.6597 7.53554 32.4645C7.34027 32.2692 7.02369 32.2692 6.82843 32.4645L4 35.2929L1.17157 32.4645C0.976312 32.2692 0.65973 32.2692 0.464468 32.4645C0.269205 32.6597 0.269205 32.9763 0.464468 33.1716L3.64645 36.3536ZM3.5 2.18557e-08L3.5 36L4.5 36L4.5 -2.18557e-08L3.5 2.18557e-08Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="heroBlurBlu"></div>
          <div className="heroBlurYel"></div>
        </section>
        <section className="videoSection">
          <div className="container">
            <div className="video_image">
              <video width="1240" height="516" poster={videoPoster}>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video_play_btn">
                <a href="#abc">
                  <span className="material-symbols-outlined" id="play_btn">
                    play_circle
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="serviceSection">
          <div className="container">
            <div className="service">
              <div className="service_col1">
                <img src={serviceImg} alt="serviceIMg" />
              </div>
              <div className="service_col2">
                <h3>SERVICES</h3>
                <div className="services_development">
                  <span>01</span>
                  <h4>Development</h4>
                  <ul>
                    <li>
                      <a href="#abc">Magento</a>
                    </li>
                    <li>
                      <a href="#abc">Shopify</a>
                    </li>
                    <li>
                      <a href="#abc">PHP deveolpment</a>
                    </li>
                    <li>
                      <a href="#abc">Wordpress/ woocommerce</a>
                    </li>
                  </ul>
                </div>
                <div className="services_marketing">
                  <span>02</span>
                  <h4>Digital Marketing</h4>
                  <ul>
                    <li>
                      <a href="#abc">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#abc">Organic Search (SEO)</a>
                    </li>
                    <li>
                      <a href="#abc">Paid Digital Advertising</a>
                    </li>
                    <li>
                      <a href="#abc">Marketplace Optimisation</a>
                    </li>
                    <li>
                      <a href="#abc">Conversion Rate Optimisation</a>
                    </li>
                  </ul>
                </div>
                <div className="services_design">
                  <span>03</span>
                  <h4>Design</h4>
                  <ul>
                    <li>
                      <a href="#abc">UI/UX</a>
                    </li>
                    <li>
                      <a href="#abc">Branding</a>
                    </li>
                    <li>
                      <a href="#abc">3D renders</a>
                    </li>
                    <li>
                      <a href="#abc">Illustrations</a>
                    </li>
                    <li>
                      <a href="#abc">Amazon Pages</a>
                    </li>
                    <li>
                      <a href="#abc">Ad graphics (tentative)</a>
                    </li>
                  </ul>
                </div>
                <div className="getInTouch">
                  <a href="#abc">
                    <span>Get in</span>
                    <br></br>
                    <span>
                      Touch <img src={arrow} alt="arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="heroBlurBlu"></div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
