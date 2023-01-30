import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isAboutUsPage = window.location.href.includes("about-us");
  const isProfilePage = window.location.href.includes("profile");

  return (
    <div className={`navbar_container ${isAboutUsPage && "navbar_about_us"}`}>
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU " />
          {!isAboutUsPage && !isProfilePage && (
            <input placeholder="Search User" />
          )}
        </div>
        <div className="navbar_right">
          <p>Hi, Name</p>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about-us")}>About us</p>
          <p onClick={() => navigate("/profile")}>Profile</p>
          <p>Dark Mode</p>
          {!isAboutUsPage && !isProfilePage && <button>Logout</button>}
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
}

export default Navbar;
