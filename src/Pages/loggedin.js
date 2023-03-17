import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn, setLoginLocalStorageStateToInActive } from '../lib/local-storage.util';
import './Logged1.css';

const Logged = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isUserLoggedIn()) {
            navigate("/");
        }
    }, [])

    const handleLogOut = () => {
        setLoginLocalStorageStateToInActive()
        navigate("/", { replace: true })
    }
    return (
        <main id="login-scr">
            <div>
                <h1>
                    Welcome User ,You're Logged In
                </h1>

                <button className='logout' onClick={handleLogOut}>
                    Log out
                </button>

            </div>
        </main>
    );
}
export default Logged;