import React from 'react';
import styles from '../Button/Button.module.css';

function Button({ btnText = '' }) {
    return <button className={styles['button-primary']}>{btnText}</button>;
}

export default Button;
