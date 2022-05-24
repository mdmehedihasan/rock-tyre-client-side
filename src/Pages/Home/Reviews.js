import React, { useEffect, useState } from 'react';
import Review from '../Dashboard/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='mb-20'>
            <div className='text-center text-xl uppercase'>
                <h3 className='font-bold text-primary'>Reviews</h3>
                <h2>What Our Customer Say</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-10'>
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