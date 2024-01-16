import React, { useEffect, useState } from "react";
import Navbelt from "../Components/Navbelt/Navbelt";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import "./cart.css";
import { data } from "jquery";
import { setItems, setName1, setLoggedInStatus } from "../Feature/CounterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import PopupMessage from "../Components/PopUpMsg/PopUpMsg";

const Cart = () => {
  const nav = useNavigate();
  const state = useSelector((state) => state.slice.items);

  const [showPopup, setShowPopup] = useState(false);

  const [showErrPopup, setShowErrPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    nav("/");
  };

  const isLoggedIn = useSelector((state) => state.slice.loggedIn);

  const [products, setProducts] = useState([]);

  const [data, setData] = useState({
    name: null,
    price: null,
    quantity: null,
    image: null,
    userEmail: null,
  });

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios.get(
        "https://e-commerce-backend-cpp5.onrender.com/cartitems"
      );
      // console.log(resp.data);

      setProducts(resp.data);

      dispatch(setItems(resp.data.length));

      dispatch(setName1(resp.data.name));
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
      // console.log(resp);
      setData({
        [data.name]: resp.data.name,
        [data.price]: resp.data.price,
        [data.quantity]: resp.data.quantity,
        [data.image]: resp.data.image,
        [data.userEmail]: resp.data.userEmail,
      });
      dispatch(setItems(resp.data.length));
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleDeleteItem = async (product) => {
    const id = {
      ids: product,
    };
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    let resp = await axios.post(
      "https://e-commerce-backend-cpp5.onrender.com/deleteitemcart",
      id
    );
    setProducts(resp.data.w);
    // console.log(resp);
  };

  const IncreaseItem = async (product) => {
    const id = {
      ids: product,
    };
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    let resp = await axios.post(
      "https://e-commerce-backend-cpp5.onrender.com/addtocart",
      id
    );
    setProducts(resp.data);
    // setQuantity(resp.data.quantity);
    // console.log(resp);
  };

  const notify = () => toast("Product added to cart");

  const orderNotify = () => {
    toast.success("Order Placed");
  };

  const decreaseItem = async (product) => {
    const id = {
      ids: product,
    };

    let resp = await axios.patch(
      "https://e-commerce-backend-cpp5.onrender.com/decreaseitemcart",
      id
    );
    // console.log(resp.data);
    dispatch(setItems(resp.data.length));
    setProducts(resp.data);
    return resp.data;
  };

  const orders = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const tempArr = products.map((obj) => {
        const { _id, name, ...products } = obj;
        return { ...products, product: name };
      });

      // console.log(tempArr, "----------tempObj");
      const resp = await axios.post(
        "https://e-commerce-backend-cpp5.onrender.com/orders",
        tempArr
      );
      // console.log(resp);
      //  await orderNotify();
      // toast.success("Order Placed Successfully");
      setShowPopup(true);
      // nav("/");
    } catch (error) {
      console.log(error);
      setShowErrPopup(true);
    }
  };

  let total1 = function total() {
    let tota = 0;
    for (let i = 0; i < products.length; i++) {
      tota = products[i].price * products[i].quantity + tota;
    }
    return tota;
  };

  useEffect(() => {
    fetchProduct();
    fetchCartITems();
    console.log(isLoggedIn);

    // console.log(products);
    total1();
  }, [products.length]);

  return (
    <>
      <Navbelt />

      <div className="order-wrapper">
        <div className="product-info-cart">
          {products.length > 0
            ? products.map((item) => {
                return (
                  <>
                    {item.quantity > 0 ? (
                      <div className="cart-product-container">
                        <div className="cart-imgs-detail-wrapper">
                          <img src={item.image} />
                          <div className="detail-button-wrapper">
                            <div className="cart-detail">
                              <p>{item.name}</p>
                              <p>{item.rating}/5</p>
                              <p>Rs.{item.price}</p>
                            </div>
                            <div className="button-container">
                              <button
                                onClick={async () => {
                                  decreaseItem(item.productId);
                                }}
                              >
                                -
                              </button>

                              <div>{item.quantity}</div>
                              <button
                                onClick={async () => {
                                  // notify();
                                  IncreaseItem(item.productId);
                                }}
                              >
                                +
                              </button>
                            </div>

                            <button
                              className="remove-btn"
                              onClick={async () => {
                                handleDeleteItem(item.productId);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      "as"
                    )}
                  </>
                );
              })
            : isLoggedIn
            ? "Your cart is empty"
            : "User not logged in"}

          <ToastContainer />
        </div>
        <div className="total-amount-cart">
          {" "}
          <p className="p1">PRICE SUMMARY</p>
          <p className="p4">Total item :{state}</p>
          <p className="p2">TOTAL | CHECKOUT | PAYMENT</p>
          <div className="total-place-order-wrapper">
            {" "}
            <p className="p3">Total : Rs.{total1()}</p>
            {products.length > 0 ? (
              <button onClick={() => orders()}>Place Order</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showPopup && (
        <PopupMessage
          message="Your order has been placed successfully!"
          onClose={closePopup}
        />
      )}

      {showErrPopup && (
        <PopupMessage message="Something Went Wrong!" onClose={closePopup} />
      )}
      <Footer />
    </>
  );
};

export default Cart;
