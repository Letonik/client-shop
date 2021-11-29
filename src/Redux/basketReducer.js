import {basketAPI} from "../api/api";

const SET_BASKET = "SET_BASKET";
const SET_MESSAGE_SUCCESS = "SET_MESSAGE_SUCCESS";

let initialState = {
    basket:[],
    count: 0,
    price: 0,
    messageSuccess: ''
};

const basketReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                basket: action.basket,
                count: action.count,
                price: action.price
            }
        case SET_MESSAGE_SUCCESS:
            return {
                ...state,
                messageSuccess: action.messageSuccess,
            }
        default:
            return state;
    }
}
export const setBasket = (basket, count, price) => ({type: SET_BASKET, basket, count, price});
export const setMessageSuccess = (messageSuccess) => ({type: SET_MESSAGE_SUCCESS, messageSuccess});

export const addBasket = (productId, sectorId, name, price, image, maxCount, size, amount) => {
    return async (dispatch) => {
        const text = await basketAPI.setToBasket(productId, sectorId, name, price, image, maxCount, size, amount);
        dispatch(setMessageSuccess(text.data));
    }
}
const countAndPrice = (basket) => {
    let count = 0;
    let price = 0;
    for (let i of basket.data) {
        count += i.amount;
        price += i.amount * i.price
    }
    return {price, count}
}
export const requestBasket = () => {
    return async (dispatch) => {
        let basket = await basketAPI.getBasket();
        const {price, count} = countAndPrice(basket)
        dispatch(setBasket(basket.data, count, price));
    }
}
export const changeAmountBasket = (productId, amount) => {
    return async (dispatch) => {
        let basket = await basketAPI.setAmount(productId, amount);
        const {price, count} = countAndPrice(basket)
        dispatch(setBasket(basket.data, count, price));
    }
}
export const deleteProduct = (productId) => {
    return async (dispatch) => {
        let basket = await basketAPI.deleteProduct(productId);
        const {price, count} = countAndPrice(basket)
        dispatch(setBasket(basket.data, count, price));
    }
}

export default basketReducer;
