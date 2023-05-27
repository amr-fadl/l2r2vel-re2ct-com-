import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = ({product,images,category}) => {

    return (
        <div>
            <Row className='py-3'>
                <Col lg="4">
                    <ProductGallery images={images}/>
                </Col>

                <Col lg="8">
                    <ProductText product={product} category={category}/>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetalis
