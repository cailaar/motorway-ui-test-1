import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./logo512.png" alt="Logo" className="logo" />
      </div>
      <div className="title-container">
        <h1>MotorSocial</h1>
      </div>
      <div className="login-container">
        <a href="#">Login</a> | <a href="#">Create an account</a>
      </div>
    </nav>
  );
};

export default Navbar;
