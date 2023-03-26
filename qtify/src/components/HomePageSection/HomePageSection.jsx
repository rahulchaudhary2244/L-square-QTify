import React from 'react';
import { fetchGenres } from '../../api/api';
import Section from '../Section/Section';
import Faqs from '../Faqs/Faqs';
import styles from './HomePageSection.module.css';

function HomePageSection({ data }) {
    const { topSongs, newSongs, songs } = data;

    return (
        <div>
            <Section title={'top albums'} type="album" data={topSongs} />
            <Section
                style={{ marginTop: '32px' }}
                title={'new albums'}
                type="album"
                data={newSongs}
            />
            <hr />
            <Section
                title={'songs'}
                type="song"
                data={songs}
                filterSource={fetchGenres}
            />
            <hr />
            <Faqs />
            <hr className={styles['custom-hr']} />
        </div>
    );
}

export default HomePageSection;
