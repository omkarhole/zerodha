import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
       
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>

                </>
     );
}

export default HomePage;