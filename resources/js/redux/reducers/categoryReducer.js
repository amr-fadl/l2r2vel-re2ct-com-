import {CREATE_CATEGORY, GET_ALL_CATEGORY,GET_ONE_CATEGORY,CATEGORY_DELETE,
         GET_ERROR,GET_ALL_CATEGORY_PAGE} from '../type'

const initail = {
    category: [],
    oneCategory: [],
    categoryPage: [],
    categoryCreate: [],
    deleteCategory: [],
    loading: true
}

const categoryReducer = (state=initail ,action) => {
    switch(action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case GET_ALL_CATEGORY_PAGE:
            return {
                ...state,
                categoryPage: action.payload,
                loading: false
            }
        case CREATE_CATEGORY:
            return {
                categoryCreate: action.payload,
                loading: false
            }
        case GET_ONE_CATEGORY:
            return {
                oneCategory: action.payload,
                loading: false
            }
        case CATEGORY_DELETE:
            return {
                deleteCategory: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                category: action.payload,
                loading: true
            }
        default:
            return state;
    }
}

export default categoryReducer;
