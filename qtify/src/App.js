import React from 'react';
import { fetchTopSongs } from './api/api';
import Card from './components/Card/Card';
import HeroImg from './components/HeroImg/HeroImg';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
    return (
        <>
            <Navbar />
            <HeroImg />
            <Section title={'top albums'} dataSource={fetchTopSongs} />
        </>
    );
}

export default App;
