import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className=" card w-96 bg-base-100 shadow-xl  ml-10">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">{user.displayName}</h2>
                    <p className='text-center'>Email::{user.email}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;