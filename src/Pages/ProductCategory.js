import React from "react";
// import Logo from "../Components/Logo/Logo";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbelt from "../Components/Navbelt/Navbelt";
import { inc } from "../Feature/CounterSlice";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer/Footer";

const ProductCategory = () => {
  const params = useParams();
  let aa=''
  console.log(params.category);

  let category = params.category;
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

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

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleAddCart = () => {
    showToastMessage();

    dispatch(inc());
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [aa]);

  let a = "";
  console.log(a);
  return (
    <div>
      <Navbelt />
      <div className="cat-page-heading">{`Upto 60% off on ${category} products`}</div>
      <div className="category-container">
        <div className="categorypage-content-container">
          {data.length > 0
            ? data
                .filter((item) => item.category === category)
                .map((item) => {
                  a = item.subcategory;
                  return (
                    <>
                      <div className="categorypage-content-wrapper">
                        <Link to={`/sub/${item.ids}`}>
                          <div className="category-page-avatar-container">
                            <img src={item.image} alt="avatar" />{" "}
                          </div>
                          <div>Rating : {item.rating} / 5 </div>

                          <div className="product-name">{item.product}</div>
                          <div>Rs.{item.price}</div>
                        </Link>
                        <button onClick={handleAddCart}>Add to Cart</button>
                      </div>
                    </>
                  );
                })
            : "Loadingg"}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
