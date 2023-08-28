import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategory from "../Pages/ProductCategory";
import ProductDetails from "../Pages/ProductDetails";
import HomePage from "../Pages/HomePage";
import SignIn from "../Pages/Authentication/SignIn";
import Register from "../Pages/Authentication/Register";
import Cart from "../Pages/Cart";
import ProductSubcategory from "../Pages/ProductSubcategory";
import MyAccount from "../Pages/MyAccount";
import MyOrders from "../Components/Orders/MyOrders";
import Notification from "../Pages/Notification";
const RoutesCompo = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myacount" element={<MyAccount />} />
          <Route path="/profile" element={<MyAccount />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/notification" element={<Notification />} />

          {/* Subcategory Routes */}
          <Route path="/men/:product" element={<ProductSubcategory />} />
          <Route path="/women/:product" element={<ProductSubcategory />} />
          <Route path="/mobiles/:product" element={<ProductSubcategory />} />
          <Route
            path="/accessories/:product"
            element={<ProductSubcategory />}
          />
          <Route
            path="/electronics/:product"
            element={<ProductSubcategory />}
          />

          {/* Main Category Routes */}
          <Route path="/:category" element={<ProductCategory />} />

          {/* Singel Products details */}
          <Route path="/sub/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesCompo;
