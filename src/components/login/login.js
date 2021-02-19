import React from 'react';
import './login.css'
import LoginButtons from './loginButtons/loginButtons';
import LoginForm from './loginForm/loginForm';

function Login(){
    return(
        <div className="container">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt=""/>
            <LoginButtons/>
            <LoginForm/>
            <img src="logo-stackoverflow-logo1.png" alt=""/>
        </div>
    )
}

export default Login;