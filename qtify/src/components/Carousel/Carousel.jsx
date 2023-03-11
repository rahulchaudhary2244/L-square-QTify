import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Carousel({ data, renderData }) {
    return (
        <Swiper
            spaceBetween={18}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>{renderData(item)}</SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;
