import React from 'react'
import ProductCard from '../Products/ProductCard'

const HomeHeader = () => {
  return (
    <div>
        <SliderSwiber data={products.data} >
            <ProductCard />
        </SliderSwiber>
    </div>
  )
}

export default HomeHeader
