import React from 'react';
import img1 from '../../assets/partner/img1.png';
import img2 from '../../assets/partner/img2.png';
import img3 from '../../assets/partner/img3.png';
import img4 from '../../assets/partner/img4.png';
import img5 from '../../assets/partner/img5.png';
import img6 from '../../assets/partner/img6.png';
import img7 from '../../assets/partner/img7.png';
import img8 from '../../assets/partner/img8.png';

const Clients = () => {
    return (
        <div className='px-40 my-6'>
            <div>
                <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Our Clients</h2>
                <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>
            </div>
            <div className="carousel carousel-end rounded-box  grid lg:grid-cols-8 sm:grid-cols-4 xs:grid-cols-2">
                <div class="carousel-item">
                    <img src={img1} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img2} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img3} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img4} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img5} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img6} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img7} alt="Parner" />
                </div>
                <div class="carousel-item">
                    <img src={img8} alt="Parner" />
                </div>

            </div>
        </div>
    );
};

export default Clients;