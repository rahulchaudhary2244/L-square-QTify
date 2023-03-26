import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

function Navbar({ data }) {
    return (
        <div className={styles['navbar']}>
            <Logo />
            <SearchBar placeholder="Search a song of your choice" data={data} />
            <Button btnText="give feedback" />
        </div>
    );
}

export default Navbar;
