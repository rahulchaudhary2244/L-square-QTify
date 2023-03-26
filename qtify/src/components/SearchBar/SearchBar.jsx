import React from 'react';
import SearchIcon from '../../assets/searchIcon.svg';
import styles from './SearchBar.module.css';

import useAutocomplete from '@mui/base/useAutocomplete';

import { styled } from '@mui/system';

const Listbox = styled('ul')(({ theme }) => ({
    width: '100%',
    marginTop: 11,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: 'var(--color-black)',
    color: 'var(--color-white)',
    overflow: 'scroll',
    maxHeight: 300,
    border: '1px solid var(--color-primary)',
    borderTop: 0,
    borderRadius: '0px 0px 10px 10px',
    '& li.Mui-focused': {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        cursor: 'pointer',
    },
    '& li:active': {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
    },
}));

function SearchBar({ placeholder = '', data = [] }) {
    const handleSubmit = (e) => {
        const searchKey = '';
        const filteredData = data.filter(
            (song) =>
                song.title.toLowerCase().includes(searchKey) ||
                song.description.toLowerCase().includes(searchKey) ||
                song.slug.toLowerCase().includes(searchKey)
        );

        console.log(filteredData);
        e.preventDefault();
    };

    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: data,
        getOptionLabel: (option) => option.title,
    });

    return (
        <div style={{ position: 'relative' }}>
            <form
                className={styles['searchbar']}
                onSubmit={handleSubmit}
                {...getRootProps()}
            >
                <input
                    className={styles['search-input']}
                    placeholder={placeholder}
                    type="text"
                    {...getInputProps()}
                />
                <button className={styles['search-button']} type="submit">
                    <img src={SearchIcon} alt="search icon" />
                </button>
            </form>
            {groupedOptions.length > 0 ? (
                <Listbox
                    {...getListboxProps()}
                    className={`${styles['list-box']} hide-scrollbar`}
                >
                    {groupedOptions.map((option, index) => (
                        <li
                            key={option.id}
                            {...getOptionProps({ option, index })}
                            className={styles['list-item']}
                        >
                            <div className={styles['img-container']}>
                                <img
                                    src={option.image}
                                    alt="card pic"
                                    loading="eager"
                                    height={71}
                                    width={71}
                                />
                                <p className={styles['list-item-text']}>
                                    {option.title}
                                </p>
                            </div>
                            <p className={styles['list-item-text']}>
                                {`${option.follows} Follows`}
                            </p>
                        </li>
                    ))}
                </Listbox>
            ) : null}
        </div>
    );
}

export default SearchBar;
