import React from 'react';
import { fetchTopSongs, fetchNewSongs } from './api/api';
import HeroImg from './components/HeroImg/HeroImg';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
    return (
        <>
            <Navbar />
            <HeroImg />
            <Section title={'top albums'} dataSource={fetchTopSongs} />
            <Section
                style={{ marginTop: '32px' }}
                title={'new albums'}
                dataSource={fetchNewSongs}
            />
            <hr />
        </>
    );
}

export default App;
