export const MESSAGES_NEW_MESSAGE = "MESSAGES_NEW_MESSAGE";
export const MESSAGES_NEW_MESSAGES_ALL = "MESSAGES_NEW_MESSAGES_ALL";
export const MESSAGES_START_LOADING = "MESSAGE_START_LOADING";

export const createMessagesNewMessage = data => {
    return {
        type: MESSAGES_NEW_MESSAGE,
        payload: data // message
    };
};

export const createMessageNewMessagesAll = data => {
    return {
        type: MESSAGES_NEW_MESSAGES_ALL,
        payload: data // messages
    };
};

// ws.emit("GET_MESSAGE_ALL");
// ws.emit("POST_MESSAGE", {
//     message: this.state.message
// });

// TODO: Fake!
export const createMessagesGetAll = ws => {
    return dispatch => {
        ws.emit("GET_MESSAGE_ALL");
        dispatch({
            type: MESSAGES_START_LOADING
        });
    };
};

// TODO: Fake!
export const createMessagesPost = (ws, message) => {
    return dispatch => {
        ws.emit("POST_MESSAGE", { message });
        dispatch({
            type: MESSAGES_START_LOADING
        });
    };
};
