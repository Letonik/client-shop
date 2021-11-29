import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import categoriesReducer from "./categoriesReducer";
import productPageReducer from "./productPageReducer";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./homeReducer";
import navigationReducer from "./navigationReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import basketReducer from "./basketReducer";
import orderReducer from "./orderReducer";
import reviewReducer from "./reviewReducer";
import adminReducer from "./adminReducer";

let reducers = combineReducers({
    categoriesPage: categoriesReducer,
    productPage: productPageReducer,
    homePage: homeReducer,
    navigation: navigationReducer,
    user: userReducer,
    loading: loadingReducer,
    basketPage: basketReducer,
    orderPage: orderReducer,
    review: reviewReducer,
    adminSetting: adminReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
