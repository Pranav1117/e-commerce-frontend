import React from "react";
// import Logo from "../Components/Logo/Logo";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbelt from "../Components/Navbelt/Navbelt";
import { setItems, setLoggedInStatus, setName1 } from "../Feature/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import loadingicon from "../Media/Logo/loading-icon.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer/Footer";
import PopupMessage from "../Components/PopUpMsg/PopUpMsg";
import "../style.css";

const ProductCategory = () => {
  const params = useParams();
  const [noOfProductsToShow, setNoOfProductsToShow] = useState(10);

  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const isLoggedIn = useSelector((state) => state.slice.loggedIn);

  let category = params.category;

  const location = useLocation();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const handleProductsToshow = () => {
    setNoOfProductsToShow((prev) => prev + 5);
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios(
        "https://e-commerce-backend-cpp5.onrender.com/data"
      );
      // console.log(resp);
      setData(resp.data.data);
      dispatch(setLoggedInStatus(resp.data.isLoggedIn));

      dispatch(setName1(resp.data.name));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [isLoggedIn]);

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
      setShowPopup(true);
    }
  };

  let a = "";
  return (
    <div>
      <Navbelt />

      <div className="cat-page-heading">{`Buy Top quality ${category} products`}</div>
      <div className="category-container">
        <div className="categorypage-content-container">
          {data.length > 0 ? (
            data
              .filter((item) => item.category === category)
              .slice(0, noOfProductsToShow)
              .map((item, i) => {
                a = item.subcategory;
                return (
                  // <>
                  <div key={i} className="categorypage-content-wrapper">
                    <Link to={`/sub/${item.ids}`}>
                      <div className="category-page-avatar-container">
                        <img src={item.image} alt="avatar" />{" "}
                      </div>
                      <div>Rating : {item.rating} / 5 </div>

                      <div className="product-name">{item.product}</div>
                      <div>Rs.{item.price}</div>
                    </Link>
                    <button
                      onClick={async () => {
                        handleAddCart(item.ids);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  // </>
                );
              })
          ) : (
            <div className="wrap">
              <div className="loading">
                <div className="bounceball"></div>
                <div className="text">NOW LOADING...</div>
              </div>
            </div>
          )}
          {noOfProductsToShow < 25 && data.length > 0 ? (
            <p className="load-more" onClick={handleProductsToshow}>
              Load More
            </p>
          ) : (
            ""
          )}
        </div>
        <ToastContainer />;
      </div>
      {showPopup && (
        <PopupMessage
          message="Login to Add Item to Cart"
          onClose={closePopup}
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductCategory;
