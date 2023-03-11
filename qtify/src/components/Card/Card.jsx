import React from 'react';
import Pill from '../Pill/Pill';
import styles from './Card.module.css';

function Card({ image, follows, description, likes, type }) {
    return (
        <div className={styles['card-container']} style={{ maxWidth: '159px' }}>
            <img
                src={image || require('../../assets/cardImage.png')}
                alt=""
                loading="lazy"
                height={170}
            />
            <div className={styles['pill-container']}>
                {type === 'album' ? (
                    <Pill text={`${follows || '100M'} follows`} />
                ) : (
                    <Pill text={`${likes || '100'} Likes`} />
                )}
            </div>
            <p className={styles['limit-text']}>
                {description || 'New Bollywood'}
            </p>
        </div>
    );
}

export default Card;
