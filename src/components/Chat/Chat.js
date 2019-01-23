import React, { Component, createRef } from "react";
import "./Chat.scss";
import client1 from "../../img/client-1.jpg";
import sound_new_msg from "../../sounds/msg.mp3";
import ws from "../../services/ws";

const Massage = ({ user_id, text, first_name, last_name }) => (
  <div className="msg">
    <img src={client1} alt="!" />
    <div className="title">
      <h5>
        {first_name} {last_name}
      </h5>
      <div className="time">13:22</div>
    </div>
    <p className="say">{text}</p>
  </div>
);

class Chat extends Component {
  constructor() {
    super();
    this.scroll_elem = createRef();
  }

  state = {
    message: "",
    messages: []
  };

  playSound() {
    this.audio_element.play();
  }

  componentDidMount() {
    this.audio_element = new Audio(sound_new_msg);
    ws.on("NEW_MESSAGE", data => {
      this.setState(
        {
          messages: [...this.state.messages, data]
        },
        () => {
          this.scrollToEnd();
          this.playSound();
        }
      );
    });
    ws.on("NEW_MESSAGE_ALL", data => {
      this.setState(
        {
          messages: data.messages
        },
        () => {
          this.scrollToEnd();
        }
      );
    });
    ws.emit("GET_MESSAGE_ALL");
  }

  scrollToEnd = () => {
    this.scroll_elem.current.scrollTo(0, 999999);
  };

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.message) return;
    ws.emit("POST_MESSAGE", {
      message: this.state.message
    });
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div className="chat">
        <div className="chatTitle">
          <h3>Room's Chat</h3>
        </div>
        <div className="chatlist" ref={this.scroll_elem}>
          {this.state.messages.map(m => (
            <Massage {...m} />
          ))}
        </div>
        <div className="container">
          <form className="input form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn--primary btn--inside uppercase"
            >
              Send!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Chat;
