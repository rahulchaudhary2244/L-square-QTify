import React from 'react';
import { useSwiper } from 'swiper/react';

function CarouselPreviousButton() {
    const swiper = useSwiper();

    return (
        <button
            className="button-transparent"
            style={{
                position: 'absolute',
                top: '30%',
                left: '0',
                zIndex: '10',
                transform: 'translateY(50%)',
            }}
            onClick={() => swiper.slidePrev()}
        >
            <img
                src={require('../../assets/carousel-previous.png')}
                alt="previous-button"
                height={32}
                width={32}
                loading="lazy"
            />
        </button>
    );
}

export default CarouselPreviousButton;
