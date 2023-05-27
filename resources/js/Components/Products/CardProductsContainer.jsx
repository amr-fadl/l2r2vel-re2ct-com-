import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'
import SliderSwiber from './../Home/SliderSwiber';

const CardProductsContainer = ({title ,btntitle,pathText,products}) => {

    const settings = {
        slidesPerView: 5,
        spaceBetween: 10,
        modules: [
            'Autoplay',
            'Navigation',
        ]
    }

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
                <SliderSwiber data={products?.data} settings={settings}>
                    <ProductCard />
                </SliderSwiber>
            </Row>
        </Container>
    )
}

export default CardProductsContainer
