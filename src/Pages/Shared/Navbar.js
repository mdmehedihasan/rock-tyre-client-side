import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><a href="home#reviews">Review</a></li>
        <li><Link to="/blog">Blog</Link></li>
        {

            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }


        <li className='text-xl'>{user
            ? <span className='flex bg-white'>
                <button onClick={logout} className='btn btn-ghost'>Signout</button>
                <p>{user?.displayName}</p>

            </span>
            : <Link to="/login">Login</Link>
        }</li>

    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl font-bold text-amber-400" to="/">ROCK TYRE</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    {menuItems}
                </ul>
            </div>
            {
                user && <div className="navbar-end">
                    <label for="my-drawer-2" className="btn bg-amber-400 drawer-button lg:hidden">Dashboard</label>
                </div>
            }

        </div>
    );
};

export default Navbar;