import { GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORY,GET_ONE_CATEGORY } from "../type";
import useGetData from './../../hooks/useGetData';
import { useInsertDataWithImage } from "../../hooks/useInsertData";

export const getAllCategory = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/category`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getOneCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/category/${id}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getPageCategory = (page=1) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/category?page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage('/api/category',formData)

        dispatch({
            type: CREATE_CATEGORY,
            payload: res,
            loading: true
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}
//
