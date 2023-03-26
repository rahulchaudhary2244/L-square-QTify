import React, { useState } from 'react';
import HeroImg from './components/HeroImg/HeroImg';
import HomePageSection from './components/HomePageSection/HomePageSection';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import { fetchNewSongs, fetchSongs, fetchTopSongs } from './api/api';

function App() {
    const [data, setData] = useState({});

    const generateData = (key, dataSource) => {
        dataSource().then((response) => {
            setData((prevState) => {
                return { ...prevState, [key]: response };
            });
        });
    };

    useState(() => {
        generateData('topSongs', fetchTopSongs);
        generateData('newSongs', fetchNewSongs);
        generateData('songs', fetchSongs);
    }, []);

    const { songs = [], topSongs = [], newSongs = [] } = data;

    return (
        <StyledEngineProvider injectFirst>
            <Navbar data={topSongs.concat(newSongs)} />
            <HeroImg />
            <HomePageSection data={{ songs, newSongs, topSongs }} />
        </StyledEngineProvider>
    );
}

export default App;
