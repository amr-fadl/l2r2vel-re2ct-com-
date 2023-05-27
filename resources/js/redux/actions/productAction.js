import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import { CREATE_PRODUCT,UPDATE_PRODUCT,PRODUCT_DELETE,GET_ERROR,GET_PRODUCT_DETALIS,GET_ALL_PRODUCT,GET_ALL_PRODUCT_MORE_SALES,GET_ALL_PRODUCT_LATEST,GET_ALL_PRODUCT_LIKE } from "../type";
import useDeleteData from './../../hooks/useDeleteData';

export const getAllProductMoreSales = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product/more-sales`)
        dispatch({
            type: GET_ALL_PRODUCT_MORE_SALES,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getAllProductsLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product?category=${id}`)
        dispatch({
            type: GET_ALL_PRODUCT_LIKE,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getAllProductLatest = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product/latest`)
        dispatch({
            type: GET_ALL_PRODUCT_LATEST,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getAllProduct = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getProductSearch = (queryString=false) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product/search?${queryString}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product/${id}`)
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const getPageProduct = (page=1) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/product?page=${page}`)

        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}

export const createProduct = (formData) => async (dispatch) =>  {
  try {
    const response = await useInsertDataWithImage(`/api/product`,formData)
    dispatch({
        type: CREATE_PRODUCT,
        payload: response.data,
        loading: true
    })

  } catch (error) {
    dispatch({
        type: GET_ERROR,
        payload: error
    })
  }
}

export const updateProduct = (id,formData) => async (dispatch) =>  {
  try {
      const response = await useUpdateDataWithImage(`/api/product/${id}?_method=PUT`,formData)
      dispatch({
          type: UPDATE_PRODUCT,
          payload: response.data,
          loading: true
        })
        return response
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
        return error
  }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {

        const response = await useDeleteData(`/api/product/${id}`)

        dispatch({
            type: PRODUCT_DELETE,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }
}
