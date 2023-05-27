import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsLike, getOneProduct } from "../../redux/actions/productAction"
import mobile from '../../images/mobile.png'

const viewProductDetalisHook = (id) => {
    const dispatch = useDispatch()

    // get my product
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[id])
    const product = useSelector(state => state.allProduct.oneProduct)

    // get my category
    useEffect(()=>{
        if (product.data) {
            dispatch(getAllProductsLike(product.data.category))
        }
    },[product])
    const productLike = useSelector(state => state.allProduct.allProductLike)

    // to view images gallery
    let images = [],
        category = []
    if (product.data){
        category = product.data.category_detalis
        images = JSON.parse(product.data.images).map(item => ({original: '../../images/product/'+`${item}`}))}
    else
        images = [{original:mobile}]

    return [product,images,category,productLike]
}

export default viewProductDetalisHook
