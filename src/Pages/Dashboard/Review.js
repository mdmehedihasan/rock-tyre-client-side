import React from 'react';


const Review = ({ review }) => {
    const { name, description, rating } = review;


    return (
        <div className='px-6'>
            <div className=" p-4 card lg:max-w-lg bg-slate-100 shadow-xl ">
                <p className='text-justify'>{description}</p>
                <p className='text-xl text-amber-500 text-center '>{name}</p>
                <h2 className="text-center font-bold text-xl">{rating}</h2>
                <div className="card-body items-center text-center">



                </div>
            </div>
        </div>
    );
};

export default Review;