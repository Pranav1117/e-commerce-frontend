import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbelt from "../Components/Navbelt/Navbelt";
import Footer from "../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setItems, setLoggedInStatus, setName1 } from "../Feature/CounterSlice";

const ProductDetails = () => {
  const params = useParams();

  const isLoggedIn = useSelector((state) => state.slice.loggedIn);

  const dispatch = useDispatch();

  const product1 = params.id;
  const product = parseInt(product1);

  const [data, setData] = useState(null);

  const fetchData = async () => {
    let resp = await axios("http://localhost:3001/data");

    setData(resp.data.data);
    // console.log(data[2].ids);
    console.log(data);

    dispatch(setLoggedInStatus(resp.data.isLoggedIn));

    dispatch(setName1(resp.data.name));
  };

  let a = "";
  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  const handleAddCart = async (product) => {
    if (isLoggedIn) {
      const id = {
        ids: product,
      };
      const token = localStorage.getItem("token");

      notify();

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios.post("http://localhost:3001/addtocart", id);

      dispatch(setItems(resp.data.item));
    } else {
      // notifyLogIn();
      // setLoginMsg("Login to add item to cart");
      alert("Login to add item to cart");
    }
  };

  const notify = () => toast("Product added to cart");
  return (
    <>
      <Navbelt />
      <div className="detaipage-main-container">
        {data
          ? data
              .filter((item) => item.ids === product)
              .map((item) => {
                return (
                  <div className="detail-main-container">
                    <div className="left-avatar-wrapper">
                      <img src={item.image} alt="logo" />
                    </div>

                    <div className="right-desc-wrapper">
                      <div className="detail-product-name">{item.product}</div>

                      <div className="detail-product-rating">
                        Rating: {item.rating} / 5
                      </div>

                      <div className="detail-product-price">
                        Rs.{item.price}
                      </div>

                      <div className="detail-product-desc">
                        <span>Description:</span>
                        <br />
                        {item.description}
                      </div>
                      <div className="btn-container">
                        {/* <button className="buy-btn">Buy Now</button> */}

                        <button
                          className="cart-btn"
                          onClick={async () => {
                            handleAddCart(item.ids);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>

                      <div className="detail-ul">
                        <ul>
                          <li>Standard delivery in 2-8 days</li>

                          <li>Return policy valid for 7 days</li>

                          <li>Seven quality checks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
          : "Loadingg"}
        <ToastContainer />;
      </div>

      <div className="more-container">
        <p></p>
        <div className="more-product-wrapper"></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
