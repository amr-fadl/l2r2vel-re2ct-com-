import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({product,loading}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                {
                    product && product.data && product.data.data.map(item => <AdminAllProductsCard key={item.id} product={item}/>)
                }
            </Row>

        </div>
    )
}

export default AdminAllProducts
