import React from "react";
// import Logo from "../Components/Logo/Logo";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbelt from "../Components/Navbelt/Navbelt";
import { setItems, setLoggedInStatus, setName1 } from "../Feature/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import loadingicon from '../Media/Logo/loading-icon.jpg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer/Footer";

const ProductCategory = () => {
  const params = useParams();
  let aa = "";

  const isLoggedIn = useSelector((state) => state.slice.loggedIn);

  let category = params.category;

  const location = useLocation();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios("http://localhost:3001/data");
      console.log(resp);
      setData(resp.data.data);
      dispatch(setLoggedInStatus(resp.data.isLoggedIn));

      dispatch(setName1(resp.data.name));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn]);

  const notify = () => toast("Product added to cart");

  const handleAddCart = async (product) => {
    if (isLoggedIn) {
      const id = {
        ids: product,
      };
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let resp = await axios.post("http://localhost:3001/addtocart", id);

      dispatch(setItems(resp.data.item));
      notify();
      console.log(resp);
    } else {
      alert("Login First to add item in Cart");
    }
  };

  let a = "";
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
                        <button
                          onClick={async () => {
                            handleAddCart(item.ids);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </>
                  );
                })
            : "Loadingg"}
        </div>
        <ToastContainer />;
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
