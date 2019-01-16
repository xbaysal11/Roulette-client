import React, { Component } from "react";
import ws from "./services/ws";

class App extends Component {
  constructor() {
    super();
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.auth = this.auth.bind(this);
  }

  state = {
    firstName: "",
    lastName: "",
    users: []
  };

  componentDidMount() {
    ws.on("CHANGE_USERS_LIST", data => {
      this.setState({
        users: data.users
      });
    });
  }

  startRun() {
    ws.emit("START");
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
      <div className="App">
        <input
          type="text"
          placeholder="firstName"
          onChange={this.changeFirstName}
        />
        <input
          type="text"
          placeholder="lastName"
          onChange={this.changeLastName}
        />
        <button onClick={this.auth}>Auth</button>
      </div>
    );
  }
}

export default App;
