import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductLatest, getAllProductMoreSales } from "../../redux/actions/productAction"

const viewHomeProductHook = () => {
   const dispatch = useDispatch()

   useEffect(()=>{
       dispatch(getAllProductMoreSales())
       dispatch(getAllProductLatest())
   },[])

   const productsMoreSales = useSelector(state => state.allProduct.allProductMoreSales)
   const productsLatest = useSelector(state => state.allProduct.allProductLatest)

   return [productsMoreSales,productsLatest]
}

export default viewHomeProductHook
