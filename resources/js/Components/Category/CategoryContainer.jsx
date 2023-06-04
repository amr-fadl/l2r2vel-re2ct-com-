import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({data,loading}) => {
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return (
        <Container >
            <Row className='my-2 d-flex justify-content-center position-relative'>
                <div className="admin-content-text mt-2 px-2">كل التصنيفات</div>
                {
                    !loading ? (

                        data.data && data?.data.length > 0 ? (
                            data?.data.map((item) =>
                                <CategoryCard
                                    key={item.id}
                                    title={item.name}
                                    img={item.image}
                                    background={colors[Math.floor(Math.random()*6)]}
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
    )
}

export default CategoryContainer
