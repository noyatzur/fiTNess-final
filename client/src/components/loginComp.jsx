import React from 'react';
import { Link } from 'react-router-dom';
import '../css/loginComp.css';

function LoginComp() {
    return (
        <div className="login-container">
            <div className="login-bg-bars"></div>
            <div className="login-content">
                <Link to="Login" className="login-link">
                    <button className="login1">
                        <p className="login-text">התחבר כאן</p>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LoginComp;
