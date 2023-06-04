import React from 'react'
import AllCategoryPageHook from '../../../hook/category/all-category-page-hook';
import { Container, Row, Spinner } from 'react-bootstrap';
import AdminCard from '../Utility/AdminCard';
import Pagination from '../../Uitily/Pagination';

const AdminAllCategory = () => {
    
    const [category,loading,getDataViaPaginate,pageNum] = AllCategoryPageHook();

    return (
        <div style={{minHeight:'670px'}}>

            <Container >
                <Row className='my-2 d-flex justify-content-center position-relative'>
                    <div className="admin-content-text mt-2 px-2">كل التصنيفات</div>
                    {
                        !loading ? (

                            category?.data?.data && category?.data?.data?.length > 0 ? (
                                category.data.data?.map((item) =>
                                    <AdminCard
                                        key={item.id}
                                        data={item}
                                        path={'editcategory/'+item.id}
                                        pageNum={pageNum}
                                    />
                                )
                            ) : <h4>لا يوجد تصنيفات</h4>

                        ) : (

                            <div className='d-flex loading_spinner'>
                                <Spinner animation="border" variant="secondary" />
                                <h4 className='mx-3'>جاري التحميل</h4>
                            </div>

                        )
                    }
                </Row>
            </Container>

            <Pagination pageCount={category?.data?.last_page} onPress={getDataViaPaginate}/>


        </div>
    )
}

export default AdminAllCategory
