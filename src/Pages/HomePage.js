import React, { useEffect, useState } from "react";
import "../mobileview.css";
import { useLocation } from "react-router-dom";
import HeaderCompo from "../Components/HeaderCompo";
import "./menu.css";
import Carousel1 from "../Components/Carousel/Carousel1";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { setLoggedInStatus, setName1, setItems } from "../Feature/CounterSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const state = useSelector((state) => state.slice.name);
  const name1 = state;

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [data, setData] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(null);

  let token = null;

  let a = "";

  const fetchData = async () => {
    try {
      token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios.get(
        "https://e-commerce-backend-cpp5.onrender.com/data"
      );
      // console.log(resp);

      setData(resp.data.data);

      setLoggedIn(resp.data.isLoggedIn);

      dispatch(setLoggedInStatus(resp.data.isLoggedIn));

      dispatch(setName1(resp.data.name));

      setName(resp.data.name);
    } catch (err) {
      setLoggedIn(false);

      // console.log({ msg: err, isLoggedIn: isLoggedIn });
    }
  };

  useEffect(() => {
    fetchData();
  }, [a]);

  return (
    <>
      <HeaderCompo isLoggedIn={isLoggedIn} name={name} />
      <Carousel1 />
      {data.length > 0 ? (
        <>
          <div className="men-top-deal-container">
            <p className="top-deal-txt men-top-deal-txt">
              Men's Wear Top Deals
            </p>
            <div className="men-top-deal">
              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 3;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div key={index} className="abc">
                              <Link to={`/men/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to="/men/tshirt">
                              <p className="men-top-deal-avatar-product product-txt">
                                T-shirts
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 10;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/men/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to="/men/shirt">
                              <p className="men-top-deal-avatar-product product-txt">
                                Shirts
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 12;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/men/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/men/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Trousers
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 19;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/men/${item.subcategory}`}>
                                <img
                                  alt="top-deal"
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/men/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Jackets
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 23;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/men/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/men/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Shorts
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>
              <Link to="/men" className="view">
                <div className="view-all-container-men">
                  <p className="">View All</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="men-top-deal-container">
            <p className="top-deal-txt men-top-deal-txt">Mobiles Top Deals</p>

            <div className="men-top-deal">
              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 51;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/mobiles/${item.subcategory}`}>
                                <img
                                  alt="top deal"
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/mobiles/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Apple
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 58;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/mobiles/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/mobiles/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Realme
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 65;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/mobiles/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="avatar"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/mobiles/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Oppo
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 67;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/mobiles/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/mobiles/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Samsung
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 75;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/mobiles/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/mobiles/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Redmi
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>
              <Link to="/mobiles" className="view">
                <div className="view-all-container">
                  {" "}
                  <p className="">View All</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="men-top-deal-container">
            <p className="top-deal-txt men-top-deal-txt">
              Electronics Top Deals
            </p>

            <div className="men-top-deal">
              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 30;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/electronics/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/electronics/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Earphone
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 33;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/electronics/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/electronics/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Airpods
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 37;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/electronics/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/electronics/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                TV
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 45;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/electronics/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/electronics/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Powerbank
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>

              <div className="men-tshirt-top-deal-wrapper">
                {data.length > 0
                  ? data
                      .filter((item) => {
                        return item.ids === 49;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="abc">
                              <Link to={`/electronics/${item.subcategory}`}>
                                <img
                                  className="men-top-deal-avatar top-deal-avatar"
                                  src={item.image}
                                  alt="top-deal"
                                />
                              </Link>
                            </div>{" "}
                            <Link to={`/electronics/${item.subcategory}`}>
                              <p className="men-top-deal-avatar-product product-txt">
                                Washing Machine
                              </p>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>
              <Link to="/electronics" className="view">
                <div className="view-all-container">
                  {" "}
                  <p className="">View All</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="women-accessories-top-deal-container">
            <div className="women-top-deal-card">
              <p className="New-txt">New Out</p>
              <div className="women-new">
                {data.length > 0
                  ? data
                      .filter((item) => item.category === "women")
                      .splice(4, 4)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <Link
                              className=""
                              to={`/women/${item.subcategory}`}
                            >
                              <img
                                src={item.image}
                                alt="avatar"
                                className="great-deals-women-img"
                              />
                              <div>{item.product}</div>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>
            </div>

            <div className="accessories-top-deal-card">
              <p className="New-txt">Deals on</p>
              <div className="women-new">
                {data.length > 0
                  ? data
                      .filter((item) => item.category === "accessories")
                      .splice(3, 4)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <Link to={`/accessories/${item.subcategory}`}>
                              <img
                                src={item.image}
                                alt="avatar"
                                className="great-deals-accesories-img"
                              />
                              <div>{item.product}</div>
                            </Link>
                          </div>
                        );
                      })
                  : "Loadingg"}
              </div>
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <div className="wrap">
          <div className="loading">
            <div className="bounceball"></div>
            <div className="text">NOW LOADING...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
