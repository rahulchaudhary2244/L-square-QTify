import React from 'react';
import Pill from '../Pill/Pill';
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';

function Card({ image, tooltip, description, reviews, type }) {
    if (type === 'album')
        return (
            <Tooltip title={`${tooltip} songs`} placement="top" arrow>
                {cardElement()}
            </Tooltip>
        );

    return <div>{cardElement()}</div>;

    function cardElement() {
        return (
            <div
                className={styles['card-container']}
                style={{ minWidth: '159px', maxWidth: '159px' }}
            >
                <img
                    src={image || require('../../assets/cardImage.png')}
                    alt=""
                    loading="lazy"
                    height={170}
                />
                <div className={styles['pill-container']}>
                    <Pill text={`${reviews || '100M'}`} />
                </div>
                <p className={styles['limit-text']}>
                    {description || 'New Bollywood'}
                </p>
            </div>
        );
    }
}

export default Card;
