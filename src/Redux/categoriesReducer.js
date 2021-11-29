const SET_CATEGORIES = "SET_CATEGORIES";


let initialState = {
    categories: [
        {
            id: 1,
            category: "shirts",
            name: "SHIRTS",
            image: "https://moiuniver.com/product_image_kit/spina/null/6/girl/back/color-1.jpg"
        },
        {
            id: 2,
            category: "pens",
            name: "PENS",
            image: "https://assets.reebok.com/images/w_600,f_auto,q_auto/5e6cbe2d70f94f86a3f6aae10077c62a_9366/Sportivnye_shtany_Training_Essentials_seryj_FK6653_01_standard.jpg"
        },
        {
            id: 3,
            category: "shoes",
            name: "SHOES",
            image: "https://img1.sumochka.ru/articles/49/5.jpg"
        }
    ]
};

const categoriesReduсer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state, categories: action.categories
            }
        default:
            return state;
    }
}

export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});

export default categoriesReduсer;
