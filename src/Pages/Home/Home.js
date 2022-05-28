import React from 'react';
import About from './About';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Clients from './Clients';
import Products from './Products';
import Reviews from './Reviews';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Clients></Clients>

        </div>
    );
};

export default Home;