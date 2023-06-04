import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/sidebar/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import viewProductAdminHook from '../../hook/admin/view-product-admin-hook'
const AdminAllProductsPage = () => {

    const [product,loading,getDataViaPaginate] = viewProductAdminHook()

    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>
                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts product={product} loading={loading} />
                    <Pagination pageCount={product?.data?.last_page} onPress={getDataViaPaginate} />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
