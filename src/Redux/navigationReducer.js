import {navigationAPI} from "../api/api";


const SET_SECTORS = "SET_SECTORS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_BRANDS = "SET_BRANDS";


let initialState = {
    sectors: [],
    categories: [],
    products: [],
    brands: []
};

const navigationReduсer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SECTORS:
            return {
                ...state, sectors: action.sectors
            }
        case SET_CATEGORIES:
            return {
                ...state, categories: action.categories
            }
        case SET_PRODUCTS:
            return {
                ...state, products: action.products
            }
        case SET_BRANDS:
            return {
                ...state, brands: action.brands
            }
        default:
            return state;
    }
}

export const setSectors = (sectors) => ({type: SET_SECTORS, sectors});
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});
export const setProducts = (products) => ({type: SET_PRODUCTS, products});
export const setBrands = (brands) => ({type: SET_BRANDS, brands});

export const requestSectors = () => {
    return async (dispatch) => {
        let sector = await navigationAPI.getSectors();
        dispatch(setSectors(sector.data));
    }
}
export const requestCategories = (sectorId) => {
    return async (dispatch) => {
        let categories = await navigationAPI.getCategories(sectorId);
        dispatch(setCategories(categories.data));
    }
}
export const requestProducts = (query) => {
    return async (dispatch) => {
        let products = await navigationAPI.getProducts(query);
        dispatch(setProducts(products.data));
    }
}
export const requestBrands = (query) => {
    return async (dispatch) => {
        let products = await navigationAPI.getBrands(query);
        let brands = []
        for (let product of products.data) {
            brands = [...brands, {value: product.brand, name: product.brand}];
        }
        dispatch(setBrands(brands));
    }
}
export default navigationReduсer;
