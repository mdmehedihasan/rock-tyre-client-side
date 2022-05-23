import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const notify = () => toast("Wow! Your item has been added");

    const { register, handleSubmit } = useForm();

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
        <div>

            <div className='w-50 flex flex-col items-center justify-center bg-slate-300 py-9'>
                <h2 className='tex-5xl font-bold pb-6'>Add A Review</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 p-2 border-2 border-black rounded-lg' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                    <textarea className='mb-2 p-2 border-2 border-black rounded-lg' placeholder='Description' {...register("description")} /><br />
                    <input className='mb-2 p-2 border-2 border-black rounded-lg' placeholder='Quantity' type="number" {...register("quantity")} /><br />
                    <input className='mb-2 p-2 border-2 border-black rounded-lg' placeholder='Photo URL' type="text" {...register("img")} /><br />
                    <input className='mb-2 p-2 border-2 border-black rounded-lg' onClick={notify} type="submit" value="Add Review" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddReview;