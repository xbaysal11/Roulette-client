import { USERS_UPDATE_LIST } from "../actions/users_actions";

export default (state = [], action) => {
    switch (action.type) {
        case USERS_UPDATE_LIST:
            return [...action.payload];
        default:
            return state;
    }
};
