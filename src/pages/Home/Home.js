import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Factory from './Factory';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Factory></Factory>
        </main>
    );
};

export default Home;