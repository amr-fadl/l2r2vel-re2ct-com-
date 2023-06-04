import { GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORY,GET_ONE_CATEGORY,CATEGORY_DELETE,GET_ALL_CATEGORY_PAGE } from "../type";
import useGetData from './../../hooks/useGetData';
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

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
            type: GET_ALL_CATEGORY_PAGE,
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
        const response = await useInsertDataWithImage('/api/category',formData)

        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading: true
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const updateCategory = (id,formData) => async (dispatch) => {
    try {
        const response = await useUpdateDataWithImage(`/api/category/${id}?_method=PUT`,formData)

        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading: true
        })

        return response;
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await useDeleteData(`/api/category/${id}`)
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}
//
