import React, { Component } from "react";
import "./Chat.sass";
import client1 from "../img/client-1.jpg";
import client2 from "../img/client-2.jpg";
import client3 from "../img/client-3.jpg";

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <div className="chatTitle">
          <h3>Room's Chat</h3>
        </div>
        <div className="chatlist">
          <div className="msg">
            <img src={client1} />
            <h5>ADMIN Adminov : </h5>
            <p className="say">Hello Guys!</p>
          </div>
          <div className="msg">
            <img src={client2} />
            <h5>USER Userov : </h5>
            <p className="say">Hi!!!</p>
          </div>
          <div className="msg">
            <img src={client3} />
            <h5>PLAYER Playerov : </h5>
            <p className="say"> Est nisi qui duis laboris reprehenderit laboris ad Lorem. Est enim officia et laboris ex tempor officia aute non ipsum duis ad ipsum. Eiusmod adipisicing Lorem est ex consequat enim proident minim veniam. Officia consectetur sint nostrud aliqua cillum mollit enim quis tempor officia adipisicing adipisicing non. Ipsum magna ea dolor aliqua in excepteur. Ut anim exercitation ut proident officia commodo deserunt aliqua.</p>
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
