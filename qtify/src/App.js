import React from 'react';
import HeroImg from './components/HeroImg/HeroImg';
import HomePageSection from './components/HomePageSection/HomePageSection';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Navbar />
            <HeroImg />
            <HomePageSection />
        </StyledEngineProvider>
    );
}

export default App;
