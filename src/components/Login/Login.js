import React, { Component } from "react";
import PropTypes from "prop-types";
import ws from "../../services/ws";
import "./Login.scss";
import client1 from "../../img/client-1.jpg";

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changefirst_name = this.changefirst_name.bind(this);
    this.changelast_name = this.changelast_name.bind(this);
    this.auth = this.auth.bind(this);
  }
  state = {
    first_name: "",
    last_name: ""
  };

  componentDidMount() {
    ws.on("AUTH_SUCCESS", data => {
      this.props.onLogin(data);
    });
  }

  changefirst_name(event) {
    this.setState({
      first_name: event.target.value
    });
  }

  changelast_name(event) {
    this.setState({
      last_name: event.target.value
    });
  }

  auth() {
    if (!this.state.first_name || !this.state.last_name) return;
    ws.emit("AUTH", this.state);
  }

  render() {
    return (
      <div className="auth">
        <img src={client1} alt="" />
        <input
          type="text"
          placeholder="Name: "
          value={this.props.first_name}
          onChange={this.changefirst_name}
        />
        <div className="space" />
        <input
          type="text"
          placeholder="Surname: "
          value={this.props.last_name}
          onChange={this.changelast_name}
        />
        <div className="space" />
        <button className="button" onClick={this.auth}>
          <span>Login</span>
        </button>
      </div>
    );
  }
}

export default Login;
