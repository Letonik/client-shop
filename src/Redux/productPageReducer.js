import {productAPI, reviewAPI} from "../api/api";

const SET_PRODUCT = "SET_PRODUCT";
const SET_PRODUCT_AND_CHECK = "SET_PRODUCT_AND_CHECK";

let initialState = {
    product: {},
    checkMessage: ''
};

const productPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state, product: action.product
            }
        case SET_PRODUCT_AND_CHECK:
            return {
                ...state,
                product: action.product,
                checkMessage: action.checkMessage
            }
        default:
            return state;
    }
}

export const setProduct = (product) => ({type: SET_PRODUCT, product});
export const setProductAndCheck = (product, checkMessage) => ({type: SET_PRODUCT_AND_CHECK, product, checkMessage});

export const requestProduct = (productId) => {
    return async (dispatch) => {
        let product = await productAPI.getProduct(productId);
        dispatch(setProduct(product.data));
    }
}
export const requestProductWithCheck = (productId) => {
    return async (dispatch) => {
        try {
            console.log()
            let product = await productAPI.getProduct(productId);
            if (localStorage.getItem('token')) {
                let checkMessage = await reviewAPI.checkReview(productId);
                dispatch(setProductAndCheck(product.data, checkMessage.data));
            } else {
                dispatch(setProduct(product.data));
            }
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}

export default productPageReducer;
