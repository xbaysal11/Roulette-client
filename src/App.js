import React, { Component } from "react";
import ws from "./services/ws";
import {
    Header,
    Content,
    UsersList,
    Chat,
    RouletteCircle,
    Login
} from "./components";
import store from "./store";
import { createUpdateUserList } from "./store/actions/users_actions";
import {
    createMessagesNewMessage,
    createMessageNewMessagesAll
} from "./store/actions/messages_actions";
import { Provider } from "react-redux";
import "./App.scss";

const addWsListeners = () => {
    ws.on("CHANGE_USERS_LIST", data => {
        store.dispatch(createUpdateUserList(data.users));
    });

    ws.on("NEW_MESSAGE", data => {
        store.dispatch(createMessagesNewMessage(data));
    });

    ws.on("NEW_MESSAGE_ALL", data => {
        store.dispatch(createMessageNewMessagesAll(data));
    });
};

class App extends Component {
    constructor() {
        super();
        this.onLoginHandler = this.onLoginHandler.bind(this);
    }

    state = {
        me: null
    };

    componentDidMount() {
        addWsListeners();
    }

    onLoginHandler(user) {
        this.setState({
            me: user
        });
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header id={this.state.user} />
                    <Content>
                        {this.state.me ? (
                            <>
                                <UsersList />
                                <RouletteCircle users={[]} />
                                <Chat />
                            </>
                        ) : (
                            <Login onLogin={this.onLoginHandler} />
                        )}
                    </Content>
                </div>
            </Provider>
        );
    }
}

export default App;
