import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/main.css";

const Layout = ({ showHeader, showFooter, children }) => {
  return (
    <>
      {showHeader && <Header />}
      <div
        style={{
          maxWidth: showHeader ? "1280px" : "100%",
          margin: "auto",
          paddingTop: "23.6rem",
        }}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
