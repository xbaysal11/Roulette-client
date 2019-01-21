import React, { Component } from "react";
import "./Header.sass";
import logo from "../img/roulettekg.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} />
        <button className="out">Log out</button>
      </div>
    );
  }
}
export default Header;
