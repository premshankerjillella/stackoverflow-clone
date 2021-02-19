import React from 'react';
import './loginButtons.css';

function LoginButtons() {
    return (
        <div>
            <div>
                <button className="google">
                    <img src="googlelogo.svg" alt=""/>
                    Log in with Google
                    </button>
            </div>
            <div>
                <button className="github">
                    <img src="githublogo.svg" alt=""/>
                    Log in with Github
                </button>
            </div>
            <div>
                <button className="facebook">
                    <img src="facebooklogo.svg" alt=""/>
                    Log in with Facebook
            </button>
            </div>
        </div>
    );
}

export default LoginButtons;
