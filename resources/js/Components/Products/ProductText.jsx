import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = ({product,category}) => {
    return (
    <div>
        <Row className="mt-2">
            <div className="cat-text">
                {category?.name}
            </div>
        </Row>
        <Row>
            <Col md="8">
            <div className="cat-title d-inline">
                {product.length != 0 ?
                    <>
                        <div className="cat-rate d-inline mx-3">{product.data.ratings_qty}</div>
                        {product.data.name}
                    </>
                : null}
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-4">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
                {product.length != 0 && product.data.brand_detalis.name}
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-1 d-flex">
                {product.length != 0 && product.data.colors != 'null' ? JSON.parse(product.data.colors).map(item =>
                    <div
                        key={Math.random(Math.round(100))}
                        className="color ms-2 border"
                        style={{ backgroundColor: item }}
                    ></div>
                ) : null}
            </Col>
        </Row>
        <Row className="mt-4">
            <div className="cat-text">المواصفات :</div>
        </Row>
        <Row className="mt-2">
            <Col md="10">
            <div className="product-description d-inline">
                {product&&product.length != 0 && product.data.desc}
            </div>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12">
            <div className="product-price d-inline px-3 py-3 border">{product.length != 0 && product.data.price} جنية</div>
            <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
            </Col>
        </Row>
    </div>
    )
}

export default ProductText
