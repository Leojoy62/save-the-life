import React from 'react';
import { useHistory, useLocation } from 'react-router';
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
            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;