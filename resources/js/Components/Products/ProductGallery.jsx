import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'

const ProductGallery = ({images}) => {
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">
            <ImageGallery
                className='w-100'
                items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
            />
        </div>
    )
}

export default ProductGallery
