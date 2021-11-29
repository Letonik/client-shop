import {reviewAPI} from "../api/api";

const SET_SUCCESS = "SET_SUCCESS";

let initialState = {
    messageSuccess: '',
    review: [],
};

const reviewReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUCCESS:
            return {
                ...state,
                messageSuccess: action.messageSuccess
            }
        default:
            return state;
    }
}
export const setSuccess = (messageSuccess) => ({type: SET_SUCCESS, messageSuccess});

export const addNewReview = (text, productId) => {
    return async (dispatch) => {
        try {
            const message = await reviewAPI.setReview(text, productId);
            dispatch(setSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}

export const changeReview = (text, productId) => {
    return async (dispatch) => {
        try {
            const message = await reviewAPI.changeReview(text, productId);
            dispatch(setSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}


export default reviewReducer;
