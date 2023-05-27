import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageCategory } from './../../redux/actions/categoryAction';

function AllCategoryPageHook() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPageCategory(1))
    },[])

    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    const getDataViaPaginate = (num) => {
        dispatch(getPageCategory(num+1))
    }

    return [category,loading,getDataViaPaginate]
}

export default AllCategoryPageHook
//
