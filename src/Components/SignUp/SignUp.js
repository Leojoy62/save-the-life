import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import initializeAuthentication from '../Login/Firebase/firebase.init';

initializeAuthentication();

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = e => {
        console.log(email, password);
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <h2>Please Sign Up</h2>
                <form onSubmit={handleSignUp} >
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" required />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>Already Have An Account?  <Link to="/login">Log in</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;