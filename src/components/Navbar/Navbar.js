import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU " />
          <input placeholder="Search User" />
        </div>
        <div className="navbar_right">
          <p>Hi, Name</p>
          <p>Home</p>
          <p>About us</p>
          <p>Profile</p>
          <p>Dark Mode</p>
          <button>Logout</button>
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
}

export default Navbar;
