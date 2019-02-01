import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import logo from "../../img/logo1.png";
import client1 from "../../img/client-1.jpg";

class Header extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };
  render() {
    const { users } = this.props;
    return (
      <div className="header">
        <div className="pic">
          <img src={logo} alt="" />
        </div>
        <div className="dropdown">
          <img className="dropbtn" src={client1} alt="" />
          <div className="dropdown-content">
            <p>id: {this.props.user_id}</p>
            <p>User: </p>
            <button type="text">Log out</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
