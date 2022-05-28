import React from 'react';

const Blog = () => {
    return (
        <div>
            <div id='reviews' className='mb-20 px-40'>
                <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Our Blog</h2>
                <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>

                <div className='grid grid-cols-1 text-center'>

                    <div class="stat flex flex-col">
                        <div>
                            <h1 className='text-2xl font-bold bg-amber-400 py-4'>How Will You Improve The Performance of React Application?</h1>
                            <div class="text-xl text-left">
                                <p><span className='font-bold text-amber-400'>1. Keeping component state local where necessary:</span> A state modification in a parent component causes the parent and its child components to re-render.
                                    To ensure that re-rendering a component only occurs when it is required, we can remove the code that manages the component state and make it local to that code.
                                </p>
                                <p><span className='font-bold text-amber-400'>2. Memoizing React components to prevent unnecessary re-renders:</span> Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.
                                    Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                                    In essence, if a child component receives a prop, a memoized component shallowly compares the prop by default and skips re-rendering the child component if the prop hasn’t change
                                </p>
                                <p><span className='font-bold text-amber-400'>3. Code-splitting in React using dynamic import ():</span> Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.

                                    The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user’s satisfaction.
                                </p>
                                <p><span className='font-bold text-amber-400'>4. Lazy loading images in React:</span> To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="stat flex flex-col">
                        <div>
                            <h1 className='text-2xl font-bold bg-amber-400 py-4'> What are the different ways to manage a state in a React application?</h1>
                            <div class="text-xl text-left">
                                <p>The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

                                    Hooks
                                    React Context API
                                    Apollo Link State
                                </p>
                                <p><span className='font-bold text-amber-400'>Using setState():</span> The built-in setState() method updates a variable’s value in the classes’ local store. This local store allows the updated variable values to be accessed by any function that may require these values.

                                    setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state; this re-render is often based on user-triggered events.
                                </p>

                            </div>
                        </div>

                        <div>
                            <h1 className='text-2xl font-bold bg-amber-400 py-4'> How does prototypical inheritance work?</h1>
                            <div class="text-xl text-left">

                                <p><span className='font-bold text-amber-400'>Inheriting properties:</span> JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                                </p>
                                <p><span className='font-bold text-amber-400'>Using Prototypes:</span> In JavaScript, as mentioned above, functions are able to have properties. All functions have a special property named prototype. Please note that the code below is free-standing (it is safe to assume there is no other JavaScript on the webpage other than the below code). For the best learning experience, it is highly recommended that you open a console, navigate to the "console" tab, copy-and-paste in the below JavaScript code, and run it by pressing the Enter/Return key.
                                </p>

                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold bg-amber-400 py-4'> You have an array of products.Each product has a name, price, description, etc.How will you implement a search to find products by name?</h1>
                            <div class="text-xl text-left">

                                <p><span className='font-bold text-amber-400'>Array.prototype.find():</span> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
                                </p>


                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold bg-amber-400 py-4'>What is a unit test? Why should write unit tests?</h1>
                            <div class="text-xl text-left">

                                <p>
                                    The workflow of unit testing in software testing usually follows this framework:

                                    Create the test cases
                                    Review or rework
                                    Baseline
                                    Execute test cases
                                </p>
                                <p><span className='font-bold text-amber-400'>Array.prototype.find():</span> Unit test cases should be self-contained so that if any modifications are needed, they may be made without affecting the others. Only one piece of code should be tested at a time, and naming standards should be followed to make the process much clearer and easier. Before moving on to the next phase, any bugs found should be resolved. Depending on the application being tested and the testing methodologies utilized by the developers or independent testers, the unit testing procedure might be simple or complex.
                                </p>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;