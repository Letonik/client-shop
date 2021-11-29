import {carouselAPI, navigationAPI} from "../api/api";
import {setLoading} from "./loadingReducer";

const SET_CAROUSEL = "SET_CAROUSEL";
const SET_HOME = "SET_HOME";

let initialState = {
    carousel: [],
    clothes: [],
    cosmetic: [],
};

const homeReduсer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CAROUSEL:
            return {
                ...state, carousel: action.carousel
            }
        case SET_HOME:
            return {
                ...state,
                carousel: action.carousel,
                clothes: action.clothes,
                cosmetic: action.cosmetic
            }
        default:
            return state;
    }
}

export const setCarousel = (carousel) => ({type: SET_CAROUSEL, carousel});
export const setHome = (carousel, clothes, cosmetic) => ({type: SET_HOME, carousel, clothes, cosmetic});
export const requestHome = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            let query = '?sort=createdAt&limit=6&sectorId=';
            let carousel = await carouselAPI.getCarouselItems();
            let clothes = await navigationAPI.getProducts(query+1);
            let cosmetic = await navigationAPI.getProducts(query+2);
            dispatch(setHome(carousel.data, clothes.data, cosmetic.data));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoading(false))
        }
    }
}
export const requestCarouselHome = () => {
    return async (dispatch) => {
        let carousel = await carouselAPI.getCarouselItems();
        dispatch(setCarousel(carousel.data));
    }
}

export default homeReduсer;
