import React, { useEffect, useState } from "react";
// import HeaderCompo from "../Components/HeaderCompo";
import Navbelt from "../Components/Navbelt/Navbelt";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inc } from "../Feature/CounterSlice";
import Footer from "../Components/Footer/Footer";

const ProductSubcategory = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  console.log(params);
  let subcategory = params.product;

  // const location = useLocation();

  const dispatch = useDispatch();

  const fetchData = async () => {
    let resp = await axios("https://e-commerce-backend-cpp5.onrender.com/data");
    setData(resp.data);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <Navbelt />
      <div className="subcat-page-heading">{`Hot deals on ${subcategory}`}</div>
      <div className="sub-catpage-main-container">
        {data.length > 0
          ? data
              .filter((item) => item.subcategory === subcategory)
              .map((item, index) => {
                return (
                  <div key={index} className="subcatpage-content-wrapper">
                    <Link to={`/sub/${item.ids}`}>
                      <div className="subcatpage-avatar-container">
                        <img src={item.image} alt="avatar"/>{" "}
                      </div>
                      <div>Rating : {item.rating} / 5 </div>

                      <div className="product-name">{item.product}</div>
                      <div>Rs.{item.price}</div>
                    </Link>
                    <button
                      onClick={() => {
                        dispatch(inc());
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })
          : "Loadinng"}
      </div>
      <Footer />
    </>
  );
};

export default ProductSubcategory;
