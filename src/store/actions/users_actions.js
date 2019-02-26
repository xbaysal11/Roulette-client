export const USERS_UPDATE_LIST = "UPDATE_USERS_LIST";

export const createUpdateUserList = users => ({
    type: USERS_UPDATE_LIST,
    payload: users
});
