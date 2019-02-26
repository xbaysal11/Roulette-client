/* eslint-disable react/no-unescaped-entities */
import React, { Component, createRef } from "react";
import { bindActionCreators } from "redux";
import PT from "prop-types";
import { connect } from "react-redux";

import {
    createMessagesGetAll,
    createMessagesPost
} from "../../store/actions/messages_actions";
import {
    getMessagesFromState,
    getMessagesStatusFromState
} from "../../store/getters/messages_getters";

import Clock from "react-live-clock";
import client1 from "../../img/client-1.jpg";
import sound_new_msg from "../../sounds/msg.mp3";
import ws from "../../services/ws";

import "./Chat.scss";

const Massage = ({ text, first_name, last_name }) => (
    <div className="msg">
        <img src={client1} alt="!" />
        <div className="title">
            <h5>
                {first_name} {last_name}
            </h5>
            <div className="time">
                <Clock
                    format={"HH:mm:ss"}
                    ticking={false}
                    timezone={"KG/Pacific"}
                />
            </div>
        </div>
        <p className="say">{text}</p>
    </div>
);

Massage.propTypes = {
    user_id: PT.string.isRequired,
    text: PT.string.isRequired,
    first_name: PT.string.isRequired,
    last_name: PT.string.isRequired
};

class Chat extends Component {
    static propTypes = {
        messages: PT.array.isRequired,
        status: PT.string.isRequired,
        getAll: PT.func.isRequired,
        postMessage: PT.func.isRequired
    };

    constructor() {
        super();
        this.scroll_elem = createRef();
    }

    state = {
        message: ""
    };

    playSound() {
        this.audio_element.play();
    }

    componentDidMount() {
        this.audio_element = new Audio(sound_new_msg);
        this.props.getAll(ws);
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
        this.props.postMessage(ws, this.state.message);
        this.setState({
            message: ""
        });
    };

    render() {
        const { messages } = this.props;
        const { message } = this.state;
        return (
            <div className="chat">
                <div className="chatTitle">
                    <h3>Room's Chat</h3>
                </div>
                <div className="chatlist" ref={this.scroll_elem}>
                    {messages.map((m, idx) => (
                        <Massage {...m} key={idx} />
                    ))}
                </div>
                <div className="container">
                    <form className="input form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Message"
                            value={message}
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
export default connect(
    state => ({
        messages: getMessagesFromState(state),
        status: getMessagesStatusFromState(state)
    }),
    dispatch => ({
        getAll: bindActionCreators(createMessagesGetAll, dispatch),
        postMessage: bindActionCreators(createMessagesPost, dispatch)
    })
)(Chat);
