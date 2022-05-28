import React from 'react';

const BusinessSummary = () => {
    return (
        <div id='reviews' className='xl:px-40 lg:px-40 md:px-16 sm:px-10 xs:px-8 lg:py-20 py-10'>
            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Our Story</h2>
            <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>

            <div className='grid lg:grid-cols-4 grid-cols-2   gap-2'>

                <div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            <div class="stat-title text-black font-bold	">Total Likes</div>
                            <div class="stat-value text-amber-400">25.6K</div>
                            <div className="stat-desc text-xl">Likes On FB</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="stat flex flex-col">
                        <div
                            class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>


                            <div class="stat-title text-black font-bold	">Engineers</div>
                            <div class="stat-value text-amber-400 ">256+</div>
                            <div className="stat-desc text-xl">On Duty</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                            <div className="stat-title text-black font-bold	">Clients</div>
                            <div className="stat-value text-amber-400">100+</div>
                            <div className="stat-desc text-xl">Countries</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="stat flex flex-col">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

                            <div className="stat-title text-black font-bold	">Revenue</div>
                            <div className="stat-value text-amber-400">206M</div>
                            <div className="stat-desc text-xl">Every Year</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;