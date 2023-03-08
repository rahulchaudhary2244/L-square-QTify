import React from 'react';
import Pill from '../Pill/Pill';
import styles from './Card.module.css';

function Card({ imageUrl, pillText, subtext }) {
    return (
        <div className={styles['card-container']} style={{ maxWidth: '159px' }}>
            <img
                src={imageUrl || require('../../assets/cardImage.png')}
                alt=""
                height={170}
            />
            <div className={styles['pill-container']}>
                <Pill text={pillText || '100M Follows'} />
            </div>
            <p>{subtext || 'New Bollywood'}</p>
        </div>
    );
}

export default Card;
