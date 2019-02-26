import {
    MESSAGES_NEW_MESSAGE,
    MESSAGES_NEW_MESSAGES_ALL
} from "../actions/messages_actions";

export default (state = [], action) => {
    switch (action.type) {
        case MESSAGES_NEW_MESSAGE:
            return [...state, action.payload];
        case MESSAGES_NEW_MESSAGES_ALL:
            return [...action.payload.messages];
        default:
            return state;
    }
};
