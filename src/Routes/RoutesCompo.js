import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategory from "../Pages/ProductCategory";
import ProductDetails from "../Pages/ProductDetails";
import HomePage from "../Pages/HomePage";
import SignIn from "../Pages/Authentication/SignIn";
import Register from "../Pages/Authentication/Register";
import Cart from "../Pages/Cart";
import ProductSubcategory from "../Pages/ProductSubcategory";

const RoutesCompo = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

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
