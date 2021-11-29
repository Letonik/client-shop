import {userAPI} from "../api/api";
import {setInitialization} from "./loadingReducer";

const SET_USER_TOKEN = "SET_USER_TOKEN";
const SET_ERROR = "SET_ERROR";
const SET_IS_AUTH = "SET_IS_AUTH";
const SET_USER_INFO = "SET_USER_INFO";
const SET_MESSAGE_SUCCESS_USER = "SET_MESSAGE_SUCCESS_USER";

let initialState = {
    error: '',
    userTokenData: {},
    isAuth: false,
    userInfo: {},
    messageSuccessUser: '',
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state, userTokenData: action.userTokenData
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
                error: ""
            }
        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.isAuth
            }
        case SET_ERROR:
            return {
                ...state, error: action.error
            }
        case SET_MESSAGE_SUCCESS_USER:
            return {
                ...state,
                messageSuccessUser: action.messageSuccessUser,
                error: ""
            }
        default:
            return state;
    }
}

export const setUserToken = userTokenData => ({type: SET_USER_TOKEN, userTokenData});
export const setUserInfo = userInfo => ({type: SET_USER_INFO, userInfo});
export const setError = error => ({type: SET_ERROR, error});
export const setMessageSuccessUser = messageSuccessUser => ({type: SET_MESSAGE_SUCCESS_USER, messageSuccessUser});
export const setIsAuth = isAuth => ({type: SET_IS_AUTH, isAuth});

export const registrationUser = (data) => {
    return async (dispatch) => {
        try {
            let message = await userAPI.registration(data);
            dispatch(setMessageSuccessUser(message.data));
        } catch (e) {
            dispatch(setError(e.response.data.message));
        }
    }
}
export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            let userToken = await userAPI.login(data);
            localStorage.setItem('token', userToken.data.accessToken);
            if (userToken.data.user.isActivated) {
                dispatch(setMessageSuccessUser('Добро пожаловать!'));
                dispatch(setUserToken(userToken.data.user));
                dispatch(setIsAuth(true));
            } else {
                dispatch(setMessageSuccessUser('Пожалуйста, подтвердите ваш email для активации аккаунта!'));
            }
        } catch (e) {
            dispatch(setError(e.response.data.message));
        }
    }
}

export const checkAuth = () => {
    return async (dispatch) => {
        try {
            let userToken = await userAPI.checkUser();
            localStorage.setItem('token', userToken.data.accessToken)
            dispatch(setUserToken(userToken.data.user));
            dispatch(setIsAuth(true));
        } catch (e) {
            console.log(e/*.response.data.message*/)
        } finally {
            dispatch(setInitialization(false))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            let userToken = await userAPI.logout();
            localStorage.removeItem('token')
            dispatch(setIsAuth(false));
            dispatch(setUserToken({}));
        } catch (e) {
            console.log(e)
        }
    }
}

export const requestUserInfo = () => {
    return async (dispatch) => {
        let userInfo = await userAPI.getInfo();
        dispatch(setUserInfo(userInfo.data));
    }
}

export const requestChangeUserInfo = (phone, address) => {
    return async (dispatch) => {
        let userInfo = await userAPI.changeInfo(phone, address);
        dispatch(setUserInfo(userInfo.data));
    }
}
export const requestChangePassword = (password, newPassword) => {
    return async (dispatch) => {
        try {
            let res = await userAPI.changePassword(password, newPassword);
            dispatch(setMessageSuccessUser(res.data));
            dispatch(setError(""))
        } catch (e) {
            dispatch(setError(e.response.data.message))
        }
    }
}


export default userReducer;
