import React from 'react';
import { Link } from 'react-router-dom';
import './Logged1.css';

const Logged = () => {
    return (
        <main id="login-scr">
            <div>
            <h1>
                Welcome User ,You're Logged In
            </h1>
            <Link to="/">
            <button className='logout'>
                Log out
            </button>
            </Link>
            </div>
        </main>
    );
}
export default Logged;