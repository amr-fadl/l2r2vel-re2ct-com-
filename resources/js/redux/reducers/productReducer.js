import { CREATE_PRODUCT,UPDATE_PRODUCT,GET_ERROR,GET_ALL_PRODUCT,GET_ALL_PRODUCT_MORE_SALES,GET_ALL_PRODUCT_LATEST, GET_PRODUCT_DETALIS,PRODUCT_DELETE,GET_ALL_PRODUCT_LIKE } from "../type";

const initail = {
    product: [],
    allProduct: [],
    allProductMoreSales: [],
    allProductLatest: [],
    allProductLike: [],
    oneProduct: [],
    productDelete: [],
    productUpdate: [],
    loading: true
}

const productReducer = (state=initail,action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
                loading: false
            }
        case GET_ALL_PRODUCT_MORE_SALES:
            return {
                ...state,
                allProductMoreSales: action.payload,
                loading: false
            }
        case GET_ALL_PRODUCT_LATEST:
            return {
                ...state,
                allProductLatest: action.payload,
                loading: false
            }
        case GET_ALL_PRODUCT_LIKE:
            return {
                ...state,
                allProductLike: action.payload,
                loading: false
            }
        case GET_PRODUCT_DETALIS:
            return {
                oneProduct: action.payload,
                loading: false
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload,
                loading: false
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                productUpdate: action.payload,
                loading: false
            }
        case CREATE_PRODUCT:
            return {
                product: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                product: action.payload,
                loading: true
            }
        default:
            return state;
    }
}

export default productReducer

