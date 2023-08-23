import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbelt from "../Components/Navbelt/Navbelt";
import Footer from "../Components/Footer/Footer";
import { type } from "@testing-library/user-event/dist/type";
const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);

  const product1 = params.id;
  const product=parseInt(product1)
  console.log(typeof(product))

  const [data, setData] = useState(null);

  const fetchData = async () => {
    let resp = await axios("https://e-commerce-backend-cpp5.onrender.com/data");

    setData(resp.data);
    // console.log(data[2].ids);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  
  }, []);



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

                      <div className="detail-product-price">Rs.{item.price}</div>

                      <div className="detail-product-desc">
                        <span>Description:</span>
                        <br />
                        {item.description}
                      </div>
                      <div className="btn-container">
                        <button className="buy-btn">Buy Now</button>

                        <button className="cart-btn">Add to Cart</button>
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
      </div>

      <div className="more-container">
        <p> {`Browse more in`}</p>
        <div className="more-product-wrapper"></div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
