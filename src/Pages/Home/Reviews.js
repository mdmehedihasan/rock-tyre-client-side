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
        <div id='reviews' className='mb-20 px-40'>
            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Reviews</h2>
            <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-2'>
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