import React from 'react';
import './NotLoggedin1.css';

const NotLogged = () => {
    return (
        <main id="notlogin-scr">
            <div>
            <h1>
              You're not logged in 
            </h1>
            <h3>
             Please login first
            </h3>
            <button>
               Back to Login
            </button>
            </div>
        </main>
    );
}
export default NotLogged;