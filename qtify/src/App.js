import React from 'react';
import HeroImg from './components/HeroImg/HeroImg';
import HomePageSection from './components/HomePageSection/HomePageSection';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import Faqs from './components/Faqs/Faqs';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Navbar />
            <HeroImg />
            <HomePageSection />
            <Faqs />
        </StyledEngineProvider>
    );
}

export default App;
