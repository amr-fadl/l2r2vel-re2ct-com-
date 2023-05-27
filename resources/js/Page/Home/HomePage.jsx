import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import viewHomeProductHook from './../../hook/product/view-home-product-hook';
const HomePage = () => {

    const [productsMoreSales,productsLatest] = viewHomeProductHook()

    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <Silder />
            <HomeCategory />
            <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" products={productsMoreSales}/>
            <DiscountSection />
            <CardProductsContainer title="الاحدث" btntitle="المزيد" pathText="/products" products={productsLatest}/>
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />
        </div>
    )
}

export default HomePage
