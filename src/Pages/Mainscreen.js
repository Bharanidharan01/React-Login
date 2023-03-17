import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainscr.css';

     
function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    

    function handleEmailChange(event) {

        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    }
 
    function handlePasswordChange(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegex.test(password);
    }

    function handleSubmit(event) {
    event.preventDefault(); 
        if (isEmailValid && isPasswordValid) {
            navigate('/login');
        } else {
            alert('Please enter a valid email and password.');
        }
    }

    return (
        <form onSubmit={handleSubmit} id="screen1">
            <div id="content">
                <span>
                    Login
                </span>
                <br/>
                <br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>

                <nav id="flex">  
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br/>
                <br/>
       
                <button type="submit">Submit</button>
                 </nav>
                
            </div></form>

    );
}

export default LoginForm;

