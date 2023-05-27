import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPageProduct } from "../../redux/actions/productAction"

const viewProductAdminHook = () => {
   const dispatch = useDispatch()

   useEffect(()=>{
       dispatch(getPageProduct())
   },[])

   const products = useSelector(state => state.allProduct.allProduct)
   const loading = useSelector(state => state.allProduct.loading)

   const getDataViaPaginate = (num) => {
       dispatch(getPageProduct(num+1))
   }

   return [products,loading,getDataViaPaginate]
}

export default viewProductAdminHook
