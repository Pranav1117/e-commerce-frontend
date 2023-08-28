import React, { useEffect, useState } from "react";
import "../../style.css";
import "../../mobileview.css";
import weblogo from "../../Media/Logo/black-market-website-favicon-color.png";
import usericon from "../../Media/Logo/user-logo.png";
import carticon from "../../Media/Logo/cart-logo.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import searchicon from "../../Media/Logo/search.png";
import { useSelector } from "react-redux";
import { setItems, setName1 } from "../../Feature/CounterSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
const Navbelt = ({ isLoggedIn, name }) => {
  const nav = useNavigate();

  const itemQuantity = useSelector((state) => state.slice.items);

  const loggedIn = useSelector((state) => state.slice.loggedIn);

  // const [quan, setQuan] = useState(itemQuantity);

  let name1 = useSelector((state) => state.slice.name);

  const nam = name1;
  const [open, setOpen] = useState(false);

  const isLoggedIn1 = loggedIn;
  // console.log(isLoggedIn);

  const menu = ["My account", "Notification preference", "Sign in", "Register"];

  const MyAccount = menu[0];
  const Notification = menu[1];
  const SignIn = menu[2];
  const Register = menu[3];
  const [items, setItem] = useState(null);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios.get("http://localhost:3001/logout");
      console.log(resp);

      localStorage.setItem("token", resp.data.token);
      setName1(false);

      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchProduct = async () => {
  //   try {
  //     const token = localStorage.getItem("token");

  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //     const resp = await axios.get("http://localhost:3001/cartitems");
  //     console.log(resp);
  //     setProducts(resp.data);
  //     return resp.data;
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };

  const fetchCartITems = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios.get("http://localhost:3001/cartitems");
      console.log(resp);

      dispatch(setItems(resp.data.length));

      return resp.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handelOpen = () => {
    setOpen(!open);
  };

  // let total1 = function total() {
  //   let tota = 0;
  //   for (let i = 0; i < products.length; i++) {
  // //     tota = products[i].price + tota;
  // //   }
  // //   return tota;
  // // };

  useEffect(() => {
    // fetchProduct();
    fetchCartITems();
    // total1();
  }, [itemQuantity]);

  return (
    <div>
      <div className="nav-belt">
        <div className="logo-policy-wrapper">
          <div className="logo-wrapper">
            <Link to="/">
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
            <img src={searchicon} alt="search-icon" className="search-icon" />
          </button>
        </div>

        <div className="cart-icon-container">
          <Link to="/cart">
            <div className="cart-icon-wrapper">
              {itemQuantity}
              <img src={carticon} alt="cart-logo" className="cart-icon" />
            </div>
          </Link>
          <div className="profile-icon-wrapper" onClick={handelOpen}>
            <img className="profile-icon" src={usericon} alt="logo" />
            {open && (
              <ul className="menu-ul">
                {isLoggedIn1 ? (
                  <>
                    <li className="name">{nam}</li>{" "}
                    <li>
                      <Link to="/myacount"> {MyAccount}</Link>
                    </li>
                    <li>
                      <Link to="/notification">{Notification}</Link>
                    </li>
                    <li onClick={logOut}>Log Out</li>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <Link to="/signin" className="signin-link">
                      <li>{SignIn}</li>
                    </Link>
                    <Link to="/register" className="register-link">
                      <li>{Register}</li>
                    </Link>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="search-bar-wrapper-mobile">
        <input className="search-bar" placeholder="Search for products"></input>
        <button className="search-btn" type="submit">
          <img src={searchicon} alt="search" className="search-icon-mobile" />
        </button>
      </div>
    </div>
  );
};

export default Navbelt;
