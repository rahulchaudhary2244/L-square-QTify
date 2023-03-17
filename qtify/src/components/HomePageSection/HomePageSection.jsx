import React from 'react';
import {
    fetchGenres,
    fetchNewSongs,
    fetchSongs,
    fetchTopSongs,
} from '../../api/api';
import Section from '../Section/Section';

function HomePageSection() {
    return (
        <div>
            <Section
                title={'top albums'}
                type="album"
                dataSource={fetchTopSongs}
            />
            <Section
                style={{ marginTop: '32px' }}
                title={'new albums'}
                type="album"
                dataSource={fetchNewSongs}
            />
            <hr />
            <Section
                title={'songs'}
                type="song"
                dataSource={fetchSongs}
                filterSource={fetchGenres}
            />
            <hr />
        </div>
    );
}

export default HomePageSection;
