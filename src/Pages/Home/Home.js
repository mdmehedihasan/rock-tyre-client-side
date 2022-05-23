import React from 'react';
import About from './About';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};

export default Home;