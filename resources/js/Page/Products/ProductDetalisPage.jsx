import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import { useParams } from 'react-router-dom'
import viewProductDetalisHook from '../../hook/product/view-product-detalis-hook'

const ProductDetalisPage = () => {

    const {id} = useParams()
    const [product,images,category,productLike] = viewProductDetalisHook(id);

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis product={product} category={category} images={images}/>
                <RateContainer />
                <CardProductsContainer title="منتجات قد تعجبك" btntitle="المزيد" pathText="/products" products={productLike} />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
