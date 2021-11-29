const SET_INITIALIZATION = "SET_INITIALIZATION";
const SET_LOADING = "SET_LOADING";

let initialState = {
    initialization: true,
    loading: false,
};

const loadingReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state, initialization: action.initialization
            }
        case SET_LOADING:
            return {
                ...state, loading: action.loading
            }
        default:
            return state;
    }
}

export const setInitialization = initialization => ({type: SET_INITIALIZATION, initialization});
export const setLoading = loading => ({type: SET_LOADING, loading});

export default loadingReducer;
