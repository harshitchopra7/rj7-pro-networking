import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU " />
          <input placeholder="Search User" />
        </div>
        <div className="navbar_right">
          <p>Hi, Name</p>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about-us")}>About us</p>
          <p onClick={() => navigate("/profile")}>Profile</p>
          <p>Dark Mode</p>
          <button>Logout</button>
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
}

export default Navbar;
