export const getUserToken = (state) => {
    return state.user.userTokenData;
}
export const getIsAuth = (state) => {
    return state.user.isAuth;
}
export const getUserInfo = (state) => {
    return state.user.userInfo;
}
export const getError = (state) => {
    return state.user.error;
}
export const getMessageSuccessUser = (state) => {
    return state.user.messageSuccessUser;
}