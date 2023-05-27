import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';

function homeBrandHook() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllBrand())
    },[])

    const brand = useSelector(state => state.allBrand.brand)
    const loading = useSelector(state => state.allBrand.loading)

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

    return [brand,loading,colors]
}

export default homeBrandHook
