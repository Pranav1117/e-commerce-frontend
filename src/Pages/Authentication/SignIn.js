import React, { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backbtn from "../../Media/Logo/back-icon.png";
import axios from "axios";

const SignIn = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleonChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://e-commerce-backend-cpp5.onrender.com/signin",
      data
    );
    console.log(res.data);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="body">
      <Logo />

      <div className="back-home-btn-wrapper">
        <button onClick={goBack} className="back-btn-signin">
          <img src={backbtn} alt="backlogo" className="back-btn" />
        </button>

        {/* <Link to="/" className="home-link-signin">
          Home
  </Link>*/}
      </div>

      <div className="signin-container">
        <h2 className="signin-heading">Sign In</h2>
        <hr className="hr-line-signin" />

        <form className="form-on-signin">
          <div className="input-label-wrapper">
            <label className="email-label">E-mail:</label>
            <input
              type="text"
              className="email-input-on-signin"
              placeholder="Enter ur email"
              name="email"
              onChange={handleonChange}
            />
          </div>
          <div className="input-label-wrapper">
            <label className="password-label">Password:</label>
            <input
              type="password"
              className="password-input-on-signin"
              placeholder="Enter ur password"
              name="password"
              onChange={handleonChange}
            />
          </div>
          <button onClick={handleSubmit} className="signin-btn">
            Sign In
          </button>
          <Link className="create-acount-link" to="/register">
            New Here? Register first
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
