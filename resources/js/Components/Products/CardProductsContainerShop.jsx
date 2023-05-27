import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainerShop = ({title ,btntitle,pathText,products}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex'>
                {products && products.length > 0 ?
                        products.map(item => <ProductCard key={item.id} data={item} grid='col-md-6 col-lg-4 col-xl-3'/>)
                : null}
            </Row>
        </Container>
    )
}

export default CardProductsContainerShop
