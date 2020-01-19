import React from "react";
import "./index.css";
import { logoWhite } from "../../assets/images";
const Header = props => {
  return (
    <header className="header">
      <img  className="logo" src={logoWhite} />
    </header>
  );
};

export default Header;
