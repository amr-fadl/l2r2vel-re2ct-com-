import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderSwiber = ({children,data,settings}) => {

    // push module { Autoplay, Navigation,Pagination } include
    const modules = settings?.modules?.map(module => eval(module));

  return (
    <Swiper
        spaceBetween={settings?.spaceBetween??0} // default 0 spaceBetween
        slidesPerView={settings?.slidesPerView??1} // default 1 slidesPerView
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={settings?.modules?.includes('Navigation')} // true or fales
        modules={modules} // my modules include
    >
        {
            data && data.length > 0 && (
                data.map(item =>
                    <SwiperSlide key={item.id}>
                        {React.cloneElement(children,{data:item,key:item.id})}
                    </SwiperSlide>
                )
            )
        }
    </Swiper>
  )
}

export default SliderSwiber

