import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../assets/Css/Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="bar">
          {sidebar ? (
            <button onClick={() => setSidebar(!sidebar)}>
              <i className="fa-solid fa-x"></i>
            </button>
          ) : (
            <button onClick={() => setSidebar(!sidebar)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          <Sidebar status={sidebar} />
        </div>
        <div className="main__logo">
          <h4>
            <span>E</span>-Store
          </h4>
        </div>
        <div className="cart">
          <a href="">
            <i className="fa-solid fa-shopping-cart"></i>
            <span className="card__count">0</span>
          </a>
          <div className="card__details">
            <p>You have 3 items in your cart</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
            <h4>Total</h4>
            <div className="additional__buttons">
              <button className="primary__button">VIEW CART</button>
              <button className="primary__button">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
