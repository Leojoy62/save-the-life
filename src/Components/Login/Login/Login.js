import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {


    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <h2>Please login</h2>
            <form onSubmit="" >
                <input onBlur="" type="email" name="" id="" placeholder="Your Email" required />
                <br />
                <input onBlur="" type="password" name="" id="" required />
                <br />
                <input type="submit" value="Submit" />

            </form>

            <p>New to Save The Life? <Link to="/signup">Sign Up</Link></p>
            <div>.........OR.........</div>


            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;