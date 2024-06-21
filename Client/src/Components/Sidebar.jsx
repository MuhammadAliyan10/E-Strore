import React from "react";
import "../assets/Css/Sidebar.css";

const Sidebar = ({ status }) => {
  return (
    <div className={`sidebar ${status ? "show" : "hide"}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
