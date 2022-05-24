
import React from 'react';
import banner1 from '../../assets/Banner/banner-1.jpg'
import banner2 from '../../assets/Banner/banner-2.jpg'
import banner3 from '../../assets/Banner/banner-3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide2" style={{ background: `url(${banner1})`, backgroundSize: 'cover' }} className="carousel-item relative w-full ">

                    <div className=" hero-overlay bg-opacity-0 text-center xl:mt-80 lg:mt-48 md:mt-16 sm:mt-6 text-white">

                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide3" style={{ background: `url(${banner2})`, backgroundSize: 'cover' }} className="carousel-item relative w-full">

                    <div className=" hero-overlay bg-opacity-0 text-center xl:mt-80 lg:mt-48 md:mt-16 sm:mt-6 text-white">

                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" style={{ background: `url(${banner3})`, backgroundSize: 'cover' }} className="carousel-item relative w-full xl:pb-96 lg:pb-40 md:pb-16 sm:pb-6">

                    <div className=" hero-overlay bg-opacity-0 text-center xl:mt-80 lg:mt-48 md:mt-16 sm:mt-6 text-white">

                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;