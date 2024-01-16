import React from "react";
import Navbelt from "../Components/Navbelt/Navbelt";
import { Link } from "react-router-dom";
import MyOrders from "../Components/Orders/MyOrders";
import { useState } from "react";
const MyAccount = () => {
  const [showOrders, setShowOrders] = useState(false);
  // console.log("first");
  return (
    <>
      <Navbelt />
      {!showOrders ? (
        <div className="acount-main-container">
          <div className="profile-container">
            <h2>My Acount</h2>
            <button
              onClick={() => {
                setShowOrders(false);
              }}
            >
              Profile
            </button>
            <button
              onClick={() => {
                setShowOrders(true);
              }}
            >
              My Orders
            </button>
          </div>
          <div className="info-container">
            <div className="acount-details">
              <h3>Acount's Details</h3>
              <p>Name:</p>
              <p>Address:</p>
              <p>Contact No:</p>
              <p>Email:</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="acount-main-container">
          <div className="profile-container">
            <h2>My Acount</h2>
            <button
              onClick={() => {
                setShowOrders(false);
              }}
            >
              Profile
            </button>
            <button
              onClick={() => {
                setShowOrders(true);
              }}
            >
              My Orders
            </button>
          </div>
          <div className="info-container">
            <div className="acount-details">
              <h3>Order's Details</h3>
              <p>Product:</p>
              <p>Price:</p>
              <p>Quantity:</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccount;
