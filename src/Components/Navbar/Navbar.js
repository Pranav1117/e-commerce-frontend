import React, { useState, useEffect } from "react";
import "../../style.css";
import "../../mobileview.css";
import menicon from "../../Media/Navbar-logos/men-cloth.webp";
import womenicon from "../../Media/Navbar-logos/women-cloth.jpeg";
import elctronicsicon from "../../Media//Navbar-logos/electronics-logo.jpg";
import mobileicon from "../../Media/Navbar-logos/mobile-logo.jpg";
import accessoriesicon from "../../Media/Navbar-logos/accessories-logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMen, setShowMen] = useState(false);

  const [showWomen, setShowWomen] = useState(false);

  const [showelectronics, setShowEctronics] = useState(false);

  const [showMobiles, setShowMobiles] = useState(false);

  const [showAccessories, setShowAccessories] = useState(false);

  const handleMen = () => {
    setShowMen(!showMen);
  };

  const handleWomen = () => {
    setShowWomen(!showWomen);
  };

  const handleMobiles = () => {
    setShowMobiles(!showMobiles);
  };

  const handleElectronics = () => {
    setShowEctronics(!showelectronics);
  };

  const handleAccessories = () => {
    setShowAccessories(!showAccessories);
  };

  useEffect(() => {
    const handleMenOutsideClick = (event) => {
      // Check if the click occurred outside the menu and toggle menu visibility accordingly
      if (!event.target.closest(".navbar-men") && showMen) {
        setShowMen(false);
      }
    };
    // Attach the event listener when the menu is visible
    if (showMen) {
      document.addEventListener("click", handleMenOutsideClick);
    }

    const handleWomenOutsideClick = (event) => {
      if (!event.target.closest(".navbar-women") && showWomen) {
        setShowWomen(false);
      }
    };
    if (showWomen) {
      document.addEventListener("click", handleWomenOutsideClick);
    }

    const handleElectronicsOutsideClick = (event) => {
      if (!event.target.closest(".navbar-electronics") && showelectronics) {
        setShowEctronics(false);
      }
    };
    if (showelectronics) {
      document.addEventListener("click", handleElectronicsOutsideClick);
    }

    const handleMobilessOutsideClick = (event) => {
      if (!event.target.closest(".navbar-mobile") && showMobiles) {
        setShowMobiles(false);
      }
    };
    if (showMobiles) {
      document.addEventListener("click", handleMobilessOutsideClick);
    }

    const handleAccessoriessOutsideClick = (event) => {
      if (!event.target.closest(".navbar-accessories") && showAccessories) {
        setShowAccessories(false);
      }
    };
    if (showAccessories) {
      document.addEventListener("click", handleAccessoriessOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleMenOutsideClick);
      document.removeEventListener("click", handleWomenOutsideClick);
      document.removeEventListener("click", handleElectronicsOutsideClick);
      document.removeEventListener("click", handleMobilessOutsideClick);
      document.removeEventListener("click", handleAccessoriessOutsideClick);
    };
  }, [showMen, showWomen, showelectronics, showAccessories, showMobiles]);

  return (
    <>
      <div className="navbar-wrapper">
        <button onClick={handleMen}>
          <div className="navbar-men navbar-content">
            <img
              src={menicon}
              alt="men-clothing-logo"
              className="men-cloth-logo nav-icon"
            />
            <span>Men</span>

            <div>
              {showMen && (
                <ul className="men-ul">
                  <Link to="/men/tshirt">
                    <li className="men-products">Tshirt</li>
                  </Link>

                  <Link to="/men/shirt">
                    <li className="men-products">Shirt</li>
                  </Link>

                  <Link to="/men/trousers">
                    {" "}
                    <li className="men-products">Trousers</li>{" "}
                  </Link>

                  <Link to="/men/jackets">
                    {" "}
                    <li className="men-products">Jackets</li>
                  </Link>

                  <Link to="/men/shorts">
                    <li className="men-products">Shorts</li>{" "}
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </button>

        <button onClick={handleWomen}>
          <div className="navbar-women navbar-content">
            <img
              src={womenicon}
              alt="women-clothing-logo"
              className="women-cloth-logo nav-icon"
            />
            <span>Women</span>

            <div>
              {showWomen && (
                <ul className="women-ul">
                  <Link to="/women/tshirts">
                    <li className="men-products">Tshirt</li>
                  </Link>

                  <Link to="/women/tops">
                    <li className="men-products">Tops</li>
                  </Link>

                  <Link to="/women/trouser">
                    {" "}
                    <li className="men-products">Trousers</li>{" "}
                  </Link>

                  <Link to="/women/blazers">
                    {" "}
                    <li className="men-products">Blazer</li>
                  </Link>

                  <Link to="/women/dress">
                    <li className="men-products">Dress</li>{" "}
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </button>

        <button onClick={handleElectronics}>
          <div className="navbar-electronics navbar-content">
            <img
              src={elctronicsicon}
              alt="electronics-logo"
              className="elecrtronics-logo nav-icon"
            />
            <span>Electronics</span>

            <div>
              {showelectronics && (
                <ul className="electronics-ul">
                  <Link to="/electronics/earphone">
                    <li className="men-products">Earphones</li>
                  </Link>

                  <Link to="/electronics/airpods">
                    <li className="men-products">Airpodes</li>
                  </Link>

                  <Link to="/electronics/Tv">
                    {" "}
                    <li className="men-products">TV</li>{" "}
                  </Link>

                  <Link to="/electronics/powerbank">
                    {" "}
                    <li className="men-products">Power Bank</li>
                  </Link>

                  <Link to="/electronics/washingmachine">
                    <li className="men-products">Washing Machine</li>{" "}
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </button>

        <button onClick={handleMobiles}>
          <div className="navbar-mobile navbar-content">
            <img
              src={mobileicon}
              alt="mobile-logo"
              className="mobile-logo nav-icon"
            />
            <span>Mobiles</span>

            <div>
              {showMobiles && (
                <ul className="mobiles-ul">
                  <Link to="/mobiles/apple">
                    <li className="men-products">Apple</li>
                  </Link>

                  <Link to="/mobiles/realme">
                    <li className="men-products">Realme</li>
                  </Link>

                  <Link to="/mobiles/oppo">
                    {" "}
                    <li className="men-products">Oppo</li>{" "}
                  </Link>

                  <Link to="/mobiles/samsung">
                    {" "}
                    <li className="men-products">Samsung</li>
                  </Link>

                  <Link to="/mobiles/redmi">
                    <li className="men-products">Redmi</li>{" "}
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </button>

        <button onClick={handleAccessories}>
          <div className="navbar-accessories navbar-content">
            <img
              src={accessoriesicon}
              alt="accessories-logo"
              className="accessories-logo nav-icon"
            />
            <span className="cat-names">Accessories</span>

            <div>
              {showAccessories && (
                <ul className="accessories-ul">
                  <Link to="/accessories/shoes">
                    <li className="men-products">Shoes</li>
                  </Link>

                  <Link to="/accessories/backpacks">
                    <li className="men-products">Backpack</li>
                  </Link>

                  <Link to="/accessories/wallets">
                    {" "}
                    <li className="men-products">Wallets</li>{" "}
                  </Link>

                  <Link to="/accessories/sunglasses">
                    {" "}
                    <li className="men-products">Sunglasses</li>
                  </Link>

                  <Link to="/accessories/watch">
                    <li className="men-products">Watch</li>{" "}
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
