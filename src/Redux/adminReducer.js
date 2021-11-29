import {adminAPI, carouselAPI, productAPI} from "../api/api";
import {setProduct} from "./productPageReducer";
import {setCarousel} from "./homeReducer";

const SET_ERROR = "SET_ERROR";
const SET_MESSAGE_SUCCESS = "SET_MESSAGE_SUCCESS";
const SET_STATISTIC = "SET_STATISTIC";
const SET_TABLE = "SET_TABLE";

let initialState = {
    messageSuccess: '',
    error: '',
    statisticPie: [],
    statisticChartsFirst: [],
    statisticChartsSecond: [],
    table: []
};

const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ERROR:
            return {
                ...state, error: action.error
            }
        case SET_MESSAGE_SUCCESS:
            return {
                ...state, messageSuccess: action.messageSuccess
            }
        case SET_TABLE:
            return {
                ...state, table: action.table
            }
        case SET_STATISTIC:
            return {
                ...state,
                statisticPie: action.statisticPie,
                statisticChartsFirst: action.statisticChartsFirst,
                statisticChartsSecond: action.statisticChartsSecond
            }
        default:
            return state;
    }
}

export const setError = error => ({type: SET_ERROR, error});
export const setMessageSuccess = messageSuccess => ({type: SET_MESSAGE_SUCCESS, messageSuccess});
export const setTable = table => ({type: SET_TABLE, table});
export const setStatistic = (statisticPie, statisticChartsFirst, statisticChartsSecond) => (
    {type: SET_STATISTIC, statisticPie, statisticChartsFirst, statisticChartsSecond}
);

export const requestChangeSector = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.changeSectors(data);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
export const requestChangeCategory = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.changeCategory(data);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
export const requestCreateCategory = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.createCategory(data);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestDeleteCategory = (id) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.deleteCategory(id);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestCreateProduct = (id) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.createProduct(id);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestChangeProduct = (main) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.changeProductMain(main);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const deleteImageProduct = (name, id) => {
    return async (dispatch) => {
        try {
            await adminAPI.deleteImage(name);
            let product = await productAPI.getProduct(id);
            dispatch(setProduct(product.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const createImageProduct = (data, id) => {
    return async (dispatch) => {
        try {
            await adminAPI.createImage(data);
            let product = await productAPI.getProduct(id);
            dispatch(setProduct(product.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestDeleteProduct = (id) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.deleteProduct(id);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestCreateCarousel = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.createCarousel(data);
            dispatch(setMessageSuccess(message.data));
            let carousel = await carouselAPI.getCarouselItems();
            dispatch(setCarousel(carousel.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestDeleteCarousel = (id) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.deleteCarousel(id);
            dispatch(setMessageSuccess(message.data));
            let carousel = await carouselAPI.getCarouselItems();
            dispatch(setCarousel(carousel.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const requestChangeCarousel = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.changeCarousel(data);
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const createNewAdmin = (data) => {
    return async (dispatch) => {
        try {
            let message = await adminAPI.createAdmin(data);
            dispatch(setError(""))
            dispatch(setMessageSuccess(message.data));
        } catch (e) {
            dispatch(setError(e.response.data.message));
        }
    }
}
export const requestStatistic = (dataArr) => {
    return async (dispatch) => {
        try {
            const sectorArray = [1, 2];
            let statisticPie = [];
            let statisticChart = [];
            for (let sector of sectorArray) {
                let sectorStatisticPie = await adminAPI.getStatistic('?sectorId=' + sector);
                let arrMonthSector = []
                for (let date of dataArr) {
                    let monthSum = await adminAPI.getStatistic('?sectorId=' + sector + '&date=' + date);
                    arrMonthSector = [...arrMonthSector, {name: date, sum: monthSum.data}]
                }
                statisticChart = [...statisticChart, arrMonthSector.reverse()];
                statisticPie = [...statisticPie, sectorStatisticPie.data]
            }
            dispatch(setStatistic(statisticPie, statisticChart[0], statisticChart[1]));
        } catch (e) {
            dispatch(setError(e.response.data.message));
        }
    }
}
export const requestTable = () => {
    return async (dispatch) => {
        try {
            const sectorArray = [1, 2];
            let table = [];
            const sortByTotal = (arr) => {
                return arr.sort((a, b) => +a.total < +b.total ? 1 : -1);
            }
            for (let sector of sectorArray) {
                let request = await adminAPI.getTable('?sectorId=' + sector);
                table = [...table, sortByTotal(request.data)]
            }
            dispatch(setTable(table));
        } catch (e) {
            dispatch(setError(e.response.data.message));
        }
    }
}

export default adminReducer;
