import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-category-wrapper">
        <Link to="/men">
          <p>Men</p>
        </Link>

        <Link to="/women">
          <p>Women</p>
        </Link>

        <Link to="/electronics">
          <p>Electronincs</p>
        </Link>

        <Link to="/mobiles">
          <p>Mobiles</p>
        </Link>

        <Link to="/accessories">
          <p>Accessories</p>
        </Link>
      </div>

      <div className="rules-footer-wrapper">
        <p>Rules & policies</p>
      </div>
    </div>
  );
};

export default Footer;
