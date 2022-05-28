import React from 'react';
import profile from '../../assets/Banner/profile-1.png'
const Portfolio = () => {
    return (
        <div>
            <div class="flex flex-col items-center justify-center bg-base-100 shadow-2xl">
                <figure class="px-10 pt-10">
                    <img src={profile} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Md Mehedi Hasan</h2>
                    <small>BSc in CSE (3rd year),BU</small>

                    <div className='grid grid-cols-2 xs:grid-cols-1 gap-10'>
                        <div>
                            <h2 className='text-2xl font-bold text-amber-400 align-center bg-amber-100'>Education</h2>
                            <p>I am Md Mehedi Hasan Rubel. I am a full stack web developer and inerested to work with any kind of web development related job. I fond of block chain technology and I will explore that field insaAllah.</p>
                            <div className='bg-slate-200 font-bold text-xl  mt-4'>
                                <p className='text-amber-400'>Secondary School Certificate</p>
                                <p>Selonda High School</p>
                                <p>Department:Science</p>
                                <p>Passing Year:2013</p>
                                <p>GPA:5.00</p>
                            </div>
                            <div className='bg-slate-200 font-bold text-xl  mt-4'>
                                <p className='text-amber-400'>Higher Secendary Certificate </p>
                                <p>Ullapara Science College</p>
                                <p>Department:Science</p>
                                <p>Passing Year:2015</p>
                                <p>GPA:4.92</p>
                            </div>
                            <div className='bg-slate-200 font-bold text-xl  mt-4'>
                                <p className='text-amber-400'>Under Graduation </p>
                                <p>Bangladesh University</p>
                                <p>Department:CSE</p>
                                <p>Passing Year:2023*</p>
                                <p>CGPA:3.88*</p>
                            </div>


                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-amber-400 align-center bg-amber-100'>Skills</h2>
                            <p className='my-4'>HI! First of all I can say I love to work with technology. So That I can do code  and explore all time. I am quick learner and ready to adopt any technology based on fronted and backend. I have several projects and plenty of skills. I am full stack Developer and ready to do job.</p>
                            <div>
                                <p> <span className='font-bold'>HTML</span><progress class="progress progress-warning w-xs h-4 m-1" value="90" max="100">hi</progress></p>
                                <p> <span className='font-bold'>CSS</span><progress class="progress progress-warning w-xs h-4 m-1" value="80" max="100">hi</progress></p>
                                <p> <span className='font-bold'>JavaScript</span><progress class="progress progress-warning w-xs h-4 m-1" value="70" max="100">hi</progress></p>
                                <p> <span className='font-bold'>BootStrap/ Tailwind</span><progress class="progress progress-warning w-xs h-4 m-1" value="85" max="100">hi</progress></p>
                                <p> <span className='font-bold'>React</span><progress class="progress progress-warning w-xs h-4 m-1" value="70" max="100">hi</progress></p>
                                <p> <span className='font-bold'>Node</span><progress class="progress progress-warning w-xs h-4 m-1" value="50" max="100">hi</progress></p>
                                <p> <span className='font-bold'>Express JS</span><progress class="progress progress-warning w-xs h-4 m-1" value="55" max="100">hi</progress></p>
                                <p> <span className='font-bold'>MongoDB</span><progress class="progress progress-warning w-xs h-4 m-1" value="75" max="100">hi</progress></p>


                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold bg-amber-100 p-4'>My Live Project About REACT/JS/MONGODB/EXPRESS JS</h1>
                    <div className='text-center font-bold bg-slate-300 p-4'>
                        <h1 className='text-amber-400'>Project 1</h1>
                        <p>Project Name:FridgeBD</p>
                        <a className='btn btn-sm' href="https://fridge-bd.web.app/"> Click Here</a>
                    </div>
                    <div className='text-center font-bold bg-slate-300 p-4'>
                        <h1 className='text-amber-400'>Project 2</h1>
                        <p>Project Name:The Tour Bees</p>
                        <a className='btn btn-sm' href="https://the-tour-bees-cdf1c.web.app/"> Click Here</a>
                    </div>
                    <div className='text-center font-bold bg-slate-300 p-4'>
                        <h1 className='text-amber-400'>Project 3</h1>
                        <p>Project Name:ICE CREAM Site</p>
                        <a className='btn btn-sm' href="https://icecream-fans.netlify.app/"> Click Here</a>
                    </div>


                </div>
                <a className='my-12' href="/src/assets/Banner/profile-1.png" download><button className='btn btn-sm bg-amber-400'>Download My Resume</button>

                </a>
            </div>
        </div>
    );
};

export default Portfolio;