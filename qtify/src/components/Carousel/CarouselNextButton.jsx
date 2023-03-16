import React from 'react';
import { useSwiper } from 'swiper/react';

function CarouselNextButton() {
    const swiper = useSwiper();

    return (
        <button
            className="button-transparent"
            style={{
                position: 'absolute',
                top: '30%',
                right: '0',
                zIndex: '10',
                transform: 'translateY(50%)',
            }}
            onClick={() => swiper.slideNext()}
        >
            <img
                src={require('../../assets/carousel-next.png')}
                alt="next-button"
                height={32}
                width={32}
                loading="lazy"
            />
        </button>
    );
}

export default CarouselNextButton;
