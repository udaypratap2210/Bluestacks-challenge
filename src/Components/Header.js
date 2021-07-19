import React from "react";
import "./Header.css";
import Logo from "./Logo.png";
function Header() {
  return (
    <div className="header">
      <img className="img" src={Logo} alt=""></img>
    </div>
  );
}

export default Header;
