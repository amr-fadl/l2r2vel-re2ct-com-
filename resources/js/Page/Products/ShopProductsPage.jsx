import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import viewSearchProductHook from './../../hook/product/view-search-product-hook';
import CardProductsContainerShop from './../../Components/Products/CardProductsContainerShop';

const ShopProductsPage = () => {

    const [products,getProduct,loading,getDataViaPaginate] = viewSearchProductHook()

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title={`${products?.data?.total??0} نتجية بحث`} getProduct={getProduct}/>
                <Row className='d-flex flex-row'>
                    <Col sm='3' md='2' xl='1' className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm='9' md='10' xl='11'>
                        <CardProductsContainerShop title='' btntitle='' pathText='' products={products?.data?.data}/>
                    </Col>
                </Row>
                <Pagination pageCount={products?.data?.last_page} onPress={getDataViaPaginate} />
            </Container>
        </div>
    )
}

export default ShopProductsPage
