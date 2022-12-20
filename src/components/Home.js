import React from 'react';
import HeroSection from './SubComponents/HeroSection';
import Services from './SubComponents/Services';
import Trusted from './SubComponents/Trusted';


const Home = () => {
    return (
        <>
            <HeroSection name={'Googly Store'} />
            <Services />
            <Trusted />
        </>
    );
}

export default Home;