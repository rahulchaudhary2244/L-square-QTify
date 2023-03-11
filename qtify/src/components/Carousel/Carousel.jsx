import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselNextButton from './CarouselNextButton';
import CarouselPreviousButton from './CarouselPreviousButton';

function Carousel({ data, renderData }) {
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    return (
        <Swiper
            spaceBetween={18}
            slidesPerView={'auto'}
            scrollbar={{ draggable: true }}
            onReachBeginning={() => {
                setShowPreviousButton(false);
                setShowNextButton(true);
            }}
            onReachEnd={() => {
                setShowPreviousButton(true);
                setShowNextButton(false);
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    {renderData(item)}
                </SwiperSlide>
            ))}
            {showNextButton && <CarouselNextButton />}
            {showPreviousButton && <CarouselPreviousButton />}
        </Swiper>
    );
}

export default Carousel;
