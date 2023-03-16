import React from 'react';
import Pill from '../Pill/Pill';
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';

function Card({ image, follows, description, likes, type, songsCount }) {
    return (
        <Tooltip title={`${songsCount} songs`} placement="top" arrow>
            <div
                className={styles['card-container']}
                style={{ maxWidth: '159px' }}
            >
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
        </Tooltip>
    );
}

export default Card;
