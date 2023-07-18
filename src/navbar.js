import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href=".">
          <img src="./logo512.png" alt="Logo" className="logo" />
        </a>
      </div>
      <div className="title-container">
        <h1>
          <a href=".">MotorSocial</a>
        </h1>
      </div>
      <div className="login-container">
        <a href="#">Login</a> | <a href="#">Create an account</a>
      </div>
    </nav>
  );
};

export default Navbar;
