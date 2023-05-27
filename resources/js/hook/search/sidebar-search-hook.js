import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageCategory } from '../../redux/actions/categoryAction'
import { getPageBrand } from '../../redux/actions/brandAction'
import { useState } from 'react'
import viewSearchProductHook from '../product/view-search-product-hook'

const sidebarSearchHook = () => {

   const [products,getProduct,loading,getDataViaPaginate] = viewSearchProductHook()

    const dispatch = useDispatch()

    useEffect(()=>{
        (async () => {
           await dispatch(getPageCategory(1))
            dispatch(getPageBrand(1))
        })()
    },[])

    const allCat = useSelector(state => state.allCategory.category)
    const allBrand = useSelector(state => state.allBrand.brand);

    let category = []
    // to get category
    if (allCat.data)
        category = allCat.data

    let brand = []
    // to get brand
    if (allBrand.data)
        brand = allBrand.data


    // filter category
    const [catChecked,setCatChecked] = useState([])
    const clickCategory = (e) => {
        let val = e.target.value;
        if (val === "0") {
            setCatChecked([]);
            event.target.checked && document.querySelectorAll('.category-checkbox').forEach(item => item.checked = false);
        } else {
            if (event.target.checked) {
                document.querySelector('.category-all').checked = false
            }
            if (e.target.checked === true) {
                setCatChecked([...catChecked, val]);
            } else {
                setCatChecked(catChecked.filter(item => item!== val));
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('catChecked',catChecked.map(item => 'categories[]='+item).join('&'))
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [catChecked])


    // filter brand
    const [brandChecked,setbrandChecked] = useState([])
    const clickBrand = (e) => {
        let val = e.target.value;
        if (val === "0") {
            setbrandChecked([]);
            event.target.checked && document.querySelectorAll('.brand-checkbox').forEach(item => item.checked = false);
        } else {
            if (event.target.checked) {
                document.querySelector('.brand-all').checked = false
            }
            if (e.target.checked === true) {
                setbrandChecked([...brandChecked, val]);
            } else {
                setbrandChecked(brandChecked.filter(item => item!== val));
            }
        }
    }


    useEffect(() => {
        localStorage.setItem('brandChecked',brandChecked.map(item => 'brands[]='+item).join('&'))
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [brandChecked])




    return [category,brand,clickCategory,clickBrand]

}

export default sidebarSearchHook
