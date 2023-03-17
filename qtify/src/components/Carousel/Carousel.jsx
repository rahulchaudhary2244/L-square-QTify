import React from 'react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import CarouselNextButton from './CarouselNextButton';
import CarouselPreviousButton from './CarouselPreviousButton';

function Carousel({ data, renderData }) {
    const swiper = useSwiper();

    return (
        <Swiper
            grabCursor
            spaceBetween={40}
            slidesPerView={'auto'}
            scrollbar={{ draggable: true }}
        >
            {<CarouselPreviousButton />}
            <CarouselNextButton />
            {data.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    {renderData(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;
