import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import homeBrandHook from '../../hook/brand/home-brand-hook';

const BrandFeatured = ({ title, btntitle }) => {

    const [brand,loading,colors] = homeBrandHook()

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {
                    !loading ? (

                        brand?.data ? (
                            brand.data?.slice(0,6).map((item , index) => <BrandCard key={item.id} title={item.name} img={item.image} background={colors[index]} />)
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

export default BrandFeatured
