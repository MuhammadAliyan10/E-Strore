import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../assets/Css/Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="navbar">
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
        <div className="cart"></div>
      </div>
    </div>
  );
};

export default Navbar;
