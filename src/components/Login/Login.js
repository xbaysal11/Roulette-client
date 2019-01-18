import React, { Component } from "react";
import PropTypes from "prop-types";
import ws from "../../services/ws";
import "./Login.sass";
class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.auth = this.auth.bind(this);
  }
  state = {
    firstName: "",
    lastName: ""
  };

  componentDidMount() {
    ws.on("AUTH_SUCCESS", data => {
      this.props.onLogin(data);
    });
  }

  changeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  changeLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  auth() {
    ws.emit("AUTH", this.state);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name: "
          value={this.props.firstName}
          onChange={this.changeFirstName}
        />
        <input
          type="text"
          placeholder="First Name: "
          value={this.props.lastName}
          onChange={this.changeLastName}
        />
        <button onClick={this.auth}>login</button>
      </div>
    );
  }
}

export default Login;
