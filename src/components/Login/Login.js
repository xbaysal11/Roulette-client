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
      <div>
        <input
          type="text"
          placeholder="First Name: "
          value={this.props.first_name}
          onChange={this.changefirst_name}
        />
        <input
          type="text"
          placeholder="First Name: "
          value={this.props.last_name}
          onChange={this.changelast_name}
        />
        <button onClick={this.auth}>login</button>
      </div>
    );
  }
}

export default Login;
