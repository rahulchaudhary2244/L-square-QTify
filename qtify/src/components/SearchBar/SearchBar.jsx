import React from 'react';
import SearchIcon from '../../assets/searchIcon.svg';
import styles from './SearchBar.module.css';

function SearchBar({ placeholder = '' }) {
    return (
        <div className={styles['searchbar']}>
            <input
                className={styles['search-input']}
                placeholder={placeholder}
                type="search"
            />
            <button className={styles['search-button']}>
                <img src={SearchIcon} alt="search icon" />
            </button>
        </div>
    );
}

export default SearchBar;
