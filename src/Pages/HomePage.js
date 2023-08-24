import React, { useEffect, useState } from "react";
import "../mobileview.css";
import HeaderCompo from "../Components/HeaderCompo";
import "./menu.css";
import Carousel1 from "../Components/Carousel/Carousel1";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  const [data, setData] = useState([]);
  let a = "";
  const fetchData = async () => {
    try {
      let resp = await axios(
        "https://e-commerce-backend-cpp5.onrender.com/data"
      );
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [a]);

  return (
    <>
      <div>
        <HeaderCompo />
        <Carousel1 />
        {/* {data.length > 0
        ? data.map((item) => {
            return <>{item.product}</>;
          })
        : "loaddingg"} */}
        <div className="men-top-deal-container">
          <p className="top-deal-txt men-top-deal-txt">Men's Wear Top Deals</p>
          <div className="men-top-deal">
            <div className="men-tshirt-top-deal-wrapper">
              {data.length > 0
                ? data
                    .filter((item) => {
                      return item.ids === 3;
                    })
                    .map((item, index) => {
                      return (
                        <>
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
                      );
                    })
                : "Loadingg"}
            </div>
            <Link to="/men">
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
                      );
                    })
                : "Loadingg"}
            </div>
            <Link to="/mobiles">
              <div className="view-all-container">
                {" "}
                <p className="">View All</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="men-top-deal-container">
          <p className="top-deal-txt men-top-deal-txt">Electronics Top Deals</p>

          <div className="men-top-deal">
            <div className="men-tshirt-top-deal-wrapper">
              {data.length > 0
                ? data
                    .filter((item) => {
                      return item.ids === 30;
                    })
                    .map((item, index) => {
                      return (
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
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
                        <>
                          <div key={index} className="abc">
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
                        </>
                      );
                    })
                : "Loadingg"}
            </div>
            <Link to="/electronics">
              <div className="view-all-container">
                {" "}
                <p className="">View All</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="women-accessories-top-deal-container">
          <p>Great deals On</p>
          <div className="women-top-deal-card">
            <p className="New-txt">New Out</p>
            <div className="women-new">
              {data.length > 0
                ? data
                    .filter((item) => item.category === "women")
                   .splice(4,2).map((item)=>{
                    return <>
                    <Link>
                    <img src={item.image} alt="avatar" className="great-deals-women-img"/>
                    <div>{item.product}</div>
                    </Link>
                    </>
                   })
                : "Loadingg"}
            </div>
          </div>

          <div className="accessories-top-deal-card">
          <p className="New-txt">New Out</p>
            <div className="women-new">
              {data.length > 0
                ? data
                    .filter((item) => item.category === "accessories")
                    .splice(3,2).map((item)=>{
                      return <>
                      <Link>
                      <img src={item.image} alt="avatar" className="great-deals-accesories-img"/>
                      <div>{item.product}</div></Link>
  
                      </>
                     })
                : "Loadingg"}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
