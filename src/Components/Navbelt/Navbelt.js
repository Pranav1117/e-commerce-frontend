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
import { ToastContainer, toast } from "react-toastify";

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
  const [searchProducts, setSearchProducts] = useState();
  const [resultProducts, setResultProducts] = useState();

  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios.get(
        "https://e-commerce-backend-cpp5.onrender.com/logout"
      );
      console.log(resp);

      localStorage.setItem("token", resp.data.token);
      toast.success("User logged Out");
      setName1(false);

      nav("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartITems = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios.get(
        "https://e-commerce-backend-cpp5.onrender.com/cartitems"
      );
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

  const handleOnChange = (e) => {
    setSearchProducts((e.target.name = e.target.value));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchProducts);

    const resp = await axios.get(
      `https://e-commerce-backend-cpp5.onrender.com/search/${searchProducts}`
    );
    setResultProducts(resp.data);
    console.log(resp.data);
    nav("/searchproducts", { state: resp.data });
  };

  return (
    <div>
      {/* <ToastContainer /> */}
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
            name="searchbar"
            onChange={handleOnChange}
          ></input>

          <button className="search-btn" type="submit" onClick={handleSearch}>
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
                    {/* <li>
                      <Link to="/myacount"> {MyAccount}</Link>
                    </li> */}
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
