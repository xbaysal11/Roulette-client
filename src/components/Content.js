import React, { Component } from "react";
import UserList from "./UsersList";
import RouletteCircle from "./RouletteCircle";
import Chat from "./Chat";
import "./Content.sass";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <UserList />
        <RouletteCircle />
        <Chat />
      </div>
    );
  }
}
export default Content;
