import React,{useEffect} from 'react';
import './Login.css';
import {loginUrl} from './spotify';
import { getTokenFromUrl} from './spotify';

function Login() {
   
    return (
        <div className='login'>
            <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg'
            alt=''/>
            {/* spotify logo */}
            {/* Login with spotify account */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
   
        </div>
    )
}

export default Login;
