import React, { useState } from "react";
import "../../style.css";
import "../../mobileview.css";
import weblogo from "../../Media/Logo/black-market-website-favicon-color.png";
import usericon from "../../Media/Logo/user-logo.png";
import carticon from "../../Media/Logo/cart-logo.png";
import { Link } from "react-router-dom";
import searchicon from "../../Media/Logo/search.png";
import { useDispatch, useSelector } from "react-redux";

const Navbelt = () => {
  const [open, setOpen] = useState(false);

  const menu = ["My account", "Notification preference", "Sign in", "Register"];

  const MyAccount = menu[0];
  const Notification = menu[1];
  const SignIn = menu[2];
  const Register = menu[3];



  const handelOpen = () => {
    setOpen(!open);
  };

  const dispatch=useDispatch()
  const state=useSelector((state)=>state.slice.value)
  console.log(state)
  return (
    <div>
      <div className="nav-belt">
        <div className="logo-policy-wrapper">
          <div className="logo-wrapper">
            <Link to='/'>
            <img src={weblogo} className="logo" alt="Logo" />
            </Link>
          </div>

          <div className="policy-wrapper">
            <p className="policy">Rules & policies</p>
          </div>
        </div>

        <div className="search-bar-wrapper">
          <input
            className="search-bar"
            placeholder="Search for products"
            ></input>
          <button className="search-btn" type="submit">
            <img src={searchicon} className="search-icon" />
          </button>
        </div>

        <div className="cart-icon-container">
          <Link to="/cart">
            <div className="cart-icon-wrapper">
            {state}
              <img src={carticon} alt="cart-logo" className="cart-icon" />
            </div>
          </Link>
          <div className="profile-icon-wrapper" onClick={handelOpen}>
            <img className="profile-icon" src={usericon} alt="logo" />
            {open && (
              <ul className="menu-ul">
                <li>{MyAccount}</li>

                <li>{Notification}</li>

                <Link to="/signin" className="signin-link">
                  <li>{SignIn}</li>
                </Link>
                <Link to="/register" className="register-link">
                  <li>{Register}</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="search-bar-wrapper-mobile">
        <input className="search-bar" placeholder="Search for products"></input>
        <button className="search-btn" type="submit">
          <img src={searchicon} className="search-icon-mobile" />
        </button>
      </div>
    </div>
  );
};

export default Navbelt;
