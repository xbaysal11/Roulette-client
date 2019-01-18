import React, { Component } from "react";
import "./Chat.sass";

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <div className="chatTitle">
          <h3>Room's Chat</h3>
        </div>
        <div>
          <div>
            <h5>ADMIN Adminov : message</h5>
          </div>
          <div>
            <h5>USER Userov : message</h5>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Message"
              // onChange={this.changeLastName}
            />
            <button>Send!</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
