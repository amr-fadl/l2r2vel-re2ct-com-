import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductSearch } from "../../redux/actions/productAction"

const viewSearchProductHook = () => {
   const dispatch = useDispatch()

    const getProduct = async () => {

        let word = '',
            catWord = '',
            brandWord = ''

        if(localStorage.getItem('searchWord'))
            word = localStorage.getItem('searchWord')

        if(localStorage.getItem('catChecked'))
            catWord = localStorage.getItem('catChecked')

        if(localStorage.getItem('brandChecked'))
            brandWord = localStorage.getItem('brandChecked')


        sortData()

        await dispatch(getProductSearch(`search=${word}&sort_data=${sort}&${catWord}&${brandWord}`))

    }

   useEffect(()=>{
        getProduct()
   },[])

   const products = useSelector(state => state.allProduct.allProduct)
   const loading = useSelector(state => state.allProduct.loading)

    const getDataViaPaginate = (num=1) => {
        let word = '' , catWord = ''
        if(localStorage.getItem('searchWord'))
            word = localStorage.getItem('searchWord')

        if(localStorage.getItem('catChecked'))
        catWord = localStorage.getItem('catChecked')

        if(localStorage.getItem('brandChecked'))
        catWord = localStorage.getItem('brandChecked')

       dispatch(getProductSearch(`search=${word}&page=${num+1}&${catWord}${brandWord}`))
    }


    let sort = ''
    const sortData = () => {
        if(localStorage.getItem('sortType'))
            sort = localStorage.getItem('sortType')
    }

   return [products,getProduct,loading,getDataViaPaginate]

}

export default viewSearchProductHook
