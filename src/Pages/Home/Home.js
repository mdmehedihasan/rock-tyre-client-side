import React from 'react';
import AddProduct from '../Dashboard/AddProduct';
import AddReview from '../Dashboard/AddReview';
import About from './About';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Reviews from './Reviews';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>

            <AddProduct></AddProduct>

        </div>
    );
};

export default Home;