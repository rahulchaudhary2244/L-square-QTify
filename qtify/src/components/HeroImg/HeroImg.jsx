import React from 'react';
import styles from './HeroImg.module.css';

function HeroImg() {
    return (
        <div className={styles['container']}>
            <img
                src={require('../../assets/heroImg.png')}
                alt="hero-pic"
                loading="lazy"
                className={styles['hero-image']}
            />
        </div>
    );
}

export default HeroImg;
