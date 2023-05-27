import React from 'react'
import BrandCard from './BrandCard'
import { Container, Row, Spinner } from 'react-bootstrap';
const BrandContainer = ({data,loading}) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-center'>
            {
                !loading ? (

                    data ? (
                        data?.map((item) =>
                            <BrandCard key={item.id} img={`../../images/brand/${item.image}`}/>
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
    )
}

export default BrandContainer
