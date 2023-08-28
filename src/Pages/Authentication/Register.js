import React, { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backbtn from "../../Media/Logo/back-icon.png";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: null,
    email: null,
    phoneNo: null,
    address: null,
    password: null,
  });

  const [registerStatus, setRegisterStatus] = useState("");

  const navigate = useNavigate();

  const handleonChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://e-commerce-backend-cpp5.onrender.com/register",
        data
      );

      const response = res.data;
      console.log(response);

      const token = response.token;
      localStorage.setItem("token", token);

      setRegisterStatus(response.msg);
      console.log(registerStatus);
      if (response.token) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
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

      <div className="register-container">
        <h2 className="signin-heading">Register</h2>
        <hr className="hr-line-signin" />

        <form className="form-on-signin">
          <div className="input-label-wrapper-register">
            <label className="name-label labels-register">Name:</label>
            <input
              type="text"
              className="name-input-on-register"
              placeholder="Enter ur Name"
              name="name"
              onChange={handleonChange}
            />
          </div>

          <div className="input-label-wrapper-register">
            <label className="email-label labels-register">E-mail:</label>
            <input
              type="text"
              className="email-input-on-register"
              placeholder="Enter ur email"
              name="email"
              onChange={handleonChange}
            />
          </div>
          <div className="number-address-wrapper">
            {" "}
            <div className="input-label-wrapper-register align">
              <label className="email-label labels-register">Phone No:</label>
              <input
                type="text"
                className="email-input-on-register"
                placeholder="Enter ur phone number"
                name="phoneNo"
                onChange={handleonChange}
              />
            </div>
            <div className="input-label-wrapper-register align">
              <label className="email-label labels-register">Address:</label>
              <input
                type="text"
                className="email-input-on-register"
                placeholder="Enter ur address"
                name="address"
                onChange={handleonChange}
              />
            </div>
          </div>

          <div className="input-label-wrapper-register">
            <label className="password-label labels-register">Password:</label>
            <input
              type="password"
              className="password-input-on-register"
              placeholder="Enter ur password"
              name="password"
              onChange={handleonChange}
            />
          </div>

          <button onClick={handleSubmit} className="register-btn">
            Register
          </button>

          <Link className="create-acount-link" to="/signin">
            Already registered? Login Here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
