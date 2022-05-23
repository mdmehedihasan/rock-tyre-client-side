import React from 'react';
import AddReview from '../Dashboard/AddReview';
import About from './About';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BusinessSummary></BusinessSummary>
            <AddReview></AddReview>

        </div>
    );
};

export default Home;