import React, { useEffect, useState } from "react";
// import HeaderCompo from "../Components/HeaderCompo";
import Navbelt from "../Components/Navbelt/Navbelt";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { setItems, setLoggedInStatus, setName1 } from "../Feature/CounterSlice";
import PopupMessage from "../Components/PopUpMsg/PopUpMsg";

const ProductSubcategory = () => {
  const [data, setData] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const [loginMsg, setLoginMsg] = useState(null);

  const state = useSelector((state) => state.slice.items);

  const isLoggedIn = useSelector((state) => state.slice.loggedIn);

  // console.log(isLoggedIn);

  const params = useParams();

  let subcategory = params.product;

  let a = "";

  const dispatch = useDispatch();

  const notify = () => toast("Product added to cart");

  // const notifyLogIn = () => toast("Please log in first");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios(
        "https://e-commerce-backend-cpp5.onrender.com/data"
      );

      dispatch(setLoggedInStatus(resp.data.isLoggedIn));

      dispatch(setName1(resp.data.name));

      // console.log(resp);
      setData(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCart = async (product) => {
    if (isLoggedIn) {
      const id = {
        ids: product,
      };
      const token = localStorage.getItem("token");

      notify();

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios.post(
        "https://e-commerce-backend-cpp5.onrender.com/addtocart",
        id
      );

      dispatch(setItems(resp.data.item));
    } else {
      // notifyLogIn();
      setLoginMsg("Login to add item to cart");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  return (
    <>
      <Navbelt />
      <div className="subcat-page-heading"></div>

      <div className="sub-catpage-main-container">
        {" "}
        <div className="filter-subcat">
          <p>Filter Category</p>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/accessories">Accesories</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/mobiles">Mobiles</Link>
        </div>
        <div className="vertical-line"></div>
        <div className="subcat-content-container">
          {/* {loginMsg} */}
          {data.length > 0 ? (
            data
              .filter((item) => item.subcategory === subcategory)
              .map((item, index) => {
                return (
                  <div key={index} className="subcatpage-content-wrapper">
                    <Link to={`/sub/${item.ids}`}>
                      <div className="subcatpage-avatar-container">
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
        </div>
        <ToastContainer />
      </div>
      {showPopup && (
        <PopupMessage
          message="Login to Add Item to Cart"
          onClose={closePopup}
        />
      )}
      <Footer />
    </>
  );
};

export default ProductSubcategory;
