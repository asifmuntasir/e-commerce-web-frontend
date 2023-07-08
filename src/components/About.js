import React, { useContext } from 'react';
import { ContextApp } from '../context/ProductContext';
import HeroSection from './SubComponents/HeroSection';

const About = () => {

    const myContext = useContext(ContextApp);

    return (
        <>
            < HeroSection name={'dotSTORE Ecommerce'} />
        </>
    );
}

export default About;
