import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Navbelt from "../Components/Navbelt/Navbelt";
import { useLocation } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../Feature/CounterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchProducts = () => {
  const locations = useLocation();
  const isLoggedIn = useSelector((state) => state.slice.loggedIn);
  const dispatch = useDispatch();

  // console.log(locations);
  const [products, setProducts] = useState([]);

  useEffect = () => {
    setProducts(locations.state);
    // console.log(products);
  };
  const notify = () => toast("Product added to cart");

  const handleAddCart = async (product) => {
    if (isLoggedIn) {
      const id = {
        ids: product,
      };
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios.post(
        "https://e-commerce-backend-cpp5.onrender.com/addtocart",
        id
      );

      dispatch(setItems(resp.data.item));
      notify();
      // console.log(resp);
    } else {
      alert("Login First to add item in Cart");
    }
  };

  return (
    <>
      <Navbelt />
      {/* <p className="search=heading">Results for </p> */}

      <div className="search-product-main-container">
        {products.length > 0
          ? products.map((item, i) => {
              return (
                <div className="search" key={i}>
                  <div className="search-product-wrapper">
                    <Link to={`/sub/${item.ids}`}>
                      <img src={item.image} />
                      <p className="search-product-price">Rs.{item.price}</p>
                      <p className="search-product-rating">
                        Rating:{item.rating}/5
                      </p>
                      <p className="search-product-name">{item.product}</p>
                    </Link>
                    <button className="add-to-cart"
                      onClick={async () => {
                        handleAddCart(item.ids);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          : "No Product Found "}
        <ToastContainer />
      </div>
    </>
  );
};

export default SearchProducts;
