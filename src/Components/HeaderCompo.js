import React from "react";
import Navbelt from "./Navbelt/Navbelt";
import Navbar from "./Navbar/Navbar.js";
// import Footer from "./Footer/Footer";

const HeaderCompo = ({ isLoggedIn, name }) => {
  return (
    <>
      <Navbelt isLoggedIn={isLoggedIn} name={name} />
      <Navbar />
    </>
  );
};

export default HeaderCompo;
