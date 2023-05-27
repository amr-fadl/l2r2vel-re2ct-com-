import { GET_ALL_BRAND,GET_ERROR,CREATE_CATEGORY } from "../type";
import useGetData from './../../hooks/useGetData';
import { useInsertDataWithImage } from "../../hooks/useInsertData";

export const getAllBrand = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/brand`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getPageBrand = (page=1) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/brand?page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const createBrand = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage('/api/brand',formData)
        dispatch({
            type: GET_ALL_BRAND,
            payload: response.data,
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
