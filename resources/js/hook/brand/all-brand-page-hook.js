import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPageBrand } from "../../redux/actions/brandAction"

function allBrandPageHook() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPageBrand(1))
    },[])

    // selector
    const brand = useSelector(state => state.allBrand.brand);
    const loading = useSelector(state => state.allBrand.loading);

    const getDataViaPaginate = (num) => {
        dispatch(getPageCategory(num+1))
    }

    // return []
    return [brand,loading,getDataViaPaginate]

}

export default allBrandPageHook

