import React from 'react';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import HowToBook from '../components/HowToBook';
import Gallery from '../components/Gallery';
import Body from '../components/body';
import SketchDivider from '../components/SketchDivider';
import Testimonials from '../components/Testimonials';

function Home() {
    return (
        <>
            <Hero />
            <PopularDestinations />
            <HowToBook />
            <Gallery />
            <Body />
            <SketchDivider />
            <Testimonials />
        </>
    );
}

export default Home;
