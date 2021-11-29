import {OrderAPI, reviewAPI} from "../api/api";
import {setBasket} from "./basketReducer";

const SET_SUCCESS = "SET_SUCCESS";
const SET_ACTIVE_ORDERS = "SET_ACTIVE_ORDERS";
const SET_HISTORY_ORDERS = "SET_HISTORY_ORDERS";
const SET_HISTORY_ORDERS_ADMIN = "SET_HISTORY_ORDERS_ADMIN";
const SET_ACTIVE_ORDERS_ADMIN = "SET_ACTIVE_ORDERS_ADMIN";

let initialState = {
    messageSuccess: '',
    orders: [],
    checkReview:[],
    ordersHistory: [],
    ordersAdmin: [],
    ordersHistoryAdmin: [],
};

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUCCESS:
            return {
                ...state,
                messageSuccess: action.messageSuccess
            }
        case SET_ACTIVE_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        case SET_HISTORY_ORDERS:
            return {
                ...state,
                ordersHistory: action.orders,
                checkReview: action.checkReview
            }
        case SET_HISTORY_ORDERS_ADMIN:
            return {
                ...state,
                ordersHistoryAdmin: action.orders
            }
        case SET_ACTIVE_ORDERS_ADMIN:
            return {
                ...state,
                ordersAdmin: action.orders
            }
        default:
            return state;
    }
}
export const setSuccess = (messageSuccess) => ({type: SET_SUCCESS, messageSuccess});
export const setActiveOrders = (orders) => ({type: SET_ACTIVE_ORDERS, orders});
export const setHistoryOrders = (orders, checkReview) => ({type: SET_HISTORY_ORDERS, orders, checkReview});
export const setHistoryOrdersAdmin = (orders, checkReview) => ({type: SET_HISTORY_ORDERS_ADMIN, orders, checkReview});
export const setActiveOrdersAdmin = (orders) => ({type: SET_ACTIVE_ORDERS_ADMIN, orders});

export const addNewOrder = (address, name, phone, products, sum, count) => {
    return async (dispatch) => {
        const text = await OrderAPI.setNewOrder(address, name, phone, products, sum, count);
        dispatch(setSuccess(text.data));
        dispatch(setBasket([], 0, 0));
    }
}
export const requestActiveOrders = () => {
    return async (dispatch) => {
        const orders = await OrderAPI.getActive();
        dispatch(setActiveOrders(orders.data));
    }
}
export const requestHistoryOrders = () => {
    return async (dispatch) => {
        const orders = await OrderAPI.getHistory();
        let checkReview = [];
        for (let i of orders.data.reviews) {
            checkReview = [...checkReview, i.productId]
        }
        dispatch(setHistoryOrders(orders.data.products, checkReview));
    }
}
export const requestHistoryOrdersAdmin = (query) => {
    return async (dispatch) => {
        const orders = await OrderAPI.getHistoryAdmin(query);
        dispatch(setHistoryOrdersAdmin(orders.data));
    }
}
export const requestActiveOrdersAdmin = () => {
    return async (dispatch) => {
        const orders = await OrderAPI.getActiveAdmin();
        dispatch(setActiveOrdersAdmin(orders.data));
    }
}
export const deleteProductOrders = (productId, orderId) => {
    return async (dispatch) => {
            const orders = await OrderAPI.deleteProduct(productId, orderId);
            dispatch(setActiveOrdersAdmin(orders.data));
    }
}
export const deleteOrder = (orderId) => {
    return async (dispatch) => {
        const orders = await OrderAPI.deleteOrder(orderId);
        dispatch(setActiveOrdersAdmin(orders.data));
    }
}
export const confirmOrders = (id, products) => {
    return async (dispatch) => {
        const orders = await OrderAPI.setConfirm(id, products);
        dispatch(setActiveOrdersAdmin(orders.data));
    }
}
export const changeAmountProductAdmin = (id, amount) => {
    return async (dispatch) => {
        const orders = await OrderAPI.setAmount(id, amount);
        dispatch(setActiveOrdersAdmin(orders.data));
    }
}

export default orderReducer;
