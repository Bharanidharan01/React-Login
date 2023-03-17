import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn, setLoginLocalStorageStateToActive } from '../lib/local-storage.util';
import './mainscr.css';


function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    React.useEffect(() => {
        if (isUserLoggedIn()) {
            navigate("/home");
        }
    }, [])

    // const [isEmailValid, setIsEmailValid] = useState(false);
    // const [isPasswordValid, setIsPasswordValid] = useState(false);


    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    function handlePasswordChange(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    // function validateEmail(email) {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }

    // function validatePassword(password) {
    //     // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
    //     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    //     return passwordRegex.test(password);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        const errorMessage = "Credentials is wrong"
        try {
            if (email && password) {
                if (email === "bharani@cool.com") {
                    if (password === "bh@123") {
                        setLoginLocalStorageStateToActive()
                        return navigate('/home');
                    }
                    else {
                        throw new Error(errorMessage)
                    }
                } else {
                    throw new Error(errorMessage)
                }
            }
            throw new Error("Please enter both email and password")
        } catch (error) {
            console.log(error)
            alert(`Please enter a valid email and password., ${error}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} id="screen1">
            <div id="content">
                <span>
                    Login
                </span>
                <br />
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>

                <nav id="flex">
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </nav>

            </div></form>

    );
}

export default LoginForm;

