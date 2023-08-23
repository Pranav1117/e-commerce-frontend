import React from "react";
import weblogo from "../../Media/Logo/black-market-website-favicon-color.png";
import "./weblogo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="logo-container">
          <div className="logo-wrapper">
        <Link to="/" className="link">
            <img src={weblogo} alt="logo" className="web-logo" />
            <p className="black-txt">lack</p>
            <p className="market-txt">Market</p>
        </Link>
          </div>
      </div>
    </>
  );
};

export default Logo;
