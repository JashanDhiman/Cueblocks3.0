import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/header.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openDev, setOpenDev] = useState(true);
  const [openMarketing, setOpenMarketing] = useState(true);
  const width = window.innerWidth; // window size: ;

  useEffect(() => {
    if (width < 1024) {
      setIsMobile(true);
    }
  }, [width]);
  return (
    <>
      <header className="header">
        <div className="container">
          {/*border-bottom: 1px solid #333333;*/}
          <nav
            className="navigation"
            style={{
              borderBottom:
                !isMobile && openService ? "1px solid #333333" : "none",
            }}
          >
            <div className="logo">
              <a href="#">
                <h5>CueBlocks</h5>
              </a>
            </div>
            {isMobile ? (
              <div className="navLinks">
                <ul>
                  <li>
                    <a href="#abc">Contact </a>
                  </li>
                  <li onClick={() => setShowSideNav(true)}>
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11H16M1 1H16H1ZM1 6H16H1Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="navLinks">
                <ul>
                  <li>
                    <a href="#abc">About </a>
                  </li>
                  <li>
                    <a href="#abc">Careers </a>
                  </li>
                  <li onClick={() => setOpenService(!openService)}>
                    <a href="#abc">
                      Services{" "}
                      <i className="icons">
                        {openService ? <AiOutlineDown /> : <AiOutlineUp />}
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#abc">Portfolio </a>
                  </li>
                  <li>
                    <a href="#abc">Blog </a>
                  </li>
                  <li>
                    <a href="#abc">Contact </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
        {openService && (
          <div className="serviceDropdown">
            <div className="innerDiv">
              <h3 onClick={() => setOpenDev(!openDev)}>
                Development
                <i className="icons">
                  {openDev ? <AiOutlineDown /> : <AiOutlineUp />}
                </i>
              </h3>
              {openDev && (
                <ul>
                  <li>Magento</li>
                  <li>Shopify</li>
                  <li>PHP development</li>
                  <li>Wordpress/ woocommerce</li>
                </ul>
              )}
            </div>
            <div className="innerDiv">
              <h3 onClick={() => setOpenMarketing(!openMarketing)}>
                Digital Marketing
                <i className="icons">
                  {openMarketing ? <AiOutlineDown /> : <AiOutlineUp />}
                </i>
              </h3>
              {openMarketing && (
                <ul>
                  <li>Email Marketing</li>
                  <li>Organic Search (SEO)</li>
                  <li>Paid Digital Advertising</li>
                  <li>Marketplace Optimisation</li>
                  <li>Conversion Rate Optimisation</li>
                </ul>
              )}
            </div>
            <div className="innerDiv">
              <h3>Design</h3>
            </div>
          </div>
        )}
      </header>
      {showSideNav && (
        <div className="sideNav">
          <div className="logo">
            <a href="#">
              <h5>CueBlocks</h5>
            </a>
            <div onClick={() => setShowSideNav(false)}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13L1 1M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <ul className="sideNavItems">
            <li>
              <a href="#abc">About </a>
            </li>
            <li>
              <a href="#abc">Careers </a>
            </li>
            <li>
              <a href="#abc">
                Services
                <svg
                  style={{ float: "right" }}
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2.52837L7.2381 6.7856L7.49987 7L7.7619 6.7856L13 2.52837L12.4762 2L7.49987 6.04283L2.52381 2L2 2.52837Z"
                    fill="#0500FF"
                    stroke="#0500FF"
                    strokeWidth="2"
                  />
                </svg>
                <ul className="innerItems">
                  <li>Develpment</li>
                  <li>Digital Marketing</li>
                  <li>Design</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#abc">Portfolio </a>
            </li>
            <li>
              <a href="#abc">Blog </a>
            </li>
            <li>
              <a href="#abc">Contact </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
