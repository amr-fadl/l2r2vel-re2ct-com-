import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageCategory } from './../../redux/actions/categoryAction';
import { useState } from 'react';

function AllCategoryPageHook() {

    // Page Number
    const [pageNum,setPageNum] = useState(1)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPageCategory(1))
    },[])

    const category = useSelector(state => state.allCategory.categoryPage)
    const loading = useSelector(state => state.allCategory.loading)

    const getDataViaPaginate = (num) => {
        setPageNum(num+1)
        dispatch(getPageCategory(num+1))
    }

    return [category,loading,getDataViaPaginate,pageNum]
}

export default AllCategoryPageHook
//
