import React from 'react';
import Banner from './Banner';
import Factory from './Factory';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <Factory></Factory>
        </main>
    );
};

export default Home;