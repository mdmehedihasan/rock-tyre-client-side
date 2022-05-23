import React from 'react';
import notFound from '../../assets/NotFound/notFoundTyre.jpg'
const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-slate-200 py-16 px-40'>
            <div><img className='img-fluid mask mask-parallelogram-4' src={notFound} alt="" /></div>
            <div>
                <h1 className='text-6xl font-extrabold text-center'>404 !</h1>
                <h3 className='text-red-500 text-center text-2xl font-bold py-6'>The Page Your Are Looking Invalid</h3>
                <p className='text-center'>The page you are looging is not valid.Please check your link again and enter the link. If you want to contact with us please go to our website and submit a contact form. We are waiting to hear you. Thank you.</p>
            </div>
        </div>
    );
};

export default NotFound;