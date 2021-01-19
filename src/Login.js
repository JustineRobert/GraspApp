import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img src="https://drive.google.com/drive/folders/1MnP1byygipjvqhCx-Tw3fJzlYRcRjnhx" alt="" />

            <form>
                <input placeholder="Full name required if registering" type="text" />
                <input placeholder="profile Pic URL (optional)" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button>Sign In</button>
            </form>

            <p>Not a GraspApp member?</p>
            <span>Register Now</span>       
        </div>
    )
}

export default Login;
