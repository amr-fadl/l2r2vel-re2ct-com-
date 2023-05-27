import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllCategoryPageHook from '../../hook/category/all-category-page-hook'

const AllCategoryPage = () => {

    const [category,loading,getDataViaPaginate] = AllCategoryPageHook();
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer data={category.data} loading={loading}/>
            <Pagination pageCount={category.data?.last_page} onPress={getDataViaPaginate}/>
        </div>
    )
}

export default AllCategoryPage
