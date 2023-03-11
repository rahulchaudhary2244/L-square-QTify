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
            <hr />
            <Section title={'new albums'} dataSource={fetchNewSongs} />
        </>
    );
}

export default App;
