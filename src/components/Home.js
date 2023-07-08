import React from 'react';
import FeatureProducts from './SubComponents/FeatureProducts';
import HeroSection from './SubComponents/HeroSection';
import Services from './SubComponents/Services';
import Trusted from './SubComponents/Trusted';


const Home = () => {
    return (
        <>
            <HeroSection name={'dotSTORE'} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    );
}

export default Home;