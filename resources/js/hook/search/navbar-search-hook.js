import { useState } from 'react'
import { useEffect } from 'react';
import viewSearchProductHook from '../product/view-search-product-hook';

const NavbarSearchHook = () => {

    const [products,getProduct] = viewSearchProductHook()

    const [searchWord,setSearchWord] = useState('')

    const onChangeSearch = (e) => {
        localStorage.setItem('searchWord',e.target.value)
        setSearchWord(e.target.value)
    }

    useEffect(() => {
        setTimeout(()=> {
            getProduct()
        },1000)
    }, [searchWord])


    return [onChangeSearch,searchWord]
}

export default NavbarSearchHook
