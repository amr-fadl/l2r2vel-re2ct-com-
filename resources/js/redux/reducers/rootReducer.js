
import { combineReducers } from "redux"

import categoryReducer from './categoryReducer'
import brandReducer from "./brandReducer"
import productReducer from "./productReducer"

export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    allProduct: productReducer,
})
