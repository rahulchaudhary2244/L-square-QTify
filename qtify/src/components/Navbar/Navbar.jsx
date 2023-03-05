import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <div className={styles['navbar']}>
                <Logo />
                <SearchBar />
                <Button btnText="give feedback" />
            </div>
        </>
    );
}

export default Navbar;
