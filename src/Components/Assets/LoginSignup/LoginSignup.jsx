import React, { useState } from 'react';
import './LoginSignup.css';

const user_icon = require('../../Assets/Icons/person.png');
const email_icon = require('../../Assets/Icons/email.png');
const password_icon = require('../../Assets/Icons/password.png');

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={user_icon} alt="user icon" />
                        <input type="text" placeholder="Username" />
                    </div>}

                    <div className="input">
                        <img src={email_icon} alt="email icon" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="password icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
