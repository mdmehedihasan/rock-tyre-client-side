import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const notify = () => toast("Wow! Your review has been added");

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='bg-slate-300 px-40'>
            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Add A Review</h2>
            <div className='bg-black w-100 mb-3' style={{ height: '1px' }}></div>
            <div className='w-50 flex flex-col items-center justify-center  py-9'>


                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    {/* name field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    {/* description field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>

                        <select required className="input input-bordered w-full max-w-xs" {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is required'
                            }
                        })}>
                            <option value="">Your Rating</option>
                            <option value="1⭐">1⭐</option>
                            <option value="2⭐">2⭐</option>
                            <option value="3⭐">3⭐</option>
                            <option value="4⭐">4⭐</option>
                            <option value="5⭐">5⭐</option>

                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>

                        </select>
                        <br />

                    </div>


                    <input className='mb-2 p-2 border-2 border-black rounded-lg cursor-pointer' onClick={notify} type="submit" value="Add Review" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddReview;