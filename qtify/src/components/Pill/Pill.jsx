import React from 'react';
import styles from './Pill.module.css';

function Pill({ text }) {
    return <p className={styles['container']}>{text || 'No text'}</p>;
}

export default Pill;
