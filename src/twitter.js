import React from 'react';
import './twitupd.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/* import Logged from './Pages/loggedin'; */


const TwitterLogin = () => {
    const [todos, setTodos] = useState('');

    const [inputValue, setInputValue] = useState('');

    const InputChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }

    return (
        <><main>
            <div>
              {/*   <h1 style={{ fontSize: "31px" }}> Sign in to Twitter</h1>
                <button className="imp">  Sign in with Google</button>
                <br />
                <button className="imp" style={{ fontWeight: "bold" }}> Sign in with
                    Apple</button>
                <br />
                <p className="or" style={{ fontWeight: "bold" }}> or </p> */}
                <h1>Login</h1>
                <span style={{textAlign: "left"}}>Email</span>
                <br/>
                                <input type={'text'} className="input"
                    value={inputValue} onChange={InputChange} />
                <br></br>
                <span>Password</span>
                <br/>
                <input type={"password"} className="password" />
                <br />
                <Link to="/login">
                    <button id="dark">Login</button>
                </Link>
               {/*  <br />
                <button className="imp" style={{ fontWeight: "bold" }}>Forgot Password?</button>
                <br />
                <p style={{ fontSize: " 13px" }}>Don't have an account?<a id="signup">Sign
                    up</a>
                </p> */}


            </div>        </main> </>
    );
}

export default TwitterLogin;