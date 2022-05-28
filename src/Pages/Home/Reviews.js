import React, { useEffect, useState } from 'react';
import Review from '../Dashboard/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://protected-dawn-69909.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id='reviews' className='xl:px-40 lg:px-40 md:px-16 sm:px-10 xs:px-8 lg:py-20 py-10'>
            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Reviews</h2>
            <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;