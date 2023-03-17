import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Filters.module.css';

function Filters({ filters, handleChange, activeFilter }) {
    return (
        <div className={styles['filter-container']}>
            <Tabs
                variant="scrollable"
                scrollButtons="auto"
                value={activeFilter}
                onChange={handleChange}
                aria-label="music filter selection"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-primary)',
                        height: '4px',
                        borderRadius: '2px',
                    },
                }}
            >
                {filters.map((item) => (
                    <Tab
                        key={item.key}
                        value={item.key}
                        label={item.label}
                        className={styles['custom-tabs']}
                    />
                ))}
            </Tabs>
        </div>
    );
}

export default Filters;
