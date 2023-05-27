import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import homeCategoryHook from '../../hook/category/home-category-hook';

const HomeCategory = () => {

    const [category,loading,colors] = homeCategoryHook()

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    !loading ? (

                        category.data && category.data.length > 0 ? (
                            category?.data?.slice(0,6).map((item , index) => <CategoryCard key={item.id} title={item.name} img={item.image} background={colors[index]} />)
                        ) : <h4>لا يوجد تصنيفات</h4>

                    ) : (

                        <div className='d-flex'>
                            <Spinner animation="border" variant="secondary" />
                            <h4 className='mx-3'>جاري التحميل</h4>
                        </div>

                    )
                }
            </Row>
        </Container>
    )
}

export default HomeCategory
