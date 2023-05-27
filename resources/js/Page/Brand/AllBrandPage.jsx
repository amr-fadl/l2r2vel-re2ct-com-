import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import allBrandPageHook from '../../hook/brand/all-brand-page-hook'
const AllBrand = () => {

    const [brand,loading,getDataViaPaginate] = allBrandPageHook()

    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer data={brand.data} loading={loading}/>
            <Pagination pageCount={brand.data?.last_page} onPress={getDataViaPaginate} />
        </div>
    )
}

export default AllBrand
